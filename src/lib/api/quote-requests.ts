// Types for quote request data
export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  height: string;
  timeline: string;
}

export interface QuoteRequestPayload {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceAddress: string;
  rampHeight?: number;
  timeline: string;
  notes: string;
  source: string;
  priority: string;
}

export interface QuoteResponse {
  data?: {
    id: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

// API submission function
export async function submitQuoteRequest(formData: QuoteFormData): Promise<QuoteResponse> {
  // Map form data to admin app's quote structure
  const quoteData: QuoteRequestPayload = {
    customerName: formData.name,
    customerEmail: formData.email,
    customerPhone: formData.phone,
    serviceAddress: formData.address,
    rampHeight: formData.height ? parseInt(formData.height) : undefined,
    timeline: formData.timeline,
    notes: `Quote request from website - ${formData.timeline} timeline. Height: ${formData.height} inches.`,
    source: 'website',
    priority: formData.timeline === 'asap' ? 'high' : 'normal'
  };

  const apiUrl = `${process.env.NEXT_PUBLIC_ADMIN_API_URL}/api/website-requests/`;
  
  // Comprehensive logging
  console.log('🚀 Starting quote submission...');
  console.log('📍 Environment:', process.env.NODE_ENV);
  console.log('🌐 API URL (dedicated endpoint):', apiUrl);
  console.log('📊 Quote data:', quoteData);
  console.log('🔗 Current origin:', typeof window !== 'undefined' ? window.location.origin : 'N/A');
  console.log('🏠 Current hostname:', typeof window !== 'undefined' ? window.location.hostname : 'N/A');
  console.log('🌍 User agent:', typeof window !== 'undefined' ? navigator.userAgent : 'N/A');

  // Test if the admin API is reachable with a simple request first
  console.log('🔍 Testing admin API connectivity...');
  
  try {
    const healthCheck = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_API_URL}/api/health/`, {
      method: 'GET',
      mode: 'cors'
    });
    console.log('✅ Health check response status:', healthCheck.status);
    console.log('✅ Health check response headers:', [...healthCheck.headers.entries()]);
  } catch (healthError) {
    console.warn('⚠️ Health check failed:', healthError);
    console.warn('⚠️ This might indicate CORS or connectivity issues');
  }

  console.log('📤 Submitting quote request to dedicated endpoint...');
  
  // Submit to admin app's dedicated website-requests endpoint
  const response = await fetch(apiUrl, {
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(quoteData),
  });

  console.log('📥 Response received:');
  console.log('📊 Status:', response.status);
  console.log('📊 Status text:', response.statusText);
  console.log('📊 Headers:', [...response.headers.entries()]);
  console.log('📊 URL:', response.url);
  console.log('📊 Redirected:', response.redirected);
  console.log('📊 Type:', response.type);

  if (!response.ok) {
    const errorText = await response.text();
    console.error('❌ Error response body:', errorText);
    throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`);
  }

  let result: QuoteResponse;
  try {
    result = await response.json();
    console.log('✅ Parsed response:', result);
  } catch (parseError) {
    console.error('❌ Failed to parse response as JSON:', parseError);
    const textResponse = await response.text();
    console.error('❌ Response text:', textResponse);
    throw new Error('Invalid JSON response from server');
  }

  console.log('🎉 Quote created successfully:', result.data?.id);
  return result;
}

// Health check function
export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_API_URL}/api/health/`, {
      method: 'GET',
      mode: 'cors'
    });
    return response.ok;
  } catch {
    return false;
  }
}

// Error handling utility
export function getErrorMessage(error: unknown): string {
  const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
  const errorName = error instanceof Error ? error.name : 'Unknown';
  
  if (errorName === 'TypeError' && errorMessage.includes('Failed to fetch')) {
    return 'Unable to connect to our servers. This might be a temporary network issue. Please try again in a few moments or call us directly.';
  } else if (errorMessage.includes('CORS')) {
    return 'There was a configuration issue with our servers. Please call us directly and we\'ll take your information over the phone.';
  } else {
    return `Unable to submit your request: ${errorMessage}. Please try again or call us directly.`;
  }
} 