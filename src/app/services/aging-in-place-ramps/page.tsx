import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Heart, RefreshCw, CheckCircle, Phone } from "lucide-react";
import Image from "next/image";

export default function AgingInPlaceRamps() {
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
                  Safe Home Access for<br />
                  <span className="text-primary">Aging in Place</span>
                </h1>
                <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                  Test different ramp configurations before committing to permanent changes. 
                  Our rent-to-own program lets you find the perfect solution for your home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Start Your Trial
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    <Phone className="mr-2 h-5 w-5" />
                    Free Assessment
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/residential_installation.jpg"
                  alt="Professional ramp installation for aging in place"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Rental Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Why Rent Before You Buy?
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Permanent ramps are expensive and irreversible. Our rental program lets you 
                test different solutions and upgrade as needs change.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <RefreshCw className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Try Before You Buy</h3>
                <p className="text-lg leading-relaxed">
                  Test different ramp configurations and lengths to find what works best for your specific needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Home className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">No Property Changes</h3>
                <p className="text-lg leading-relaxed">
                  Keep your home&apos;s value intact. No permanent alterations or construction permits required.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Peace of Mind</h3>
                <p className="text-lg leading-relaxed">
                  Professional installation and maintenance included. No DIY risks or ongoing upkeep worries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rent-to-Own Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Rent-to-Own Program
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Start with a low monthly payment. If you decide to keep the ramp permanently, 
                your rental payments apply toward the purchase price.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold mb-2">Start Your Trial</h4>
                      <p className="text-muted-foreground">Begin with our monthly rental program. Test the ramp for as long as you need.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold mb-2">Decide to Purchase</h4>
                      <p className="text-muted-foreground">If you love the ramp, choose to buy it. We&apos;ll apply 75% of your rental payments to the purchase price.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold mb-2">Own Your Ramp</h4>
                      <p className="text-muted-foreground">The ramp becomes yours permanently. No more monthly payments, just peace of mind.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/residential_installation.jpg"
                  alt="Family using ramp at home"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Perfect for Many Situations
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Seasonal Safety</h3>
                <p className="text-lg leading-relaxed">
                  Winter ice and wet conditions make steps dangerous. Add a ramp during challenging months.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Visiting Family</h3>
                <p className="text-lg leading-relaxed">
                  Grandparents or relatives with mobility challenges visiting for extended periods.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Progressive Needs</h3>
                <p className="text-lg leading-relaxed">
                  As mobility changes over time, test different ramp lengths and configurations.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Caregiver Relief</h3>
                <p className="text-lg leading-relaxed">
                  Reduce strain on adult children who help with mobility. Make visits safer and easier.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Home Modifications</h3>
                <p className="text-lg leading-relaxed">
                  Planning renovations? Use a temporary ramp while you design permanent accessibility features.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Equipment Changes</h3>
                <p className="text-lg leading-relaxed">
                  Switching from walker to wheelchair? Test what ramp length works best for your new equipment.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Families Love the Flexibility
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <p className="text-lg leading-relaxed mb-4">
                  &quot;We weren&apos;t sure if Mom would need the ramp permanently. The rent-to-own program 
                  let us try it for six months. Now she loves her independence and we bought it.&quot;
                </p>
                <div className="font-semibold">— Sarah M., Plano</div>
              </Card>

              <Card className="p-6">
                <p className="text-lg leading-relaxed mb-4">
                  &quot;The rental saved us from making an expensive mistake. We discovered we needed 
                  a longer ramp than originally planned. Now we have the perfect setup.&quot;
                </p>
                <div className="font-semibold">— Robert K., Arlington</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
                Flexible Pricing Options
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Monthly Rental</h3>
                <div className="text-4xl font-bold text-primary mb-4">$125/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Professional installation included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    All maintenance covered
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Easy removal when done
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    No long-term commitment
                  </li>
                </ul>
                <Button variant="outline" size="lg" className="w-full">
                  Start Rental
                </Button>
              </Card>

              <Card className="p-8 border-primary">
                <h3 className="text-2xl font-bold mb-4">Rent-to-Own</h3>
                <div className="text-4xl font-bold text-primary mb-4">$125/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Same monthly rate as rental
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    75% of payments apply to purchase
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Own it after 24 months
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Purchase option anytime
                  </li>
                </ul>
                <Button size="lg" className="w-full">
                  Start Rent-to-Own
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6">
              Try Before You Commit
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Why guess what you need? Start with our rental program and discover the perfect 
              accessibility solution for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Schedule Free Assessment
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