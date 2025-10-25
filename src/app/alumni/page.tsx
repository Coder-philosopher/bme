"use client";

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Building, GraduationCap } from "lucide-react";

const Alumni = () => {
  const { data: alumniData, isLoading } = useQuery({
    queryKey: ["/api/department-data/alumni"],
  });

  const alumni = alumniData?.data;

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20" data-testid="page-alumni-loading">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 mb-6"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="p-6 border-2 border-gray-300">
                  <div className="h-6 bg-gray-200 mb-2"></div>
                  <div className="h-4 bg-gray-200"></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" data-testid="page-alumni">
      {/* Hero Section - Academic Style */}
      <section className="bg-blue-900 border-b-4 border-gray-800" data-testid="section-alumni-hero">
        <div className="max-w-7xl mx-auto px-6 text-center py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide" data-testid="heading-alumni-title">
            Alumni Network
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200" data-testid="text-alumni-subtitle">
            Connect with our global network of successful biomedical engineering alumni
          </p>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-20 bg-white border-b-2 border-gray-300" data-testid="section-featured-alumni">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 pb-6 border-b-2 border-gray-400">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide" data-testid="heading-featured">
              Featured Alumni
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" data-testid="text-featured-subtitle">
              Meet some of our distinguished graduates making impact globally
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alumni?.featured?.map((alumnus, index) => (
              <div 
                key={index}
                className="p-6 border-2 border-gray-400 bg-gray-50 hover:shadow-lg hover:border-blue-900 transition-all duration-300"
                data-testid={`card-alumni-${index}`}
              >
                <div className="text-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
                    alt={alumnus.name}
                    className="w-24 h-24 border-4 border-blue-900 mx-auto mb-4 object-cover"
                    data-testid={`image-alumni-${index}`}
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide" data-testid={`heading-alumni-name-${index}`}>
                    {alumnus.name}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-blue-900 text-white text-xs font-bold uppercase tracking-wide mb-3" data-testid={`badge-alumni-batch-${index}`}>
                    {alumnus.degree} - {alumnus.batch}
                  </div>
                </div>
                
                <div className="space-y-2 text-sm border-t-2 border-gray-300 pt-4">
                  <div className="flex items-start text-gray-800">
                    <Building className="h-4 w-4 mr-2 text-blue-900 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold" data-testid={`text-alumni-position-${index}`}>{alumnus.currentPosition}</span>
                  </div>
                  
                  <div className="flex items-start text-gray-700">
                    <Building className="h-4 w-4 mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span data-testid={`text-alumni-company-${index}`}>{alumnus.company}</span>
                  </div>
                  
                  <div className="flex items-start text-gray-700">
                    <MapPin className="h-4 w-4 mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span data-testid={`text-alumni-location-${index}`}>{alumnus.location}</span>
                  </div>
                  
                  {alumnus.email && (
                    <div className="flex items-start text-gray-700">
                      <Mail className="h-4 w-4 mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span className="break-all" data-testid={`text-alumni-email-${index}`}>{alumnus.email}</span>
                    </div>
                  )}
                </div>
                
                {alumnus.achievements && (
                  <div className="mt-4 p-3 border-2 border-gray-300 bg-white">
                    <h4 className="font-bold text-gray-900 text-xs mb-2 uppercase tracking-wide">Key Achievement</h4>
                    <p className="text-gray-700 text-xs leading-relaxed" data-testid={`text-alumni-achievement-${index}`}>
                      {alumnus.achievements}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gray-50 border-b-2 border-gray-300" data-testid="section-global-presence">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 pb-6 border-b-2 border-gray-400">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide" data-testid="heading-global">
              Global Alumni Presence
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" data-testid="text-global-subtitle">
              Our alumni are making impact across the globe in leading organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni?.globalPresence?.map((presence, index) => (
              <div 
                key={index}
                className="p-6 border-2 border-gray-400 bg-white hover:shadow-lg hover:border-blue-900 transition-all duration-300"
                data-testid={`card-presence-${index}`}
              >
                <div className="flex items-center mb-4 pb-4 border-b-2 border-gray-300">
                  <div className="bg-blue-900 p-3 mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide" data-testid={`heading-country-${index}`}>
                      {presence.country}
                    </h3>
                    <div className="inline-block mt-1 px-2 py-1 bg-gray-200 text-gray-900 text-xs font-bold uppercase tracking-wide" data-testid={`badge-count-${index}`}>
                      {presence.count} Alumni
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Major Cities</h4>
                  <div className="flex flex-wrap gap-2">
                    {presence.cities.map((city, cityIndex) => (
                      <span 
                        key={cityIndex}
                        className="px-3 py-1 border border-gray-400 text-xs font-semibold text-gray-800 bg-gray-50"
                        data-testid={`badge-city-${index}-${cityIndex}`}
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Endowment Fund */}
      <section className="py-20 bg-white border-b-2 border-gray-300" data-testid="section-endowment">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wide pb-3 border-b-2 border-blue-900" data-testid="heading-endowment">
                Alumni Endowment Fund
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2 uppercase tracking-wide" data-testid="heading-fund-name">
                    {alumni?.endowment?.fund}
                  </h3>
                  <p className="text-gray-800 mb-4 leading-relaxed" data-testid="text-fund-description">
                    {alumni?.endowment?.description}
                  </p>
                </div>
                
                <div className="space-y-3 p-4 border-2 border-gray-300 bg-gray-50">
                  <div className="flex items-center pb-2 border-b border-gray-300">
                    <span className="font-bold text-gray-900 mr-2 uppercase tracking-wide text-sm">Total Fund:</span>
                    <span className="px-3 py-1 bg-blue-900 text-white font-bold text-sm" data-testid="badge-fund-amount">
                      {alumni?.endowment?.totalAmount}
                    </span>
                  </div>
                  
                  <div className="pb-2 border-b border-gray-300">
                    <span className="font-bold text-gray-900 uppercase tracking-wide text-sm">Beneficiaries:</span>
                    <span className="text-gray-800 ml-2" data-testid="text-fund-beneficiaries">
                      {alumni?.endowment?.beneficiaries}
                    </span>
                  </div>
                  
                  <div>
                    <span className="font-bold text-gray-900 uppercase tracking-wide text-sm">Applications:</span>
                    <span className="text-gray-800 ml-2" data-testid="text-fund-applications">
                      {alumni?.endowment?.applications}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 border-2 border-gray-400 bg-gray-50" data-testid="card-endowment-info">
              <div className="text-center">
                <div className="bg-blue-900 p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide pb-3 border-b-2 border-blue-900">
                  Support Future Engineers
                </h3>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  Join our alumni network in supporting the next generation of biomedical engineers 
                  through scholarships and research opportunities.
                </p>
                <div className="space-y-4">
                  <div className="text-sm text-gray-800 text-left border-t-2 border-gray-300 pt-4">
                    <strong className="uppercase tracking-wide text-blue-900">How to Contribute:</strong>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        <span>Online donations through university portal</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        <span>Direct bank transfer to endowment fund</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        <span>Annual alumni contribution drive</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        <span>Corporate sponsorship programs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Achievements */}
      <section className="py-20 bg-gray-50" data-testid="section-alumni-achievements">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 pb-6 border-b-2 border-gray-400">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide" data-testid="heading-achievements">
              Alumni Achievements
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" data-testid="text-achievements-subtitle">
              Celebrating the outstanding accomplishments of our alumni
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {alumni?.achievements?.map((achievement, index) => (
              <div 
                key={index}
                className="p-6 border-2 border-gray-400 bg-white hover:shadow-lg hover:border-blue-900 transition-all duration-300"
                data-testid={`card-achievement-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-gray-300">
                      <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide" data-testid={`heading-achievement-alumnus-${index}`}>
                        {achievement.alumnus}
                      </h3>
                      <span className="px-2 py-1 bg-gray-200 text-gray-900 text-xs font-bold uppercase tracking-wide" data-testid={`badge-achievement-year-${index}`}>
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-800 leading-relaxed" data-testid={`text-achievement-desc-${index}`}>
                      {achievement.achievement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
