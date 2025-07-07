"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function DebugPage() {
  const [results, setResults] = useState<Array<{
    test: string;
    status: 'success' | 'error' | 'warning';
    message: string;
    details?: Record<string, unknown>;
  }>>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runTests = async () => {
    setIsRunning(true);
    setResults([]);
    const testResults: typeof results = [];

    // Test 1: Environment Variables
    console.log('🧪 Testing environment variables...');
    if (process.env.NEXT_PUBLIC_ADMIN_API_URL) {
      testResults.push({
        test: 'Environment Variables',
        status: 'success',
        message: `API URL configured: ${process.env.NEXT_PUBLIC_ADMIN_API_URL}`,
        details: {
          apiUrl: process.env.NEXT_PUBLIC_ADMIN_API_URL,
          nodeEnv: process.env.NODE_ENV
        }
      });
    } else {
      testResults.push({
        test: 'Environment Variables',
        status: 'error',
        message: 'NEXT_PUBLIC_ADMIN_API_URL not configured'
      });
    }

    // Test 2: Basic Connectivity
    console.log('🧪 Testing basic connectivity...');
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_API_URL}/api/health/`, {
        method: 'GET',
        mode: 'cors'
      });
      
      testResults.push({
        test: 'Basic Connectivity',
        status: 'success',
        message: `Health check successful (${response.status})`,
        details: {
          status: response.status,
          statusText: response.statusText,
          headers: [...response.headers.entries()],
          url: response.url,
          redirected: response.redirected
        }
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      testResults.push({
        test: 'Basic Connectivity',
        status: 'error',
        message: `Health check failed: ${errorMessage}`,
        details: { error: error instanceof Error ? error.stack : error }
      });
    }

    // Test 3: CORS Preflight (via proxy)
    console.log('🧪 Testing CORS preflight via proxy...');
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_API_URL}/api/proxy/?path=/quotes`, {
        method: 'OPTIONS',
        mode: 'cors',
        headers: {
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Request-Headers': 'Content-Type',
        }
      });
      
      testResults.push({
        test: 'CORS Preflight (via proxy)',
        status: 'success',
        message: `Preflight successful (${response.status})`,
        details: {
          status: response.status,
          headers: [...response.headers.entries()],
          corsHeaders: {
            'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
            'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
            'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers'),
          }
        }
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      testResults.push({
        test: 'CORS Preflight (via proxy)',
        status: 'error',
        message: `Preflight failed: ${errorMessage}`,
        details: { error: error instanceof Error ? error.stack : error }
      });
    }

    // Test 4: Actual API Call (via proxy)
    console.log('🧪 Testing actual API call via proxy...');
    try {
      const testData = {
        customerName: 'Test Customer',
        customerEmail: 'test@example.com',
        customerPhone: '123-456-7890',
        serviceAddress: 'Test Address',
        timeline: 'flexible',
        notes: 'Test quote from debug page',
        source: 'debug'
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_API_URL}/api/proxy/?path=/quotes`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      if (response.ok) {
        const result = await response.json();
        testResults.push({
          test: 'API Call (via proxy)',
          status: 'success',
          message: `Quote API call successful (${response.status})`,
          details: {
            status: response.status,
            response: result,
            quoteId: result.data?.id
          }
        });
      } else {
        const errorText = await response.text();
        testResults.push({
          test: 'API Call (via proxy)',
          status: 'error',
          message: `API call failed: ${response.status} ${response.statusText}`,
          details: {
            status: response.status,
            statusText: response.statusText,
            response: errorText,
            headers: [...response.headers.entries()]
          }
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      testResults.push({
        test: 'API Call (via proxy)',
        status: 'error',
        message: `API call failed: ${errorMessage}`,
        details: { error: error instanceof Error ? error.stack : error }
      });
    }

    setResults(testResults);
    setIsRunning(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'error': return <XCircle className="h-5 w-5 text-red-600" />;
      case 'warning': return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      default: return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">API Debug Tool</h1>
        <p className="text-muted-foreground">
          Use this tool to diagnose connectivity issues with the admin API.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>System Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>Environment: {process.env.NODE_ENV}</div>
          <div>API URL: {process.env.NEXT_PUBLIC_ADMIN_API_URL || 'Not configured'}</div>
          <div>Origin: {typeof window !== 'undefined' ? window.location.origin : 'N/A'}</div>
          <div>User Agent: {typeof window !== 'undefined' ? navigator.userAgent : 'N/A'}</div>
        </CardContent>
      </Card>

      <Button 
        onClick={runTests} 
        disabled={isRunning}
        className="mb-8"
      >
        {isRunning ? 'Running Tests...' : 'Run Connectivity Tests'}
      </Button>

      {results.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Test Results</h2>
          {results.map((result, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getStatusIcon(result.status)}
                  {result.test}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Alert className={
                  result.status === 'success' ? 'border-green-200 bg-green-50' :
                  result.status === 'error' ? 'border-red-200 bg-red-50' :
                  'border-yellow-200 bg-yellow-50'
                }>
                  <AlertDescription className={
                    result.status === 'success' ? 'text-green-800' :
                    result.status === 'error' ? 'text-red-800' :
                    'text-yellow-800'
                  }>
                    {result.message}
                  </AlertDescription>
                </Alert>
                
                {result.details && (
                  <details className="mt-4">
                    <summary className="cursor-pointer font-semibold mb-2">
                      Technical Details
                    </summary>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
                      {JSON.stringify(result.details, null, 2)}
                    </pre>
                  </details>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
} 