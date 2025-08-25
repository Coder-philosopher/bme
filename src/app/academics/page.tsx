"use client";

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Academics = () => {
  const { data: academicsData, isLoading } = useQuery({
    queryKey: ["/api/department-data/academics"],
  });

  const academics = academicsData?.data;

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20" data-testid="page-academics-loading">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-6"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20" data-testid="page-academics">
      {/* Hero Section */}
      <section
        className="py-20 bg-gradient-to-r from-primary-teal to-primary-blue text-white"
        data-testid="section-academics-hero"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1
            className="text-5xl md:text-6xl font-heading font-bold mb-6"
            data-testid="heading-academics-title"
          >
            Academic Programs
          </h1>
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            data-testid="text-academics-subtitle"
          >
            Comprehensive programs designed to create future leaders in
            biomedical engineering
          </p>
        </div>
      </section>

      {/* Program Tabs */}
      <section className="py-20" data-testid="section-programs">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-heading font-bold text-gray-900 mb-4"
              data-testid="heading-programs"
            >
              Our Programs
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-testid="text-programs-subtitle"
            >
              Choose from our undergraduate, postgraduate, and doctoral programs
            </p>
          </div>

          <Tabs
            defaultValue="ug"
            className="w-full"
            data-testid="tabs-programs"
          >
            <TabsList
              className="grid w-full grid-cols-3 mb-8"
              data-testid="tabs-list"
            >
              <TabsTrigger
                value="ug"
                className="text-lg"
                data-testid="tab-ug"
              >
                UG Programs
              </TabsTrigger>
              <TabsTrigger
                value="pg"
                className="text-lg"
                data-testid="tab-pg"
              >
                PG Programs
              </TabsTrigger>
              <TabsTrigger
                value="phd"
                className="text-lg"
                data-testid="tab-phd"
              >
                PhD Programs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ug" data-testid="tab-content-ug">
              <Card className="p-8">
                <h3
                  className="text-2xl font-heading font-bold text-gray-900 mb-4"
                  data-testid="heading-ug-program"
                >
                  Bachelor of Technology (B.Tech) in Biomedical Engineering
                </h3>
                <p
                  className="text-gray-700 mb-6"
                  data-testid="text-ug-description"
                >
                  {academics?.UG?.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4
                      className="font-semibold text-gray-900 mb-3"
                      data-testid="heading-ug-subjects"
                    >
                      Key Subjects:
                    </h4>
                    <ul
                      className="text-gray-700 space-y-2"
                      data-testid="list-ug-subjects"
                    >
                      {academics?.UG?.subjects?.map((subject, index) => (
                        <li key={index}>• {subject}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-gray-900 mb-3"
                      data-testid="heading-ug-careers"
                    >
                      Career Opportunities:
                    </h4>
                    <ul
                      className="text-gray-700 space-y-2"
                      data-testid="list-ug-careers"
                    >
                      {academics?.UG?.careers?.map((career, index) => (
                        <li key={index}>• {career}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    className="bg-primary-teal hover:bg-teal-700 text-white"
                    data-testid="button-ug-syllabus"
                  >
                    Download Syllabus
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="pg" data-testid="tab-content-pg">
              <Card className="p-8">
                <h3
                  className="text-2xl font-heading font-bold text-gray-900 mb-4"
                  data-testid="heading-pg-program"
                >
                  Master of Technology (M.Tech) in Biomedical Engineering
                </h3>
                <p
                  className="text-gray-700 mb-6"
                  data-testid="text-pg-description"
                >
                  {academics?.PG?.description}
                </p>
                <div className="mt-6">
                  <Button
                    className="bg-primary-blue hover:bg-blue-700 text-white"
                    data-testid="button-pg-syllabus"
                  >
                    Download Syllabus
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="phd" data-testid="tab-content-phd">
              <Card className="p-8">
                <h3
                  className="text-2xl font-heading font-bold text-gray-900 mb-4"
                  data-testid="heading-phd-program"
                >
                  Doctor of Philosophy (PhD) in Biomedical Engineering
                </h3>
                <p
                  className="text-gray-700 mb-6"
                  data-testid="text-phd-description"
                >
                  {academics?.PhD?.description}
                </p>
                <div className="mt-6">
                  <Button
                    className="bg-primary-teal hover:bg-teal-700 text-white"
                    data-testid="button-phd-syllabus"
                  >
                    Download Syllabus
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Laboratories Section */}
      <section
        className="py-20 bg-gray-50"
        data-testid="section-laboratories"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-heading font-bold text-gray-900 mb-4"
              data-testid="heading-labs"
            >
              Laboratories & Facilities
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-testid="text-labs-subtitle"
            >
              State-of-the-art facilities for hands-on learning and research
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academics?.labs?.map((lab, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                data-testid={`card-lab-${index}`}
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
                  alt={`${lab.name} facility`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  data-testid={`image-lab-${index}`}
                />

                <h4
                  className="text-xl font-semibold text-gray-900 mb-2"
                  data-testid={`heading-lab-name-${index}`}
                >
                  {lab.name}
                </h4>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div>
                    <strong>Established:</strong>{" "}
                    <span data-testid={`text-lab-year-${index}`}>
                      {lab.year}
                    </span>
                  </div>
                  <div>
                    <strong>In-charge:</strong>{" "}
                    <span data-testid={`text-lab-incharge-${index}`}>
                      {lab.incharge}
                    </span>
                  </div>
                  <div>
                    <strong>Contact:</strong>{" "}
                    <span data-testid={`text-lab-contact-${index}`}>
                      {lab.contact}
                    </span>
                  </div>
                </div>
                <div>
                  <strong className="text-sm text-gray-800">
                    Subjects Handled:
                  </strong>
                  <p
                    className="text-sm text-gray-600 mt-1"
                    data-testid={`text-lab-subjects-${index}`}
                  >
                    {lab.subjects}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Information */}
      <section className="py-20" data-testid="section-admission">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-heading font-bold text-gray-900 mb-4"
              data-testid="heading-admission"
            >
              Admission Process
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-testid="text-admission-subtitle"
            >
              Information about admission requirements and procedures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="p-6 text-center"
              data-testid="card-admission-ug"
            >
              <div className="bg-primary-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                B.Tech Admission
              </h3>
              <p className="text-gray-600 mb-4">
                Through JEE Main followed by JoSAA counseling
              </p>
              <Button
                variant="outline"
                className="border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white"
                data-testid="button-ug-admission"
              >
                Learn More
              </Button>
            </Card>

            <Card
              className="p-6 text-center"
              data-testid="card-admission-pg"
            >
              <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-user-graduate text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                M.Tech Admission
              </h3>
              <p className="text-gray-600 mb-4">
                Through GATE followed by CCMT counseling
              </p>
              <Button
                variant="outline"
                className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
                data-testid="button-pg-admission"
              >
                Learn More
              </Button>
            </Card>

            <Card
              className="p-6 text-center"
              data-testid="card-admission-phd"
            >
              <div className="bg-primary-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-university text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                PhD Admission
              </h3>
              <p className="text-gray-600 mb-4">
                Through departmental entrance test and interview
              </p>
              <Button
                variant="outline"
                className="border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white"
                data-testid="button-phd-admission"
              >
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
