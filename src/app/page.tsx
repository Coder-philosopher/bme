"use client";

import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  GraduationCap, 
  Microscope, 
  Briefcase, 
  Users, 
  BookOpen, 
  Heart,
} from "lucide-react";

export default function Page() {
  const { data: aboutData } = useQuery({
    queryKey: ["/api/department-data/about"],
  });

  const about = aboutData?.data || {};

  const features = [
    {
      title: "Academic Programs",
      description: "B.Tech, M.Tech & Ph.D. programs in Biomedical Engineering",
      icon: GraduationCap,
      href: "/academics",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop",
    },
    {
      title: "Research Excellence",
      description: "Cutting-edge labs with funded projects and industry collaborations",
      icon: Microscope,
      href: "/research",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop",
    },
    {
      title: "Industry Placements",
      description: "Top healthcare & medical device companies recruit our students",
      icon: Briefcase,
      href: "/placement",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    },
    {
      title: "Alumni Network",
      description: "Connect with alumni and industry leaders",
      icon: Users,
      href: "/alumni",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen page-content" data-testid="page-home">
      <Hero />
      <StatsSection />

      {/* About Section - Academic Style */}
      <section id="about" className="py-20 bg-white border-t border-gray-200" data-testid="section-about-preview">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header - Traditional */}
          <div className="text-center mb-16 border-b border-gray-300 pb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight" data-testid="heading-about-preview">
              About the Department
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Bridging engineering excellence with medical advancement to shape the future of healthcare technology
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-base text-gray-800 leading-relaxed text-justify" data-testid="text-about-preview">
                {about?.deptInfo ||
                  "The Department of Biomedical Engineering at NIT Raipur stands at the forefront of healthcare innovation. We integrate cutting-edge engineering principles with medical sciences to develop life-saving technologies, diagnostic tools, and therapeutic solutions that transform patient care globally."}
              </p>
              
              {/* Stats Grid - Academic */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 border-2 border-gray-300 bg-gray-50">
                  <div className="text-3xl font-bold text-blue-900 mb-1">9+</div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Specialized Labs</div>
                </div>
                <div className="p-4 border-2 border-gray-300 bg-gray-50">
                  <div className="text-3xl font-bold text-blue-900 mb-1">50+</div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Research Papers</div>
                </div>
                <div className="p-4 border-2 border-gray-300 bg-gray-50">
                  <div className="text-3xl font-bold text-blue-900 mb-1">95%</div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Placement Rate</div>
                </div>
                <div className="p-4 border-2 border-gray-300 bg-gray-50">
                  <div className="text-3xl font-bold text-blue-900 mb-1">₹5Cr+</div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Funded Projects</div>
                </div>
              </div>

              <Link href="/about">
                <Button
                  className="bg-blue-900 hover:bg-blue-800 text-white border-0 transition-colors duration-200 text-base font-semibold px-8 py-6 uppercase tracking-wide"
                  size="lg"
                  data-testid="button-learn-more"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>

            {/* Image Grid - Rectangular */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 overflow-hidden border-2 border-gray-300">
                  <img
                    src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&auto=format&fit=crop"
                    alt="Lab equipment"
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-90 px-3 py-2">
                    <div className="text-white font-semibold text-sm uppercase tracking-wide">Lab Facilities</div>
                  </div>
                </div>
                <div className="relative h-64 overflow-hidden border-2 border-gray-300">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop"
                    alt="Research work"
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-90 px-3 py-2">
                    <div className="text-white font-semibold text-sm uppercase tracking-wide">Research</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 overflow-hidden border-2 border-gray-300">
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop"
                    alt="Medical imaging"
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-90 px-3 py-2">
                    <div className="text-white font-semibold text-sm uppercase tracking-wide">Innovation</div>
                  </div>
                </div>
                <div className="relative h-48 overflow-hidden border-2 border-gray-300">
                  <img
                    src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&auto=format&fit=crop"
                    alt="Medical technology"
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-90 px-3 py-2">
                    <div className="text-white font-semibold text-sm uppercase tracking-wide">Technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission - Academic Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="border-2 border-gray-300 bg-white p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-blue-900 p-3 mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">Our Vision</h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-base text-justify" data-testid="text-vision">
                {about?.vision ||
                  "To be a globally recognized center of excellence in biomedical engineering education, research, and innovation, contributing to the advancement of healthcare technology and improving quality of life worldwide."}
              </p>
            </div>

            <div className="border-2 border-gray-300 bg-white p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-blue-900 p-3 mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">Our Mission</h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-base text-justify" data-testid="text-mission">
                {about?.mission ||
                  "To provide world-class education in biomedical engineering, foster innovative research, and develop ethical professionals who will lead the transformation of healthcare through cutting-edge technology and interdisciplinary collaboration."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections - Academic Cards */}
      <section className="py-20 bg-gray-100 border-t border-gray-300" data-testid="section-quick-links">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 border-b border-gray-400 pb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Explore Our Department</h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" data-testid="text-quick-links-subtitle">
              Discover opportunities in academics, research, and industry collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <div className="group relative overflow-hidden border-2 border-gray-400 bg-white hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                  {/* Background Image on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-90"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="inline-flex p-3 bg-blue-900 mb-6 group-hover:bg-white transition-colors duration-300">
                        <feature.icon className="w-8 h-8 text-white group-hover:text-blue-900 transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300 uppercase tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 group-hover:text-gray-100 text-base leading-relaxed transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center text-blue-900 group-hover:text-white font-bold uppercase tracking-wide transition-colors duration-300">
                      Learn More
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
