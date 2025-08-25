"use client"; // Required for React Query, Tabs, Dialogs, etc.

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const People = () => {
  const { data: peopleData, isLoading } = useQuery({
    queryKey: ["/api/department-data/people"],
  });

  const people = peopleData?.data;

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20" data-testid="page-people-loading">
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

  // Faculty Modal extracted into its own small component
  const FacultyModal = ({ faculty, index }: { faculty: any; index: number }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          data-testid={`button-faculty-details-${index}`}
        >
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-2xl"
        data-testid={`modal-faculty-${index}`}
      >
        <DialogHeader>
          <DialogTitle data-testid={`modal-faculty-name-${index}`}>
            {faculty.name}
          </DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300"
              alt={faculty.name}
              className="w-full rounded-lg"
              data-testid={`modal-faculty-image-${index}`}
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900">Designation</h4>
              <p
                className="text-gray-600"
                data-testid={`modal-faculty-designation-${index}`}
              >
                {faculty.designation}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Specialization</h4>
              <p
                className="text-gray-600"
                data-testid={`modal-faculty-specialization-${index}`}
              >
                {faculty.specialization}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Education</h4>
              <p
                className="text-gray-600"
                data-testid={`modal-faculty-education-${index}`}
              >
                {faculty.education}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Experience</h4>
              <p
                className="text-gray-600"
                data-testid={`modal-faculty-experience-${index}`}
              >
                {faculty.experience}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Contact</h4>
              <p
                className="text-gray-600"
                data-testid={`modal-faculty-email-${index}`}
              >
                {faculty.email}
              </p>
              <p
                className="text-gray-600"
                data-testid={`modal-faculty-phone-${index}`}
              >
                {faculty.phone}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen pt-20" data-testid="page-people">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-teal to-primary-blue text-white" data-testid="section-people-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6" data-testid="heading-people-title">
            Our People
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-testid="text-people-subtitle">
            Meet our dedicated faculty, staff, and students driving excellence in biomedical engineering
          </p>
        </div>
      </section>

      {/* People Tabs */}
      <section className="py-20" data-testid="section-people-tabs">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="faculty" className="w-full" data-testid="tabs-people">
            <TabsList className="grid w-full grid-cols-4 mb-8" data-testid="tabs-list-people">
              <TabsTrigger value="faculty" data-testid="tab-faculty">Faculty</TabsTrigger>
              <TabsTrigger value="officers" data-testid="tab-officers">Officers</TabsTrigger>
              <TabsTrigger value="staff" data-testid="tab-staff">Staff</TabsTrigger>
              <TabsTrigger value="students" data-testid="tab-students">Students</TabsTrigger>
            </TabsList>

            <TabsContent value="faculty" data-testid="tab-content-faculty">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-faculty">
                    Faculty Members
                  </h2>
                  <p className="text-xl text-gray-600" data-testid="text-faculty-subtitle">
                    Experienced educators and researchers leading our academic programs
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {people?.faculty?.map((faculty, index) => (
                    <Card 
                      key={index}
                      className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                      data-testid={`card-faculty-${index}`}
                    >
                      <div className="text-center mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
                          alt={faculty.name}
                          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                          data-testid={`image-faculty-${index}`}
                        />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`heading-faculty-name-${index}`}>
                          {faculty.name}
                        </h3>
                        <p className="text-primary-teal font-medium mb-2" data-testid={`text-faculty-designation-${index}`}>
                          {faculty.designation}
                        </p>
                        <p className="text-gray-600 text-sm mb-2" data-testid={`text-faculty-specialization-${index}`}>
                          {faculty.specialization}
                        </p>
                        <p className="text-gray-600 text-sm mb-4" data-testid={`text-faculty-email-${index}`}>
                          {faculty.email}
                        </p>
                        <FacultyModal faculty={faculty} index={index} />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="officers" data-testid="tab-content-officers">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-officers">
                    Officers & Administrative Staff
                  </h2>
                  <p className="text-xl text-gray-600" data-testid="text-officers-subtitle">
                    Dedicated professionals supporting our administrative and technical operations
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {people?.officers?.map((officer, index) => (
                    <Card 
                      key={index}
                      className="p-6 hover:shadow-xl transition-all duration-300"
                      data-testid={`card-officer-${index}`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary-blue p-3 rounded-full">
                          <i className="fas fa-user-tie text-white text-xl"></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`heading-officer-name-${index}`}>
                            {officer.name}
                          </h3>
                          <p className="text-primary-blue font-medium mb-2" data-testid={`text-officer-designation-${index}`}>
                            {officer.designation}
                          </p>
                          <p className="text-gray-600 text-sm mb-2" data-testid={`text-officer-email-${index}`}>
                            <strong>Email:</strong> {officer.email}
                          </p>
                          <p className="text-gray-600 text-sm mb-2" data-testid={`text-officer-phone-${index}`}>
                            <strong>Phone:</strong> {officer.phone}
                          </p>
                          <p className="text-gray-600 text-sm" data-testid={`text-officer-responsibilities-${index}`}>
                            <strong>Responsibilities:</strong> {officer.responsibilities}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="staff" data-testid="tab-content-staff">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-staff">
                    Support Staff
                  </h2>
                  <p className="text-xl text-gray-600" data-testid="text-staff-subtitle">
                    Essential team members ensuring smooth department operations
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {people?.staff?.map((staff, index) => (
                    <Card 
                      key={index}
                      className="p-6 hover:shadow-xl transition-all duration-300"
                      data-testid={`card-staff-${index}`}
                    >
                      <div className="text-center">
                        <div className="bg-primary-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <i className="fas fa-user text-white text-xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`heading-staff-name-${index}`}>
                          {staff.name}
                        </h3>
                        <p className="text-primary-teal font-medium mb-2" data-testid={`text-staff-designation-${index}`}>
                          {staff.designation}
                        </p>
                        <p className="text-gray-600 text-sm mb-2" data-testid={`text-staff-email-${index}`}>
                          {staff.email}
                        </p>
                        <p className="text-gray-600 text-sm" data-testid={`text-staff-responsibilities-${index}`}>
                          {staff.responsibilities}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="students" data-testid="tab-content-students">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-students">
                    Student Statistics
                  </h2>
                  <p className="text-xl text-gray-600" data-testid="text-students-subtitle">
                    Our vibrant student community across all academic levels
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* UG Students */}
                  <Card className="p-8 text-center hover:shadow-xl transition-all duration-300" data-testid="card-students-ug">
                    <div className="bg-primary-teal p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <i className="fas fa-user-graduate text-white text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                      Undergraduate Students
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="text-4xl font-bold text-primary-teal mb-4" data-testid="stat-ug-total">
                        {people?.students?.UG?.total}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Year 1: <span className="font-semibold" data-testid="stat-ug-year1">{people?.students?.UG?.year1}</span></div>
                        <div>Year 2: <span className="font-semibold" data-testid="stat-ug-year2">{people?.students?.UG?.year2}</span></div>
                        <div>Year 3: <span className="font-semibold" data-testid="stat-ug-year3">{people?.students?.UG?.year3}</span></div>
                        <div>Year 4: <span className="font-semibold" data-testid="stat-ug-year4">{people?.students?.UG?.year4}</span></div>
                      </div>
                    </div>
                  </Card>

                  {/* PG Students */}
                  <Card className="p-8 text-center hover:shadow-xl transition-all duration-300" data-testid="card-students-pg">
                    <div className="bg-primary-blue p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <i className="fas fa-graduation-cap text-white text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                      Postgraduate Students
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="text-4xl font-bold text-primary-blue mb-4" data-testid="stat-pg-total">
                        {people?.students?.PG?.total}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Year 1: <span className="font-semibold" data-testid="stat-pg-year1">{people?.students?.PG?.year1}</span></div>
                        <div>Year 2: <span className="font-semibold" data-testid="stat-pg-year2">{people?.students?.PG?.year2}</span></div>
                      </div>
                    </div>
                  </Card>

                  {/* PhD Students */}
                  <Card className="p-8 text-center hover:shadow-xl transition-all duration-300" data-testid="card-students-phd">
                    <div className="bg-primary-teal p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <i className="fas fa-university text-white text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                      Doctoral Students
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="text-4xl font-bold text-primary-teal mb-4" data-testid="stat-phd-total">
                        {people?.students?.PhD?.total}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Registered: <span className="font-semibold" data-testid="stat-phd-registered">{people?.students?.PhD?.registered}</span></div>
                        <div>Completed: <span className="font-semibold" data-testid="stat-phd-completed">{people?.students?.PhD?.completed}</span></div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default People;
