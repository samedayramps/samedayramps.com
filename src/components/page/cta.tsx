"use client";

import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { QuoteForm } from "@/components/forms/quote-form";
import { submitQuoteRequest, getErrorMessage, type QuoteFormData } from "@/lib/api/quote-requests";

export function Cta() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleQuoteSubmit = async (formData: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await submitQuoteRequest(formData);
      setSubmitted(true);
    } catch (error) {
      console.error('💥 Quote submission failed:', error);
      setSubmitError(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="w-full py-16 sm:py-20 lg:py-24 bg-muted">
        <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
          <Alert className="mx-auto max-w-2xl border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>Thank you for your quote request!</strong>
              <br />
              We&apos;ll call you within 2 hours to discuss your needs and provide a free quote.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">What happens next?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold">Quick Call</h4>
                  <p className="text-sm text-muted-foreground">We&apos;ll call within 2 hours to discuss measurements and timeline</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold">Free Quote</h4>
                  <p className="text-sm text-muted-foreground">Get your detailed quote with transparent pricing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold">Fast Installation</h4>
                  <p className="text-sm text-muted-foreground">Professional installation as soon as 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={() => {
              setSubmitted(false);
              setSubmitError(null);
            }}
            variant="outline"
            className="mx-auto"
          >
            Submit Another Request
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="w-full py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get Your Free Quote Today</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fast, professional ramp installation. Same-day service available.
          </p>
        </div>
        
        <QuoteForm 
          onSubmit={handleQuoteSubmit}
          isSubmitting={isSubmitting}
          submitError={submitError}
          isSubmitted={submitted}
        />
      </div>
    </section>
  );
} 