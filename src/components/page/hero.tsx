import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Need a Wheelchair Ramp by Tomorrow? We Deliver.
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-lg leading-relaxed">
                Fast, professional, and safe aluminum wheelchair ramp rentals in
                Dallas-Fort Worth. Installation in as little as 24 hours.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Get a Free Quote Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#process">See How It Works</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* Hero image - Professional ramp installation */}
            <div className="w-full h-96 rounded-lg overflow-hidden relative">
              <Image
                src="/hero.webp"
                alt="Professional wheelchair ramp installation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 