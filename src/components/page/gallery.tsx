import Image from "next/image";

const galleryImages = [
  {
    src: "/residential_installation.jpg",
    alt: "Residential aluminum ramp installation",
    title: "Residential Installation",
    description: "Professional aluminum ramp for home access"
  },
  {
    src: "/commercial_solution.webp", 
    alt: "Commercial wheelchair ramp",
    title: "Commercial Solution",
    description: "ADA-compliant commercial ramp installation"
  },
  {
    src: "/temporary_access.webp",
    alt: "Temporary wheelchair ramp rental",
    title: "Temporary Access",
    description: "Quick installation for temporary needs"
  },
  {
    src: "/hospital_discharge.webp",
    alt: "Hospital discharge ramp setup",
    title: "Hospital Discharge",
    description: "Same-day installation for hospital returns"
  }
];

export function Gallery() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Professional Installations
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-lg leading-relaxed">
              See the quality and variety of our wheelchair ramp installations across Dallas-Fort Worth.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-muted">
              {/* Image */}
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              {/* Overlay with title and description */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-sm">{image.title}</h3>
                  <p className="text-xs text-white/80">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 