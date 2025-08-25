"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleExploreAcademics = () => {
    const academicsSection = document.getElementById("academics");
    if (academicsSection) {
      academicsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKnowMore = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background video */}
      <video
        className="hero-video absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        data-testid="video-hero-background"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <h1
          className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in"
          data-testid="heading-hero-title"
        >
          Department of <span className="text-primary-teal">Biomedical Engineering</span>
        </h1>
        <h2
          className="text-2xl md:text-3xl font-light mb-8 animate-slide-up"
          data-testid="heading-hero-subtitle"
        >
          National Institute of Technology Raipur
        </h2>
        <p
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up"
          data-testid="text-hero-description"
        >
          Pioneering innovation in healthcare technology, advancing medical research,
          and shaping the future of biomedical sciences.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            onClick={handleExploreAcademics}
            className="bg-primary-teal hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            data-testid="button-explore-academics"
          >
            Explore Academics
          </Button>
          <Button
            variant="outline"
            onClick={handleKnowMore}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            data-testid="button-know-more"
          >
            Know More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        data-testid="indicator-scroll"
      >
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
