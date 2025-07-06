import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Shield, CheckCircle, Phone } from "lucide-react";
import Image from "next/image";

export default function PostSurgeryRamps() {
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
                  Hospital Discharge Tomorrow?<br />
                  <span className="text-primary">Get Your Ramp Today</span>
                </h1>
                <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                  Don&apos;t let stairs delay your recovery. Our professional-grade aluminum ramps install in 24 hours, 
                  ensuring safe home access for post-surgery patients in Dallas-Fort Worth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Get Emergency Quote
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: (123) 456-7890
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/hospital_discharge.webp"
                  alt="Professional ramp installation for hospital discharge patient"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                The Hospital Discharge Crisis
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Hospitals won&apos;t discharge patients without safe home access. Don&apos;t let stairs keep your loved one 
                in the hospital longer or force dangerous transfers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Time-Sensitive Crisis</h3>
                <p className="text-lg leading-relaxed">
                  Hospitals require safe home access before discharge. Delays can extend hospital stays and increase costs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Safety Requirements</h3>
                <p className="text-lg leading-relaxed">
                  DIY solutions are dangerous during recovery. Professional installation ensures patient safety and compliance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Solution</h3>
                <p className="text-lg leading-relaxed">
                  Professional-grade ramps installed in 24 hours. ADA-compliant, safe, and ready for immediate use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Perfect for Post-Surgery Recovery
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Our rental ramps are specifically designed for temporary medical needs, offering the perfect 
                solution during your 6-12 week recovery period.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">24-Hour Installation</h3>
                <p className="text-lg leading-relaxed">
                  Emergency installation available to meet hospital discharge deadlines.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">ADA-Compliant Safety</h3>
                <p className="text-lg leading-relaxed">
                  Professional-grade aluminum with 1:12 slope ratio and full safety features.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Temporary Solution</h3>
                <p className="text-lg leading-relaxed">
                  Perfect for 6-12 week recovery periods. Easy removal when no longer needed.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Healthcare Partner</h3>
                <p className="text-lg leading-relaxed">
                  We work directly with OTs, PTs, and discharge planners for seamless coordination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Families Trust Our Emergency Service
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <p className="text-lg leading-relaxed mb-4">
                  &quot;The hospital told us Dad needed a ramp to be discharged. I called Same Day Ramps, 
                  and they had a professional, sturdy ramp installed the very next day. It was a lifesaver.&quot;
                </p>
                <div className="font-semibold">— The Johnson Family, Dallas</div>
              </Card>

              <Card className="p-6">
                <p className="text-lg leading-relaxed mb-4">
                  &quot;I was so worried about my husband using a flimsy DIY ramp after his surgery. 
                  The quality and professional installation from Same Day Ramps gave us both incredible peace of mind.&quot;
                </p>
                <div className="font-semibold">— S. Williams, Fort Worth</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Transparent, All-Inclusive Pricing
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                No hidden fees. No surprises. Just professional service when you need it most.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Post-Surgery Recovery Package</h3>
                <div className="text-4xl font-bold text-primary mb-4">$150/month</div>
                <p className="text-lg leading-relaxed mb-6">
                  Includes professional installation, removal, and all safety features
                </p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    24-hour emergency installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    ADA-compliant aluminum construction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Full handrails and safety features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Professional removal when recovered
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Rent-to-own options available
                  </li>
                </ul>
                <Button size="lg" className="w-full text-lg py-6">
                  Get Emergency Quote Now
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
              Don&apos;t Let Stairs Delay Recovery
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Hospital discharge waiting on home access? Get a professional ramp installed in 24 hours. 
              Call now for emergency service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Schedule Emergency Installation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Line: (123) 456-7890
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 