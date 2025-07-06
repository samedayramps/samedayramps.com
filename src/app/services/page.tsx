import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Heart, Home, CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Professional Wheelchair Ramp<br />
                <span className="text-primary">Rental Services</span>
              </h1>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Safe, professional aluminum ramps for every temporary accessibility need. 
                From emergency hospital discharge to aging in place solutions, we&apos;re here when you need us most.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Solutions for Every Situation
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Whether you need immediate access for hospital discharge, want to test solutions 
                for aging in place, or require compassionate care during difficult transitions, 
                we have the right service for you.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Post-Surgery Recovery */}
              <Card className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Post-Surgery Recovery</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Emergency ramp installation for hospital discharge. Professional-grade access 
                  installed in 24 hours when you need it most.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">24-hour installation</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Hospital discharge ready</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">6-12 week recovery periods</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-4">$150/month</div>
                <Link href="/services/post-surgery-ramps">
                  <Button size="lg" className="w-full mb-3">
                    Emergency Service
                  </Button>
                </Link>
                <Link href="/services/post-surgery-ramps" className="text-primary hover:underline inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>

              {/* Aging in Place */}
              <Card className="p-8 text-center border-primary">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Aging in Place</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Test different ramp solutions before committing to permanent changes. 
                  Rent-to-own options available for long-term accessibility needs.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Rent-to-own program</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Try before you buy</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">No property modifications</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-4">$125/month</div>
                <Link href="/services/aging-in-place-ramps">
                  <Button size="lg" className="w-full mb-3">
                    Start Your Trial
                  </Button>
                </Link>
                <Link href="/services/aging-in-place-ramps" className="text-primary hover:underline inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>

              {/* Transitional & Hospice */}
              <Card className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Transitional & Hospice</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Compassionate service for transitional care and hospice situations. 
                  Dignity and comfort during life&apos;s most challenging moments.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Same-day installation</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Compassionate team</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Flexible arrangements</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-4">$125/month</div>
                <Link href="/services/transitional-hospice-ramps">
                  <Button size="lg" className="w-full mb-3">
                    Priority Service
                  </Button>
                </Link>
                <Link href="/services/transitional-hospice-ramps" className="text-primary hover:underline inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Why Choose Same Day Ramps?
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Professional service, quality equipment, and compassionate care when you need it most.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Fast Installation</h3>
                <p className="text-lg leading-relaxed">
                  Emergency 24-hour service available for urgent needs like hospital discharge.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Professional Grade</h3>
                <p className="text-lg leading-relaxed">
                  1,000 lb capacity aluminum ramps with full safety features and ADA compliance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">No Commitment</h3>
                <p className="text-lg leading-relaxed">
                  Flexible rental periods. Keep it as long as you need, return when you don&apos;t.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Complete Service</h3>
                <p className="text-lg leading-relaxed">
                  Installation, maintenance, and removal all included. No hidden fees or surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Simple, Worry-Free Process
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                From your first call to final removal, we handle everything so you can focus on what matters most.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Free Consultation</h3>
                <p className="text-lg leading-relaxed">
                  Call us for a quick assessment. We&apos;ll determine your needs and provide transparent, 
                  upfront pricing with no surprises.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Professional Installation</h3>
                <p className="text-lg leading-relaxed">
                  Our trained team delivers and installs your ramp, ensuring it&apos;s safe, secure, 
                  and ready for immediate use.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Easy Removal</h3>
                <p className="text-lg leading-relaxed">
                  When you&apos;re ready, we&apos;ll schedule removal at your convenience. 
                  No damage to your property, no hassle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Don&apos;t let stairs be a barrier to safety and independence. 
              Get your free quote today and discover the perfect ramp solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Call: (123) 456-7890
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 