import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "The hospital told us Dad needed a ramp to be discharged. I called Same Day Ramps, and they had a professional, sturdy ramp installed the very next day. It was a lifesaver.",
    name: "The Johnson Family",
    location: "Dallas",
  },
  {
    quote:
      "I was so worried about my husband using a flimsy DIY ramp after his surgery. The quality and professional installation from Same Day Ramps gave us both incredible peace of mind.",
    name: "S. Williams",
    location: "Fort Worth",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 sm:py-20 lg:py-24 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-tr from-primary/10 via-transparent to-primary/5"></div>
      </div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              One Less Thing to Worry About
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-lg leading-relaxed">
              Hear from our satisfied customers.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 pt-12 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-0 shadow-lg bg-background/50 backdrop-blur">
              <CardContent className="p-6 grid gap-4">
                <p className="text-muted-foreground leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 