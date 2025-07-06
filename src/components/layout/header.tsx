import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-[100]"
      >
        Skip to main content
      </a>
      
      <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-800 text-white">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <div className="mr-4 flex">
            <Link 
              href="/" 
              className="mr-6 flex items-center"
              aria-label="Same Day Ramps - Go to homepage"
            >
              <Image
                src="/logo.svg"
                alt="Same Day Ramps logo"
                width={128}
                height={128}
                className="h-32"
                priority
              />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-6">
            <nav 
              className="hidden md:flex items-center space-x-6 text-sm font-medium"
              aria-label="Main navigation"
            >
              <Link
                href="#services"
                className="transition-colors hover:text-white text-gray-300 focus:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-800 rounded-sm px-2 py-1"
                aria-describedby="services-description"
              >
                Services
              </Link>
              <Link
                href="#process"
                className="transition-colors hover:text-white text-gray-300 focus:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-800 rounded-sm px-2 py-1"
                aria-describedby="process-description"
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="transition-colors hover:text-white text-gray-300 focus:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-800 rounded-sm px-2 py-1"
                aria-describedby="testimonials-description"
              >
                Testimonials
              </Link>
            </nav>
            <Button asChild size="sm">
              <Link 
                href="#contact"
                aria-label="Get a free quote - Contact form"
              >
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hidden descriptions for screen readers */}
      <div className="sr-only">
        <div id="services-description">Learn about our wheelchair ramp rental services</div>
        <div id="process-description">Understand our simple 3-step process</div>
        <div id="testimonials-description">Read what our customers say about us</div>
      </div>
    </>
  );
} 