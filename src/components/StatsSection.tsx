"use client";

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";

interface StatsData {
  faculties: number;
  staff: number;
  UGstudents: number;
  PGstudents: number;
  PhDstudents: number;
  publications: number;
}

const StatsSection = () => {
  const { data: aboutData, isLoading } = useQuery({
    queryKey: ["/api/department-data/about"],
    enabled: true,
  });

  const stats: StatsData = aboutData?.data?.stats || {
    faculties: 0,
    staff: 0,
    UGstudents: 0,
    PGstudents: 0,
    PhDstudents: 0,
    publications: 0,
  };

  const statsItems = [
    { label: "Faculty Members", value: stats.faculties, color: "text-primary-blue" },
    { label: "Staff Members", value: stats.staff, color: "text-primary-blue" },
    { label: "UG Students", value: stats.UGstudents, color: "text-primary-teal" },
    { label: "PG Students", value: stats.PGstudents, color: "text-primary-teal" },
    { label: "PhD Students", value: stats.PhDstudents, color: "text-primary-teal" },
    { label: "Publications", value: stats.publications, color: "text-primary-blue" },
  ];

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50" data-testid="section-stats-loading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="p-8 animate-pulse">
                <div className="h-12 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-heading font-bold text-gray-900 mb-4"
            data-testid="heading-stats-title"
          >
            Department at a Glance
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            data-testid="text-stats-subtitle"
          >
            Excellence in education, research, and innovation in biomedical engineering
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {statsItems.map((item, index) => (
            <Card
              key={index}
              className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`card-stat-${index}`}
            >
              <div
                className={`text-4xl font-bold mb-2 ${item.color}`}
                data-testid={`stat-value-${index}`}
              >
                {item.value}
              </div>
              <div
                className="text-gray-600 font-medium"
                data-testid={`stat-label-${index}`}
              >
                {item.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
