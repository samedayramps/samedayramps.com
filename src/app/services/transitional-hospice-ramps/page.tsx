import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Clock, Shield, CheckCircle, Phone, Users } from "lucide-react";
import Image from "next/image";

export default function TransitionalHospiceRamps() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                  Comfort & Dignity<br />
                  <span className="text-primary">During Difficult Times</span>
                </h1>
                <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                  When every moment matters, we provide safe, dignified home access for 
                  transitional care and hospice patients. Compassionate service when you need it most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Priority Installation
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    <Phone className="mr-2 h-5 w-5" />
                    24/7 Support Line
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/comfort_care.webp"
                  alt="Peaceful home environment with professional ramp access"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                We Understand What Matters Most
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                During transitional care and end-of-life situations, dignity and comfort are paramount. 
                Our compassionate team ensures safe, peaceful home access without added stress.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Dignity First</h3>
                <p className="text-lg leading-relaxed">
                  Maintain independence and dignity with safe, professional access solutions that respect privacy.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Immediate Response</h3>
                <p className="text-lg leading-relaxed">
                  Priority scheduling for urgent situations. Often same-day installation when time is critical.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Family Support</h3>
                <p className="text-lg leading-relaxed">
                  Compassionate service that supports the entire family during challenging transitions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Specialized Care Solutions
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Every situation is unique. We provide flexible, compassionate solutions 
                tailored to your specific needs and timeline.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Transitional Care</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>Post-acute care facility discharge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>Rehabilitation center to home transition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>Temporary medical equipment access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>Caregiver and family support</span>
                  </li>
                </ul>
                <Button variant="outline" size="lg" className="w-full">
                  Learn More
                </Button>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Hospice Care</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>Peaceful home environment access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>Medical equipment and bed access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>Family gathering facilitation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>Compassionate, respectful service</span>
                  </li>
                </ul>
                <Button size="lg" className="w-full">
                  Priority Service
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Trusted by Healthcare Providers
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                We work closely with hospice organizations, transitional care facilities, 
                and healthcare professionals to ensure seamless care transitions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Same-Day Service</h3>
                <p className="text-lg leading-relaxed">
                  Emergency installation available when time is critical for patient comfort.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Medical-Grade Safety</h3>
                <p className="text-lg leading-relaxed">
                  Professional installation meeting all healthcare facility standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Compassionate Team</h3>
                <p className="text-lg leading-relaxed">
                  Trained professionals who understand the sensitivity of these situations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Family-Centered Care</h3>
                <p className="text-lg leading-relaxed">
                  Supporting the entire family through difficult transitions with dignity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Families Find Peace of Mind
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <p className="text-lg leading-relaxed mb-4">
                  &quot;During Mom&apos;s final weeks, Same Day Ramps made it possible for her to come home. 
                  Their team was so respectful and understanding. It meant everything to our family.&quot;
                </p>
                <div className="font-semibold">— Jennifer L., Fort Worth</div>
              </Card>

              <Card className="p-6">
                <p className="text-lg leading-relaxed mb-4">
                  &quot;The hospice team recommended Same Day Ramps for our father. They installed 
                  the ramp the same day we called. Professional, compassionate, and exactly what we needed.&quot;
                </p>
                <div className="font-semibold">— Michael R., Dallas</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Healthcare Partners Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Healthcare Professional Resources
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                We partner with healthcare providers to ensure seamless patient care transitions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Discharge Planners</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Direct referral line for urgent patient discharge needs
                </p>
                <Button variant="outline">
                  Professional Portal
                </Button>
              </Card>

              <Card className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Hospice Organizations</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Preferred provider partnerships for patient comfort
                </p>
                <Button variant="outline">
                  Partnership Info
                </Button>
              </Card>

              <Card className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Case Managers</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Streamlined authorization and rapid deployment
                </p>
                <Button variant="outline">
                  Contact Team
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Compassionate Pricing
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                We understand the financial challenges during difficult times. 
                Flexible payment options and priority service when you need it most.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Transitional & Hospice Care</h3>
                <div className="text-4xl font-bold text-primary mb-4">$125/month</div>
                <p className="text-lg leading-relaxed mb-6">
                  Special pricing for healthcare transitions and hospice care
                </p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Same-day installation available
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Compassionate, respectful service
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    No long-term commitment required
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Flexible payment arrangements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Free removal when no longer needed
                  </li>
                </ul>
                <Button size="lg" className="w-full text-lg py-6">
                  Priority Service Request
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
              When Every Moment Matters
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Ensure dignity and comfort during life&apos;s most challenging moments. 
              Our compassionate team is ready to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Request Priority Service
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                24/7 Support: (123) 456-7890
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 