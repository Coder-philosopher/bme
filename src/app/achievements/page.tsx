"use client";

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AchievementsPage = () => {
  const { data: achievementsData, isLoading } = useQuery({
    queryKey: ["/api/department-data/achievements"],
  });

  const achievements = achievementsData?.data;

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20" data-testid="page-achievements-loading">
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
    <div className="min-h-screen pt-20" data-testid="page-achievements">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-teal to-primary-blue text-white" data-testid="section-achievements-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6" data-testid="heading-achievements-title">
            Achievements & Awards
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-testid="text-achievements-subtitle">
            Recognizing excellence in research, teaching, and student accomplishments
          </p>
        </div>
      </section>

      {/* Achievement Tabs */}
      <section className="py-20" data-testid="section-achievement-tabs">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="faculty" className="w-full" data-testid="tabs-achievements">
            <TabsList className="grid w-full grid-cols-4 mb-8" data-testid="tabs-list-achievements">
              <TabsTrigger value="faculty" data-testid="tab-faculty">Faculty Awards</TabsTrigger>
              <TabsTrigger value="ug" data-testid="tab-students-ug">UG Students</TabsTrigger>
              <TabsTrigger value="pg" data-testid="tab-students-pg">PG Students</TabsTrigger>
              <TabsTrigger value="phd" data-testid="tab-students-phd">PhD Students</TabsTrigger>
            </TabsList>

            {/* Faculty */}
            <TabsContent value="faculty" data-testid="tab-content-faculty">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements?.faculty?.map((award: any, index: number) => (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    data-testid={`card-faculty-award-${index}`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-teal p-3 rounded-full mr-4">
                        <i className="fas fa-trophy text-white text-xl"></i>
                      </div>
                      <Badge variant="secondary" data-testid={`badge-faculty-year-${index}`}>
                        {award.year}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`heading-faculty-name-${index}`}>
                      {award.name}
                    </h3>
                    <h4 className="text-lg font-medium text-primary-teal mb-2" data-testid={`heading-faculty-award-${index}`}>
                      {award.award}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2" data-testid={`text-faculty-org-${index}`}>
                      <strong>Organization:</strong> {award.organization}
                    </p>
                    <p className="text-gray-700 text-sm" data-testid={`text-faculty-desc-${index}`}>
                      {award.description}
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* UG Students */}
            <TabsContent value="ug" data-testid="tab-content-ug">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements?.students?.UG?.map((award: any, index: number) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-blue p-3 rounded-full mr-4">
                        <i className="fas fa-medal text-white text-xl"></i>
                      </div>
                      <Badge variant="secondary">{award.year}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.name}</h3>
                    <h4 className="text-lg font-medium text-primary-blue mb-2">{award.award}</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Project:</strong> {award.project}</p>
                    <p className="text-gray-700 text-sm">{award.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* PG Students */}
            <TabsContent value="pg" data-testid="tab-content-pg">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements?.students?.PG?.map((award: any, index: number) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-teal p-3 rounded-full mr-4">
                        <i className="fas fa-award text-white text-xl"></i>
                      </div>
                      <Badge variant="secondary">{award.year}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.name}</h3>
                    <h4 className="text-lg font-medium text-primary-teal mb-2">{award.award}</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Project:</strong> {award.project}</p>
                    <p className="text-gray-700 text-sm">{award.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* PhD Students */}
            <TabsContent value="phd" data-testid="tab-content-phd">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements?.students?.PhD?.map((award: any, index: number) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-blue p-3 rounded-full mr-4">
                        <i className="fas fa-star text-white text-xl"></i>
                      </div>
                      <Badge variant="secondary">{award.year}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.name}</h3>
                    <h4 className="text-lg font-medium text-primary-blue mb-2">{award.award}</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Project:</strong> {award.project}</p>
                    <p className="text-gray-700 text-sm">{award.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-20 bg-gray-50" data-testid="section-scholarships">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">Scholarships & Financial Aid</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting student excellence through various scholarship programs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements?.scholarships?.map((scholarship: any, index: number) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-primary-teal to-primary-blue p-3 rounded-full mr-4">
                    <i className="fas fa-graduation-cap text-white text-xl"></i>
                  </div>
                  <Badge className="bg-primary-teal text-white">{scholarship.amount}</Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{scholarship.name}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p><strong>Criteria:</strong> {scholarship.criteria}</p>
                  <p><strong>Beneficiaries:</strong> {scholarship.beneficiaries}</p>
                  <p><strong>Sponsor:</strong> {scholarship.sponsor}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
