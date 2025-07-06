import { Clock, Shield, Calendar, Wrench } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-10 h-10 text-[#6b7cb8]" />,
    title: "Installation in 24 Hours",
    description: "We provide access when you need it most, without the wait.",
  },
  {
    icon: <Shield className="w-10 h-10 text-[#6b7cb8]" />,
    title: "Professional-Grade Ramps",
    description: "1,000 lb capacity aluminum ramps, installed by experts.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-[#6b7cb8]" />,
    title: "Simple Monthly Rentals",
    description: "No long-term contracts. We pick it up for free when you're done.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-[#6b7cb8]" />,
    title: "Worry-Free Service",
    description: "We handle everything, from delivery and professional installation to removal.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="services" className="w-full py-16 sm:py-20 lg:py-24 bg-muted relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-5">
        <div className="bg-muted w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
      </div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose Same Day Ramps?
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-lg leading-relaxed">
              We are the best choice for your temporary accessibility needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.title} className="grid gap-2 text-center">
              <div className="flex justify-center items-center h-12">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 