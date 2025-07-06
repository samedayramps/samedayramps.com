import { type ReactElement } from "react";
import Image from "next/image";

const solutions: Array<{
  title: string;
  description: string;
  image: string;
}> = [
  {
    title: "Peace of Mind During Recovery",
    description:
      "Focus on healing after a hip or knee surgery. We'll handle the ramp so you can come home safely from the hospital.",
    image: "/hospital_discharge.webp"
  },
  {
    title: "Safe, Flexible Home Access",
    description:
      "Try out a ramp configuration before committing to a permanent one, or get temporary help for visiting family.",
    image: "/residential_installation.jpg"
  },
  {
    title: "Dignity and Comfort When It Matters Most",
    description:
      "We provide discreet and reliable service for hospice and other transitional situations.",
    image: "/temporary_access.webp"
  },
];

export function WhoWeHelp(): ReactElement {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Solutions for Every Temporary Need
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-lg leading-relaxed">
              We provide tailored solutions for a variety of situations.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 pt-12 sm:grid-cols-1 md:grid-cols-3">
          {solutions.map(
            (solution: {
              title: string;
              description: string;
              image: string;
            }): ReactElement => (
              <div key={solution.title} className="grid gap-4 text-center">
                {/* Image */}
                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden relative">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
} 