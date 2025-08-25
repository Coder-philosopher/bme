"use client";

import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const { data: aboutData } = useQuery({
    queryKey: ["/api/department-data/about"],
  });

  const about = aboutData?.data || {};

  return (
    <div className="min-h-screen page-content" data-testid="page-home">
      <Hero />
      <StatsSection />

      {/* About Section Preview */}
      <section id="about" className="py-20" data-testid="section-about-preview">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2
                className="text-4xl font-heading font-bold text-gray-900 mb-6"
                data-testid="heading-about-preview"
              >
                About the Department
              </h2>
              <p
                className="text-lg text-gray-700 leading-relaxed mb-8"
                data-testid="text-about-preview"
              >
                {about?.deptInfo ||
                  "The Department of Biomedical Engineering at NIT Raipur stands as a beacon of innovation in healthcare technology. We bridge the gap between engineering excellence and medical advancement, preparing the next generation of biomedical professionals."}
              </p>
              <Link href="/about">
                <Button
                  className="bg-primary-blue hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                  size="lg"
                  data-testid="button-learn-more"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Biomedical engineering laboratory"
                className="rounded-3xl shadow-2xl w-full h-auto transform hover:scale-[1.02] transition-all duration-300"
                data-testid="image-about-preview"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-teal/20 to-transparent rounded-3xl"></div>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card
              className="modern-card bg-gradient-to-br from-accent-teal-light to-white p-8 border-l-4 border-primary-teal hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              data-testid="card-vision"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary-teal p-4 rounded-2xl mr-4 shadow-lg">
                  <i className="fas fa-eye text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900">
                  Our Vision
                </h3>
              </div>
              <p
                className="text-gray-700 leading-relaxed"
                data-testid="text-vision"
              >
                {about?.vision ||
                  "To be a globally recognized center of excellence in biomedical engineering education, research, and innovation, contributing to the advancement of healthcare technology and improving quality of life."}
              </p>
            </Card>

            <Card
              className="modern-card bg-gradient-to-br from-accent-blue-light to-white p-8 border-l-4 border-primary-blue hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              data-testid="card-mission"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary-blue p-4 rounded-2xl mr-4 shadow-lg">
                  <i className="fas fa-bullseye text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p
                className="text-gray-700 leading-relaxed"
                data-testid="text-mission"
              >
                {about?.mission || "Loading mission statement..."}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50" data-testid="section-quick-links">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-heading font-bold text-gray-900 mb-4"
              data-testid="heading-quick-links"
            >
              Explore Our Department
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-testid="text-quick-links-subtitle"
            >
              Discover our academic programs, research initiatives, and
              opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/academics">
              <Card
                className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                data-testid="card-academics-link"
              >
                <div className="bg-primary-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Academics
                </h3>
                <p className="text-gray-600">
                  Explore our UG, PG, and PhD programs
                </p>
              </Card>
            </Link>

            <Link href="/research">
              <Card
                className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                data-testid="card-research-link"
              >
                <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-microscope text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Research
                </h3>
                <p className="text-gray-600">
                  Discover our cutting-edge research
                </p>
              </Card>
            </Link>

            <Link href="/placement">
              <Card
                className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                data-testid="card-placement-link"
              >
                <div className="bg-primary-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-briefcase text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Placements
                </h3>
                <p className="text-gray-600">
                  Career opportunities and statistics
                </p>
              </Card>
            </Link>

            <Link href="/alumni">
              <Card
                className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                data-testid="card-alumni-link"
              >
                <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Alumni
                </h3>
                <p className="text-gray-600">
                  Connect with our alumni network
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
