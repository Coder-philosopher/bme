// app/about/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import StatsSection from "@/components/StatsSection";

const AboutPage = () => {
  const { data: aboutData, isLoading } = useQuery({
    queryKey: ["/api/department-data/about"],
  });

  const about = aboutData?.data || {};

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20" data-testid="page-about-loading">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-6"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen " data-testid="page-about">
      {/* Hero Section */}
      <section className=" bg-gradient-to-r from-primary-teal to-primary-blue text-white" data-testid="section-about-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6" data-testid="heading-about-title">
            About Our Department
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-testid="text-about-subtitle">
            Leading innovation in biomedical engineering education and research
          </p>
        </div>
      </section>

      <StatsSection />

      {/* Department Overview */}
      <section className="py-20" data-testid="section-department-overview">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6" data-testid="heading-department-info">
                About the Department
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6" data-testid="text-department-info">
                {about?.deptInfo}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" data-testid="text-department-additional">
                Our interdisciplinary approach combines engineering principles with biological sciences, 
                creating a unique learning environment where students develop both technical expertise 
                and medical insight. We foster research excellence while maintaining strong industry partnerships.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&h=600"
                alt="Biomedical engineering laboratory" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="image-department-lab"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-teal/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-accent-teal-light p-8 border-l-4 border-primary-teal" data-testid="card-vision-detailed">
              <div className="flex items-center mb-6">
                <div className="bg-primary-teal p-3 rounded-full mr-4">
                  <i className="fas fa-eye text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed" data-testid="text-vision-detailed">
                {about?.vision}
              </p>
            </Card>
            
            <Card className="bg-accent-blue-light p-8 border-l-4 border-primary-blue" data-testid="card-mission-detailed">
              <div className="flex items-center mb-6">
                <div className="bg-primary-blue p-3 rounded-full mr-4">
                  <i className="fas fa-bullseye text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed" data-testid="text-mission-detailed">
                {about?.mission}
              </p>
            </Card>
          </div>

          {/* HoD Message */}
          <Card className="p-8 shadow-lg" data-testid="card-hod-message">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400"
                  alt="Head of Department" 
                  className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
                  data-testid="image-hod"
                />
              </div>
              
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-hod-message">
                  Message from Head of Department
                </h3>
                <blockquote className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-primary-teal pl-6" data-testid="text-hod-message">
                  "{about?.hodMessage}"
                </blockquote>
                <div className="mt-6">
                  <div className="font-semibold text-gray-900" data-testid="text-hod-name">Dr. Rajesh Kumar</div>
                  <div className="text-gray-600" data-testid="text-hod-designation">Head of Department</div>
                  <div className="text-gray-600" data-testid="text-hod-email">hod.bme@nitrr.ac.in</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50" data-testid="section-highlights">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-highlights">
              Department Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-highlights-subtitle">
              Our key strengths and achievements in biomedical engineering
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-testid="card-highlight-1">
              <div className="bg-primary-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-award text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Excellence</h3>
              <p className="text-gray-600">Comprehensive curriculum designed to meet industry demands</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-testid="card-highlight-2">
              <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-flask text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Innovation</h3>
              <p className="text-gray-600">Cutting-edge research in healthcare technology</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-testid="card-highlight-3">
              <div className="bg-primary-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Partnerships</h3>
              <p className="text-gray-600">Strong collaborations with leading healthcare companies</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
