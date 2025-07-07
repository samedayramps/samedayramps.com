"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PlacesAutocomplete } from '@/components/ui/places-autocomplete';
import { QuoteFormData } from '@/lib/api/quote-requests';

interface QuoteFormProps {
  onSubmit: (data: QuoteFormData) => Promise<void>;
  isSubmitting?: boolean;
  submitError?: string | null;
  isSubmitted?: boolean;
}

export function QuoteForm({ onSubmit, isSubmitting = false, submitError = null, isSubmitted = false }: QuoteFormProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    height: '',
    timeline: ''
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }

    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    }

    if (!formData.timeline) {
      errors.timeline = 'Timeline is required';
    }

    // Height is optional but if provided should be a number
    if (formData.height && (isNaN(Number(formData.height)) || Number(formData.height) <= 0)) {
      errors.height = 'Height must be a positive number';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    await onSubmit(formData);
  };

  const handleInputChange = (field: keyof QuoteFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-green-700">Thank You!</CardTitle>
          <CardDescription className="text-lg">
            Your quote request has been submitted successfully.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                         <p className="text-green-800 font-semibold">We&apos;ll contact you within 24 hours</p>
             <p className="text-green-700 text-sm mt-2">
               Our team will review your request and provide you with a detailed quote and timeline.
             </p>
           </div>
           <div className="text-sm text-muted-foreground">
             <p>Need immediate assistance? Call us at{' '}
               <a href="tel:+1234567890" className="font-semibold text-primary hover:underline">
                 (123) 456-7890
               </a>
             </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Get Your Free Quote</CardTitle>
        <CardDescription>
          Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed quote.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                className={formErrors.name ? 'border-red-500' : ''}
                disabled={isSubmitting}
              />
              {formErrors.name && (
                <p className="text-sm text-red-600">{formErrors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email address"
                className={formErrors.email ? 'border-red-500' : ''}
                disabled={isSubmitting}
              />
              {formErrors.email && (
                <p className="text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Enter your phone number"
              className={formErrors.phone ? 'border-red-500' : ''}
              disabled={isSubmitting}
            />
            {formErrors.phone && (
              <p className="text-sm text-red-600">{formErrors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Service Address *</Label>
            <PlacesAutocomplete
              value={formData.address}
              onChange={(value) => handleInputChange('address', value)}
              placeholder="Enter the address where you need the ramp installed"
              className={formErrors.address ? 'border-red-500' : ''}
            />
            {formErrors.address && (
              <p className="text-sm text-red-600">{formErrors.address}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height">Ramp Height (inches)</Label>
              <Input
                id="height"
                type="number"
                value={formData.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
                placeholder="Optional - height in inches"
                className={formErrors.height ? 'border-red-500' : ''}
                disabled={isSubmitting}
                min="1"
                max="120"
              />
              {formErrors.height && (
                <p className="text-sm text-red-600">{formErrors.height}</p>
              )}
                             <p className="text-xs text-muted-foreground">
                 If you don&apos;t know the height, we&apos;ll measure during our free consultation.
               </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Timeline *</Label>
              <Select 
                value={formData.timeline} 
                onValueChange={(value) => handleInputChange('timeline', value)}
                disabled={isSubmitting}
              >
                <SelectTrigger className={formErrors.timeline ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select your timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP (Same Day)</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="next-week">Next Week</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
              {formErrors.timeline && (
                <p className="text-sm text-red-600">{formErrors.timeline}</p>
              )}
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

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            <p>
              By submitting this form, you agree to our{' '}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
              {' '}and{' '}
              <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
} 