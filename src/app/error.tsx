"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <AlertTriangle className="h-16 w-16 text-destructive mx-auto" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Something went wrong
            </h1>
            <p className="max-w-[600px] text-muted-foreground text-lg leading-relaxed">
              We&apos;re sorry, but something unexpected happened. Please try again or contact us if the problem persists.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button onClick={reset} size="lg">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>

          <div className="pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Error ID: {error.digest && <code className="text-xs bg-muted px-2 py-1 rounded">{error.digest}</code>}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Need help? <Link href="#contact" className="text-primary hover:underline">Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 