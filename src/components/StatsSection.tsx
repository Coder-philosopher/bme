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
    { label: "Faculty Members", value: stats.faculties },
    { label: "Staff Members", value: stats.staff },
    { label: "UG Students", value: stats.UGstudents },
    { label: "PG Students", value: stats.PGstudents },
    { label: "PhD Students", value: stats.PhDstudents },
    { label: "Publications", value: stats.publications },
  ];

  if (isLoading) {
    return (
      <section className="py-16 bg-white border-t-2 border-b-2 border-gray-300" data-testid="section-stats-loading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="p-6 border-2 border-gray-300 animate-pulse">
                <div className="h-10 bg-gray-200 mb-2"></div>
                <div className="h-4 bg-gray-200"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50 border-t-2 border-b-2 border-gray-300" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 pb-6 border-b-2 border-gray-400">
          <h2
            className="text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide"
            data-testid="heading-stats-title"
          >
            Department at a Glance
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
          <p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            data-testid="text-stats-subtitle"
          >
            Excellence in education, research, and innovation in biomedical engineering
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {statsItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 border-2 border-gray-400 bg-white hover:shadow-lg hover:border-blue-900 transition-all duration-300"
              data-testid={`card-stat-${index}`}
            >
              <div
                className="text-4xl font-bold mb-2 text-blue-900"
                data-testid={`stat-value-${index}`}
              >
                {item.value}
              </div>
              <div
                className="text-gray-700 font-semibold text-sm uppercase tracking-wide"
                data-testid={`stat-label-${index}`}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
