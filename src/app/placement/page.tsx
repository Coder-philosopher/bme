"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Chart from "@/components/Chart";

const Placement = () => {
  const { data: placementData, isLoading } = useQuery({
    queryKey: ["/api/department-data/placements"],
  });

  const placement = placementData?.data;

  if (isLoading) {
    return (
      <div
        className="min-h-screen pt-20"
        data-testid="page-placement-loading"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-6"></div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen " data-testid="page-placement">
      {/* Hero Section */}
      <section
        className=" bg-gradient-to-r from-primary-teal to-primary-blue text-white"
        data-testid="section-placement-hero"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1
            className="text-5xl md:text-6xl font-heading font-bold mb-6"
            data-testid="heading-placement-title"
          >
            Training & Placement
          </h1>
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            data-testid="text-placement-subtitle"
          >
            Excellence in career development and industry partnerships
          </p>
        </div>
      </section>

      {/* Placement Overview */}
      <section className="py-20" data-testid="section-placement-overview">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-heading font-bold text-gray-900 mb-4"
              data-testid="heading-placement-overview"
            >
              Placement Activities
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-testid="text-placement-description"
            >
              {placement?.description}
            </p>
          </div>
        </div>
      </section>

      {/* Placement Coordinator */}
      <section
        className="py-20 bg-gray-50"
        data-testid="section-coordinator"
      >
        <div className="max-w-7xl mx-auto px-6">
          <Card className="p-8 shadow-lg" data-testid="card-coordinator">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                  alt="Placement Coordinator"
                  width={300}
                  height={300}
                  className="rounded-xl shadow-lg w-full max-w-xs mx-auto"
                  data-testid="image-coordinator"
                />
              </div>

              <div className="md:col-span-2">
                <h3
                  className="text-2xl font-heading font-bold text-gray-900 mb-4"
                  data-testid="heading-coordinator"
                >
                  Placement Coordinator
                </h3>
                <div className="space-y-2 text-lg text-gray-700 mb-6">
                  <div>
                    <strong>Name:</strong>{" "}
                    <span data-testid="text-coordinator-name">
                      {placement?.coordinator?.name}
                    </span>
                  </div>
                  <div>
                    <strong>Email:</strong>{" "}
                    <span data-testid="text-coordinator-email">
                      {placement?.coordinator?.email}
                    </span>
                  </div>
                  <div>
                    <strong>Phone:</strong>{" "}
                    <span data-testid="text-coordinator-phone">
                      {placement?.coordinator?.phone}
                    </span>
                  </div>
                </div>
                <p
                  className="text-gray-600 leading-relaxed"
                  data-testid="text-coordinator-description"
                >
                  Our dedicated placement team works tirelessly to connect our
                  talented students with leading healthcare and technology
                  companies. We provide comprehensive career guidance, skill
                  development programs, and industry exposure to ensure our
                  graduates are well-prepared for successful careers.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-20" data-testid="section-statistics">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-heading font-bold text-gray-900 mb-4"
              data-testid="heading-statistics"
            >
              Placement Statistics
            </h2>
            <p
              className="text-xl text-gray-600"
              data-testid="text-statistics-subtitle"
            >
              Track record of successful placements across all programs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Statistics Table */}
            <Card
              className="p-8 shadow-lg"
              data-testid="card-statistics-table"
            >
              <h3
                className="text-2xl font-heading font-bold text-gray-900 mb-6"
                data-testid="heading-statistics-table"
              >
                Placement Statistics
              </h3>
              <div className="overflow-x-auto">
                <Table data-testid="table-placement-stats">
                  <TableHeader>
                    <TableRow>
                      <TableHead data-testid="header-year">Year</TableHead>
                      <TableHead
                        className="text-center"
                        data-testid="header-ug"
                      >
                        UG Students
                      </TableHead>
                      <TableHead
                        className="text-center"
                        data-testid="header-pg"
                      >
                        PG Students
                      </TableHead>
                      <TableHead
                        className="text-center"
                        data-testid="header-phd"
                      >
                        PhD Students
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {placement?.stats?.map((stat: any, index: number) => (
                      <TableRow
                        key={index}
                        className="hover:bg-gray-50"
                        data-testid={`row-stat-${index}`}
                      >
                        <TableCell
                          className="font-medium"
                          data-testid={`cell-year-${index}`}
                        >
                          {stat.year}
                        </TableCell>
                        <TableCell
                          className="text-center"
                          data-testid={`cell-ug-${index}`}
                        >
                          {stat.UG}
                        </TableCell>
                        <TableCell
                          className="text-center"
                          data-testid={`cell-pg-${index}`}
                        >
                          {stat.PG}
                        </TableCell>
                        <TableCell
                          className="text-center"
                          data-testid={`cell-phd-${index}`}
                        >
                          {stat.PhD}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            {/* Chart */}
            <Card className="p-8 shadow-lg" data-testid="card-chart">
              <Chart
                data={placement?.stats || []}
                title="Placement Trends"
              />
            </Card>
          </div>
        </div>
      </section>

         <section className="py-20 bg-gray-50" data-testid="section-companies">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="p-8 shadow-lg" data-testid="card-companies">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center" data-testid="heading-companies">
              Our Recruiting Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {placement?.companies?.map((company, index) => (
                <div 
                  key={index}
                  className="h-16 bg-white rounded-lg flex items-center justify-center shadow border hover:shadow-lg transition-shadow duration-300"
                  data-testid={`company-${index}`}
                >
                  <span className="text-gray-600 font-medium text-center px-2">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-process">
              Placement Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-process-subtitle">
              A comprehensive approach to career development and placement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-testid="card-process-1">
              <div className="bg-primary-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-user-edit text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Resume Building</h3>
              <p className="text-gray-600">Professional resume and profile development guidance</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-testid="card-process-2">
              <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-chalkboard-teacher text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skill Development</h3>
              <p className="text-gray-600">Technical and soft skills training programs</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-testid="card-process-3">
              <div className="bg-primary-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Connect</h3>
              <p className="text-gray-600">Regular interaction with industry professionals</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-testid="card-process-4">
              <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-briefcase text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Placement</h3>
              <p className="text-gray-600">Direct placement assistance and follow-up support</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placement;
