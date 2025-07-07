"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, Phone, HelpCircle } from "lucide-react";
import { PlacesAutocomplete } from "@/components/ui/places-autocomplete";

export function Cta() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    timeline: "",
    height: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Map form data to admin app's quote structure
      const quoteData = {
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

      const apiUrl = `${process.env.NEXT_PUBLIC_ADMIN_API_URL}/api/quote-requests/`;
      
      // Comprehensive logging
      console.log('🚀 Starting quote submission...');
      console.log('📍 Environment:', process.env.NODE_ENV);
      console.log('🌐 API URL (dedicated endpoint):', apiUrl);
      console.log('📊 Quote data:', quoteData);
      console.log('🔗 Current origin:', window.location.origin);
      console.log('🏠 Current hostname:', window.location.hostname);
      console.log('🌍 User agent:', navigator.userAgent);

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
      
      // Submit to admin app's dedicated quote-requests endpoint
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

      let result;
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
      
      setSubmitted(true);
    } catch (error) {
      console.error('💥 Quote submission failed:');
      console.error('💥 Error:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      const errorName = error instanceof Error ? error.name : 'Unknown';
      
      console.error('💥 Error type:', errorName);
      console.error('💥 Error message:', errorMessage);
      if (error instanceof Error && error.stack) {
        console.error('💥 Error stack:', error.stack);
      }
      
      if (errorName === 'TypeError' && errorMessage.includes('Failed to fetch')) {
        console.error('💥 This is likely a CORS or network connectivity issue');
        setSubmitError('Unable to connect to our servers. This might be a temporary network issue. Please try again in a few moments or call us directly.');
      } else if (errorMessage.includes('CORS')) {
        console.error('💥 CORS policy error detected');
        setSubmitError('There was a configuration issue with our servers. Please call us directly and we\'ll take your information over the phone.');
      } else {
        setSubmitError(`Unable to submit your request: ${errorMessage}. Please try again or call us directly.`);
      }
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
              setFormData({
                name: "",
                phone: "",
                email: "",
                address: "",
                timeline: "",
                height: "",
              });
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
    <section id="contact" className="w-full py-12 sm:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6 mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
            Get Your Free Quote Today
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Get a professional wheelchair ramp installed as soon as 24 hours. 
            No commitment required.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
                      <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="space-y-4 sm:space-y-6">
                <div className="grid gap-3 sm:gap-4">
                  <Label htmlFor="name" className="text-sm font-medium">Your Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your full name" 
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="h-11 sm:h-12"
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="grid gap-3 sm:gap-4">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="(123) 456-7890" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="h-11 sm:h-12"
                    />
                  </div>

                  <div className="grid gap-3 sm:gap-4">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="h-11 sm:h-12"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:gap-4">
                  <Label htmlFor="address" className="text-sm font-medium">Installation Address</Label>
                  <PlacesAutocomplete 
                    id="address" 
                    placeholder="Start typing your address..." 
                    value={formData.address}
                    onChange={(value) => handleInputChange("address", value)}
                    required
                    className="h-11 sm:h-12"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="grid gap-3 sm:gap-4">
                    <Label htmlFor="timeline" className="text-sm font-medium">How soon do you need it?</Label>
                    <Select onValueChange={(value) => handleInputChange("timeline", value)} required>
                      <SelectTrigger className="h-11 sm:h-12">
                        <SelectValue placeholder="Select your timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">Within 24 hours</SelectItem>
                        <SelectItem value="within-3-days">Within 3 days</SelectItem>
                        <SelectItem value="within-1-week">Within 1 week</SelectItem>
                        <SelectItem value="flexible">I&apos;m flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-3 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="height" className="text-sm font-medium">Ramp Height (inches)</Label>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button 
                            type="button" 
                            className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full hover:bg-muted"
                            aria-label="How to measure height"
                          >
                            <HelpCircle className="h-4 w-4" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-lg mx-4">
                          <DialogHeader>
                            <DialogTitle>How to Measure Ramp Height</DialogTitle>
                            <DialogDescription>
                              Measure from the ground to the top of the step or threshold where the ramp will be installed. 
                              If you&apos;re not sure, we&apos;ll help you measure during our consultation call.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="bg-muted p-4 rounded-md">
                              <p className="text-sm">
                                <strong>Common heights:</strong>
                                <br />• Single step: 6-8 inches
                                <br />• Double step: 12-16 inches
                                <br />• Porch/deck: 24-36 inches
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <Input 
                      id="height" 
                      type="number"
                      placeholder="e.g., 24" 
                      value={formData.height}
                      onChange={(e) => handleInputChange("height", e.target.value)}
                      className="h-11 sm:h-12"
                      min="1"
                      max="60"
                    />
                    <p className="text-xs text-muted-foreground">
                      Optional - we can help measure during our call
                    </p>
                  </div>
                </div>
              </div>

              {submitError && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">
                    {submitError}
                    {process.env.NODE_ENV === 'development' && (
                      <details className="mt-2 text-xs">
                        <summary className="cursor-pointer font-semibold">Debug Info</summary>
                        <div className="mt-1 p-2 bg-gray-100 rounded text-gray-700">
                          <div>API URL: {process.env.NEXT_PUBLIC_ADMIN_API_URL}</div>
                          <div>Origin: {typeof window !== 'undefined' ? window.location.origin : 'N/A'}</div>
                          <div>Environment: {process.env.NODE_ENV}</div>
                          <div>Time: {new Date().toISOString()}</div>
                        </div>
                      </details>
                    )}
                  </AlertDescription>
                </Alert>
              )}

              <Button type="submit" size="lg" className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : formData.height.trim() ? "Get My Instant Quote" : "Get My Free Quote"}
              </Button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-8 sm:mt-10">
              <div className="border-t border-border pt-6 sm:pt-8">
                <p className="text-sm sm:text-base text-muted-foreground mb-4 text-center">
                  Prefer to speak with someone now?
                </p>
                <Button variant="outline" size="lg" className="w-full h-12 sm:h-14 text-base sm:text-lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (123) 456-7890
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } 