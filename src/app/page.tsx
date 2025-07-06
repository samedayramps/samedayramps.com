import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/page/hero";
import { WhyChooseUs } from "@/components/page/why-choose-us";
import { HowItWorks } from "@/components/page/how-it-works";
import { WhoWeHelp } from "@/components/page/who-we-help";
import { Testimonials } from "@/components/page/testimonials";
import { Gallery } from "@/components/page/gallery";
import { Cta } from "@/components/page/cta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1" id="main-content">
        <Hero />
        <WhyChooseUs />
        <WhoWeHelp />
        <HowItWorks />
        <Testimonials />
        <Gallery />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
