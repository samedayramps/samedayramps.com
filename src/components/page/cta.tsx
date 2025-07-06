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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
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
                              Simple measurement from ground to door
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6">
                            {/* Simple Instructions */}
                            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                              <h3 className="font-semibold text-lg mb-4 text-center">3 Easy Steps</h3>
                              <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">1</div>
                                  <div>
                                    <p className="font-medium">Go to your door</p>
                                    <p className="text-sm text-gray-600">Stand where the ramp will be installed</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">2</div>
                                  <div>
                                    <p className="font-medium">Measure up</p>
                                    <p className="text-sm text-gray-600">From ground to the bottom of your door frame</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">3</div>
                                  <div>
                                    <p className="font-medium">Enter inches</p>
                                    <p className="text-sm text-gray-600">Type the number (like 18 or 24)</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Common Heights */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-medium text-sm mb-2">Common Heights:</h4>
                              <div className="grid grid-cols-3 gap-2 text-xs">
                                <div className="text-center p-2 bg-white rounded border">
                                  <div className="font-bold">18&quot;</div>
                                  <div className="text-gray-600">1 step</div>
                                </div>
                                <div className="text-center p-2 bg-white rounded border">
                                  <div className="font-bold">24&quot;</div>
                                  <div className="text-gray-600">2 steps</div>
                                </div>
                                <div className="text-center p-2 bg-white rounded border">
                                  <div className="font-bold">36&quot;</div>
                                  <div className="text-gray-600">3 steps</div>
                                </div>
                              </div>
                            </div>

                            {/* Not sure option */}
                            <div className="bg-green-50 border border-green-200 p-3 rounded-md">
                              <p className="text-sm font-medium text-green-800">Not sure? No problem!</p>
                              <p className="text-sm text-green-700">
                                Leave this blank and we&apos;ll help you measure when we call.
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <Input 
                      id="height" 
                      type="number"
                      placeholder="e.g., 18" 
                      value={formData.height}
                      onChange={(e) => handleInputChange("height", e.target.value)}
                      className="h-11 sm:h-12"
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold">
                {formData.height.trim() ? "Get My Instant Quote" : "Get My Free Quote"}
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