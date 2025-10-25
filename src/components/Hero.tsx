"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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

  const desktopVideoId = "yvVNDCElEJo"; // Full NIT Raipur Drone Tour
  const mobileVideoId = "NpdwOZ4uFJ0"; // Shorts version for mobile



  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* YouTube Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src={`https://www.youtube.com/embed/${
            isMobile ? mobileVideoId : desktopVideoId
          }?autoplay=1&mute=1&loop=1&playlist=${
            isMobile ? mobileVideoId : desktopVideoId
          }&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1&vq=hd1080`}
          title="NIT Raipur Campus"
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
          data-testid="video-hero-background"
        ></iframe>
      </div>

      {/* Elegant Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10"></div>

      {/* Subtle Vignette Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-20 text-center max-w-7xl mx-auto px-6 py-20">
        {/* Animated Badge */}
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1
            className="text-5xl pt-4 md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight drop-shadow-2xl"
            data-testid="heading-hero-title"
          >
            Department of <br />
            <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-100 bg-clip-text text-transparent">
              Biomedical Engineering
            </span>
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl font-semibold mb-8 text-white/90"
          data-testid="heading-hero-subtitle"
        >
          National Institute of Technology Raipur
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/80"
          data-testid="text-hero-description"
        >
          Pioneering innovation in healthcare technology through cutting-edge research,
          world-class education, and industry collaboration to shape the future of medical sciences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            onClick={handleExploreAcademics}
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 rounded-xl font-semibold text-base shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
            data-testid="button-explore-academics"
          >
            Explore Academic Programs
          </Button>
          <Button
            variant="outline"
            onClick={handleKnowMore}
            className="border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-6 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105"
            data-testid="button-know-more"
          >
            Learn About Us
          </Button>
        </motion.div>

        {/* Stats Cards - Glass Morphism */}
        
      </div>

     
    </section>
  );
};

export default Hero;
