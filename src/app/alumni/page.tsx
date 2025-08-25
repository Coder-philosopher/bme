"use client"; // ✅ Required because of useQuery

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
            <div className="h-12 bg-gray-200 rounded mb-6"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen " data-testid="page-alumni">
      {/* Hero Section */}
      <section className=" bg-gradient-to-r from-primary-teal to-primary-blue text-white" data-testid="section-alumni-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6" data-testid="heading-alumni-title">
            Alumni Network
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-testid="text-alumni-subtitle">
            Connect with our global network of successful biomedical engineering alumni
          </p>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-20" data-testid="section-featured-alumni">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-featured">
              Featured Alumni
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-featured-subtitle">
              Meet some of our distinguished graduates making impact globally
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alumni?.featured?.map((alumnus, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-testid={`card-alumni-${index}`}
              >
                <div className="text-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
                    alt={alumnus.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    data-testid={`image-alumni-${index}`}
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`heading-alumni-name-${index}`}>
                    {alumnus.name}
                  </h3>
                  <Badge className="mb-2" data-testid={`badge-alumni-batch-${index}`}>
                    {alumnus.degree} - {alumnus.batch}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Building className="h-4 w-4 mr-2 text-primary-teal" />
                    <span data-testid={`text-alumni-position-${index}`}>{alumnus.currentPosition}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Building className="h-4 w-4 mr-2 text-primary-blue" />
                    <span data-testid={`text-alumni-company-${index}`}>{alumnus.company}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-primary-teal" />
                    <span data-testid={`text-alumni-location-${index}`}>{alumnus.location}</span>
                  </div>
                  
                  {alumnus.email && (
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-primary-blue" />
                      <span data-testid={`text-alumni-email-${index}`}>{alumnus.email}</span>
                    </div>
                  )}
                </div>
                
                {alumnus.achievements && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Key Achievement</h4>
                    <p className="text-gray-600 text-xs" data-testid={`text-alumni-achievement-${index}`}>
                      {alumnus.achievements}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gray-50" data-testid="section-global-presence">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-global">
              Global Alumni Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-global-subtitle">
              Our alumni are making impact across the globe in leading organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni?.globalPresence?.map((presence, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300"
                data-testid={`card-presence-${index}`}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-teal p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900" data-testid={`heading-country-${index}`}>
                      {presence.country}
                    </h3>
                    <Badge variant="secondary" data-testid={`badge-count-${index}`}>
                      {presence.count} Alumni
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Major Cities</h4>
                  <div className="flex flex-wrap gap-2">
                    {presence.cities.map((city, cityIndex) => (
                      <Badge 
                        key={cityIndex}
                        variant="outline"
                        className="text-xs"
                        data-testid={`badge-city-${index}-${cityIndex}`}
                      >
                        {city}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Endowment Fund */}
      <section className="py-20" data-testid="section-endowment">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6" data-testid="heading-endowment">
                Alumni Endowment Fund
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-teal mb-2" data-testid="heading-fund-name">
                    {alumni?.endowment?.fund}
                  </h3>
                  <p className="text-gray-600 mb-4" data-testid="text-fund-description">
                    {alumni?.endowment?.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900 mr-2">Total Fund:</span>
                    <Badge className="bg-primary-teal text-white" data-testid="badge-fund-amount">
                      {alumni?.endowment?.totalAmount}
                    </Badge>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-gray-900">Beneficiaries:</span>
                    <span className="text-gray-600 ml-2" data-testid="text-fund-beneficiaries">
                      {alumni?.endowment?.beneficiaries}
                    </span>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-gray-900">Applications:</span>
                    <span className="text-gray-600 ml-2" data-testid="text-fund-applications">
                      {alumni?.endowment?.applications}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-primary-teal/10 to-primary-blue/10 border-primary-teal" data-testid="card-endowment-info">
              <div className="text-center">
                <div className="bg-primary-teal p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Support Future Engineers
                </h3>
                <p className="text-gray-600 mb-6">
                  Join our alumni network in supporting the next generation of biomedical engineers 
                  through scholarships and research opportunities.
                </p>
                <div className="space-y-4">
                  <div className="text-sm text-gray-600">
                    <strong>How to Contribute:</strong>
                    <ul className="mt-2 space-y-1 text-left">
                      <li>• Online donations through university portal</li>
                      <li>• Direct bank transfer to endowment fund</li>
                      <li>• Annual alumni contribution drive</li>
                      <li>• Corporate sponsorship programs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Alumni Achievements */}
      <section className="py-20 bg-gray-50" data-testid="section-alumni-achievements">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-achievements">
              Alumni Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-achievements-subtitle">
              Celebrating the outstanding accomplishments of our alumni
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {alumni?.achievements?.map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300"
                data-testid={`card-achievement-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900" data-testid={`heading-achievement-alumnus-${index}`}>
                        {achievement.alumnus}
                      </h3>
                      <Badge variant="secondary" data-testid={`badge-achievement-year-${index}`}>
                        {achievement.year}
                      </Badge>
                    </div>
                    <p className="text-gray-600" data-testid={`text-achievement-desc-${index}`}>
                      {achievement.achievement}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
