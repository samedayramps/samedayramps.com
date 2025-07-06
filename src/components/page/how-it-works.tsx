const steps = [
  {
    number: "1",
    title: "Free Consultation",
    description: "Call us for a quick, no-obligation quote. We'll assess your needs and provide clear, upfront pricing."
  },
  {
    number: "2", 
    title: "Professional Installation",
    description: "Our trained technicians deliver and install your ramp, ensuring it's safe, secure, and ready to use."
  },
  {
    number: "3",
    title: "Hassle-Free Removal", 
    description: "When your rental period is over, we'll schedule a convenient time to remove the ramp at no extra cost."
  }
];

export function HowItWorks() {
  return (
    <section id="process" className="w-full py-16 sm:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get a Safe, Reliable Ramp in 3 Easy Steps
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-lg leading-relaxed">
              We make it simple to get the accessibility you need without the
              hassle.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 pt-12 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="grid gap-4 text-center">
              {/* Number Circle */}
              <div className="flex justify-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl">
                  {step.number}
                </div>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 