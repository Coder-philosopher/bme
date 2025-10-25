"use client";

import { useState } from "react";
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
import {
  Mail,
  Phone,
  GraduationCap,
  Award,
  Briefcase,
  User,
  Users as UsersIcon,
  Calendar,
} from "lucide-react";

// Hardcoded faculty data
const facultyData = {
  head_of_department: {
    name: "Dr. Arindam Bit",
    qualification: "B. Tech (Biomed.), M.E (Biomed.), PhD (Jadavpur University)",
    designation: "Associate Professor",
    contact_info: {
      phone: "9399603267",
      emails: ["arinbit.bme@nitrr.ac.in", "ab.mbme@gmail.com"],
    },
    specialisation_area_of_interest: [
      "Numerical and Experimental Biomechanics",
      "CFD Application in Biomedical Engineering",
      "EEG Signal Analysis",
      "Medical Image Processing",
    ],
    image_url: "/images/Prof.Bit.jpg",
  },
  faculty: [
    {
      name: "Dr. Bikesh Kumar Singh",
      qualification: "Ph.D. (Biomedical Engineering), NIT Raipur; M. Tech. (Instrumentation and Control), B Tech (E & T. C.)",
      designation: "Associate Professor",
      contact_info: {
        phone: "+91‑9826469522",
        emails: ["bsingh.bme@nitrr.ac.in"],
      },
      specialisation_area_of_interest: [
        "Biomedical Signal Processing (EEG, PPG, Lung sounds)",
        "Medical Image Processing and Analysis",
        "Computational Neuroscience",
        "Computer Aided Diagnosis",
        "Deep Learning and Machine Learning Applications in Healthcare",
      ],
      image_url: "/images/bksingh.jpg",
    },
    {
      name: "Dr. Saurabh Gupta",
      qualification: "PhD (Inverse Problems), IISc Bangalore; M S (Medical Software), Manipal University; B Tech (BME), Bundelkhand University",
      designation: "Associate Professor",
      contact_info: {
        phone: "7389727963",
        emails: ["sgupta.bme@nitrr.ac.in"],
      },
      specialisation_area_of_interest: [
        "Inverse Problems",
        "Optical Tomography",
        "Optimization Algorithms",
        "Pattern Recognition",
        "Medical Imaging",
      ],
      image_url: "/images/saurabh_bme.jpeg",
    },
    {
      name: "Dr. Sudip Paul",
      qualification: "B. Tech Biomedical Engineering IT BHU, PhD Biomedical Engineering IIT BHU, PDF Computer Science and Software Engineering: The University of Western Australia, Perth",
      designation: "Associate Professor",
      contact_info: {
        phone: "9485026088",
        emails: ["spaul.bme@nitrr.ac.in"],
      },
      specialisation_area_of_interest: [
        "Biomedical Instrumentation",
        "Electrophysiology",
        "Medical Device",
        "Cognitive Neuroscience",
        "AI in healthcare",
      ],
      image_url: "/images/sudip paul pic.jpg",
    },
    {
      name: "Dr. Neelamshobha Nirala",
      qualification: "B. Tech (Biomedical Engineering - NIT Raipur), M. Tech (Biomedical Engineering - SRM University), PhD (NIT Raipur)",
      designation: "Assistant Professor",
      contact_info: {
        phone: "+91‑6232089917",
        emails: ["neelanir.bme@nitrr.ac.in"],
      },
      specialisation_area_of_interest: [
        "Signal Processing",
        "Image Processing",
        "Photoplethysmogram",
      ],
      image_url: "/images/Mrs.Neelam Shobha Nirala.jpg",
    },
    {
      name: "Dr. Nishant Kumar Singh",
      qualification: "Ph.D. (Biomechanics), IIT‑BHU, Varanasi; M. Tech (Biomedical Engineering), IIT‑BHU, Varanasi; B. Tech (Biomedical Engineering), UPTU",
      designation: "Assistant Professor (Grade‑I)",
      contact_info: {
        phone: "+91‑7905733489",
        emails: ["nksingh.bme@nitrr.ac.in"],
      },
      specialisation_area_of_interest: [
        "Computational & Multiscale Biomechanics",
        "Orthopedic & Dental Implant Biomechanics",
        "Biomaterials",
        "Finite Element Analysis",
        "Rehabilitation Engineering",
      ],
      image_url: "/images/nishant.jpg",
    },
    {
      name: "Dr. M. Marieswaran",
      qualification: "PhD – Experimental Biomechanics, IIT Delhi (2019); M. Tech – Biomedical Engineering – VIT University (2012); B.E. Biomedical Engineering – SSN College of Engineering, Anna University (2010)",
      designation: "Assistant Professor (Grade‑I)",
      contact_info: {
        emails: ["mmarieswaran.bme@nitrr.ac.in"],
      },
      specialisation_area_of_interest: [
        "Experimental & Orthopaedic Biomechanics",
        "Medical Instrumentation",
        "Biosensors",
        "MEMS Fabrication",
        "3D‑Printing",
      ],
      image_url: "/images/Dr Maries.jpg",
    },
    {
      name: "Dr. Shivangi Giri",
      qualification: "Ph.D. (Biomechanics), MNNIT Allahabad; M. Tech. (Biomedical Engineering), MNNIT Allahabad; B. Tech. (Instrumentation & Control), UPTU",
      designation: "Assistant Professor (Grade‑II)",
      contact_info: {
        phone: "+91‑9450666459",
        emails: ["sgiri.bme@nitrr.ac.in"],
      },
      specialisation_area_of_interest: [
        "Computational Biomechanics",
        "Human Musculoskeletal",
      ],
      image_url: "/images/Shivangi_Giri_Photograph.jpg",
    },
    {
      name: "Dr. Mainak Basu",
      qualification: "Ph.D. – MEMS and Microfluidics, IIT Kharagpur (2022); M. Tech – Biomedical Engineering, VIT University (2014); B. Tech – Biomedical Engineering, WBUT (2012)",
      designation: "Assistant Professor (Grade‑II)",
      contact_info: {
        phone: "+91‑8902033161",
        emails: ["mbasu.bme@nitrr.ac.in"],
      },
      specialisation_area_of_interest: [
        "Microfluidics and Digital Microfluidics",
        "MEMS, Bio‑MEMS, NEMS",
        "Electrochemical and Optical methods for diagnostic devices",
        "Biosensors and Biomedical Instrumentation",
      ],
      image_url: "/images/Mainak_image.jpg",
    },
    {
      name: "Dr. Souvik Biswas",
      qualification: "B. Tech Biomedical Engineering WBUT; M. Tech Biomedical Engineering Jadavpur University; PhD Biomedical Engineering IIT Kharagpur, PDF Dielectric Spectroscopy, Chalmers University of Technology",
      designation: "Assistant Professor (Grade‑II)",
      contact_info: {
        phone: "905164557",
        emails: ["sbiswas.bme@nitrr.ac.in"],
      },
      specialisation_area_of_interest: [
        "Biosensor",
        "Computational nanoelectronics",
      ],
      image_url: "/images/Souvik-Biswas-5.jpg",
    },
    {
      name: "Dr. Bijit Basumatary",
      qualification: "Ph. D (PMRF, Biomedical Engg, IIT Ropar); M. Tech (Biomedical Engg, IIT Ropar); B. Tech (Instrumentation Engg, CIT Kokrajhar)",
      designation: "Temporary Faculty",
      contact_info: {
        phone: "+91‑8011425713",
        emails: ["bbasumatary.bme@nitrr.ac.in"],
      },
      specialisation_area_of_interest: [
        "Electrical Stimulation",
        "Neuromuscular Rehabilitation",
        "Biomedical Instrumentation",
        "Medical Device",
      ],
      image_url: "/images/bijit.png",
    },
    {
      name: "Dr. Adarsha Narayan Mallick",
      qualification: "Ph.D. – Biomedical Engineering, IIT Ropar (2025); B. Tech – Instrumentation and Electronics Engineering, CET Bhubaneswar BPUT, Odisha (2019)",
      designation: "Temporary Faculty",
      contact_info: {
        phone: "+91 9078825885",
        emails: ["anmallick.bme@nitrr.ac.in"],
      },
      specialisation_area_of_interest: [
        "Medical Devices",
        "Biomedical Instrumentation and Electronics",
        "Signal and Image Processing",
        "Embedded Systems and IoT",
        "FEM, CFD, Machine Learning",
      ],
      image_url: "/images/adarsha.jpg",
    },
  ],
};

const staffData = {
  employees: [
    {
      sl_no: 1,
      name: "Mr. Ramesh Kumar",
      designation: "Senior Technician (Regular)",
      qualification: "B.Sc (Physics)",
      date_of_appointment: "01-12-2023",
      contact_info: {
        phone: "+91-7033136182",
        email: "rkumar.bme@nitrr.ac.in",
      },
      image_url: "/images/ramesh.jpg",
    },
    {
      sl_no: 2,
      name: "Mrs. Madhubala Diwakar",
      designation: "Laboratory Assistant (Regular)",
      qualification: "B.Sc (Biology)",
      date_of_appointment: "13-12-2017",
      contact_info: {
        phone: ["+91-9827617707", "+91-7974864846"],
        email: "mdiwakar.bme@nitrr.ac.in",
      },
      image_url: "/images/madhubala.jpg",
    },
    {
      sl_no: 3,
      name: "Mr. Rajendra Kumar Singh",
      designation: "Technician (Regular)",
      qualification: "12th, ITI (COPA)",
      date_of_appointment: "01-12-2023",
      contact_info: {
        phone: "+91-9826971443",
        email: "rksingh.bme@nitrr.ac.in",
      },
      image_url: "/images/rajendra.jpg",
    },
    {
      sl_no: 4,
      name: "Mr. Manoj Kumar Nayak",
      designation: "Assistant Grade-III (Contract)",
      qualification: "PGDAC, MA Sociology",
      date_of_appointment: "14-02-2013",
      contact_info: {
        phone: "+91-9907802124",
        email: "nayakmm143@gmail.com",
      },
      image_url: "/images/nayak.jpg",
    },
    {
      sl_no: 5,
      name: "Ms. Laxmi Bai",
      designation: "Assistant Grade-IV (Contract)",
      qualification: "Intermediate",
      date_of_appointment: "NA",
      contact_info: {
        phone: "+91-9303418249",
        email: null,
      },
      image_url: "/images/laxmi.jpg",
    },
  ],
};

const ComingSoonPlaceholder = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <Card className="p-12 text-center">
    <Icon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
    <h3 className="text-xl font-semibold text-gray-400 mb-2">{title}</h3>
    <p className="text-gray-500">Content will be updated soon</p>
  </Card>
);

const People = () => {
  const [activeTab, setActiveTab] = useState("faculty");

  // Faculty Modal Component
  const FacultyModal = ({ faculty, index }: { faculty: any; index: number }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full mt-4">
          View Full Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{faculty.name}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <img
              src={faculty.image_url}
              alt={faculty.name}
              className="w-full rounded-lg shadow-lg"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
              }}
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <div>
              <h4 className="flex items-center font-semibold text-gray-900 mb-2">
                <Award className="w-4 h-4 mr-2 text-blue-600" />
                Designation
              </h4>
              <p className="text-gray-700">{faculty.designation}</p>
            </div>
            <div>
              <h4 className="flex items-center font-semibold text-gray-900 mb-2">
                <GraduationCap className="w-4 h-4 mr-2 text-purple-600" />
                Qualification
              </h4>
              <p className="text-gray-700 text-sm">{faculty.qualification}</p>
            </div>
            <div>
              <h4 className="flex items-center font-semibold text-gray-900 mb-2">
                <Briefcase className="w-4 h-4 mr-2 text-green-600" />
                Area of Interest
              </h4>
              <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
                {faculty.specialisation_area_of_interest.map((spec: string, i: number) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
              {faculty.contact_info.phone && (
                <a
                  href={`tel:${faculty.contact_info.phone}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {faculty.contact_info.phone}
                </a>
              )}
              {faculty.contact_info.emails.map((email: string, i: number) => (
                <a
                  key={i}
                  href={`mailto:${email}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pb-10 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our People
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Meet our dedicated faculty, staff, and students driving excellence in biomedical engineering
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar for Desktop */}
              <TabsList className="hidden lg:flex flex-col w-64 rounded-xl bg-white shadow-md gap-2 p-4 h-fit sticky top-28">
                <TabsTrigger
                  value="faculty"
                  className="w-full justify-start text-left px-4 py-3 data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-700"
                >
                  <GraduationCap className="w-5 h-5 mr-3" />
                  Faculty Members
                </TabsTrigger>
                <TabsTrigger
                  value="staff"
                  className="w-full justify-start text-left px-4 py-3 data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-700"
                >
                  <UsersIcon className="w-5 h-5 mr-3" />
                  Staff
                </TabsTrigger>
                <TabsTrigger
                  value="officers"
                  className="w-full justify-start text-left px-4 py-3 data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-700"
                >
                  <Briefcase className="w-5 h-5 mr-3" />
                  Officers
                </TabsTrigger>
                <TabsTrigger
                  value="students"
                  className="w-full justify-start text-left px-4 py-3 data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-700"
                >
                  <User className="w-5 h-5 mr-3" />
                  Students
                </TabsTrigger>
              </TabsList>

              {/* Mobile Tabs */}
              <TabsList className="lg:hidden grid grid-cols-4 gap-2 rounded-lg bg-white shadow p-2 mb-6">
                <TabsTrigger value="faculty" className="text-xs px-2 py-2">
                  Faculty
                </TabsTrigger>
                <TabsTrigger value="staff" className="text-xs px-2 py-2">
                  Staff
                </TabsTrigger>
                <TabsTrigger value="officers" className="text-xs px-2 py-2">
                  Officers
                </TabsTrigger>
                <TabsTrigger value="students" className="text-xs px-2 py-2">
                  Students
                </TabsTrigger>
              </TabsList>

              {/* Tab Content */}
              <div className="flex-1">
                {/* Faculty Tab */}
                <TabsContent value="faculty" className="mt-0">
                  <div className="space-y-12">
                    {/* HOD Section */}
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                        <Award className="w-8 h-8 mr-3 text-indigo-600" />
                        Head of Department
                      </h2>
                      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-200">
                        <div className="grid md:grid-cols-4 gap-6">
                          <div className="md:col-span-1">
                            <img
                              src={facultyData.head_of_department.image_url}
                              alt={facultyData.head_of_department.name}
                              className="w-full rounded-lg shadow-lg"
                              onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
                              }}
                            />
                          </div>
                          <div className="md:col-span-3 space-y-3">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {facultyData.head_of_department.name}
                            </h3>
                            <p className="text-indigo-700 font-semibold">
                              {facultyData.head_of_department.designation}
                            </p>
                            <p className="text-sm text-gray-600">
                              {facultyData.head_of_department.qualification}
                            </p>
                            <div className="flex flex-wrap gap-3">
                              <a
                                href={`tel:${facultyData.head_of_department.contact_info.phone}`}
                                className="inline-flex items-center px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 text-sm font-medium"
                              >
                                <Phone className="w-4 h-4 mr-2" />
                                {facultyData.head_of_department.contact_info.phone}
                              </a>
                              {facultyData.head_of_department.contact_info.emails.map((email, i) => (
                                <a
                                  key={i}
                                  href={`mailto:${email}`}
                                  className="inline-flex items-center px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 text-sm font-medium"
                                >
                                  <Mail className="w-4 h-4 mr-2" />
                                  {email}
                                </a>
                              ))}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Specialization:</h4>
                              <div className="flex flex-wrap gap-2">
                                {facultyData.head_of_department.specialisation_area_of_interest.map((spec, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Faculty Grid */}
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        Faculty Members
                      </h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facultyData.faculty.map((faculty, index) => (
                          <Card
                            key={index}
                            className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                          >
                            <div className="text-center">
                              <img
                                src={faculty.image_url}
                                alt={faculty.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-gray-100"
                                onError={(e) => {
                                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop";
                                }}
                              />
                              <h3 className="text-lg font-bold text-gray-900 mb-1">
                                {faculty.name}
                              </h3>
                              <p className="text-indigo-600 font-semibold text-sm mb-3">
                                {faculty.designation}
                              </p>
                              <div className="space-y-2 mb-4">
                                {faculty.contact_info.phone && (
                                  <a
                                    href={`tel:${faculty.contact_info.phone}`}
                                    className="flex items-center justify-center text-blue-600 hover:text-blue-800 text-xs"
                                  >
                                    <Phone className="w-3 h-3 mr-1" />
                                    {faculty.contact_info.phone}
                                  </a>
                                )}
                                <a
                                  href={`mailto:${faculty.contact_info.emails[0]}`}
                                  className="flex items-center justify-center text-green-600 hover:text-green-800 text-xs"
                                >
                                  <Mail className="w-3 h-3 mr-1" />
                                  {faculty.contact_info.emails[0]}
                                </a>
                              </div>
                              <FacultyModal faculty={faculty} index={index} />
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Staff Tab */}
                <TabsContent value="staff" className="mt-0">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                      <UsersIcon className="w-8 h-8 mr-3 text-teal-600" />
                      Support Staff
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {staffData.employees.map((staff, index) => (
                        <Card
                          key={index}
                          className="p-6 hover:shadow-xl transition-all duration-300"
                        >
                          <div className="text-center">
                            <img
                              src={staff.image_url}
                              alt={staff.name}
                              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-gray-100"
                              onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop";
                              }}
                            />
                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                              {staff.name}
                            </h3>
                            <p className="text-teal-600 font-semibold text-sm mb-2">
                              {staff.designation}
                            </p>
                            <p className="text-gray-600 text-xs mb-3">
                              {staff.qualification}
                            </p>
                            <div className="flex items-center justify-center text-gray-500 text-xs mb-3">
                              <Calendar className="w-3 h-3 mr-1" />
                              Joined: {staff.date_of_appointment}
                            </div>
                            <div className="space-y-2">
                              {Array.isArray(staff.contact_info.phone) ? (
                                staff.contact_info.phone.map((phone, i) => (
                                  <a
                                    key={i}
                                    href={`tel:${phone}`}
                                    className="flex items-center justify-center text-blue-600 hover:text-blue-800 text-xs"
                                  >
                                    <Phone className="w-3 h-3 mr-1" />
                                    {phone}
                                  </a>
                                ))
                              ) : (
                                <a
                                  href={`tel:${staff.contact_info.phone}`}
                                  className="flex items-center justify-center text-blue-600 hover:text-blue-800 text-xs"
                                >
                                  <Phone className="w-3 h-3 mr-1" />
                                  {staff.contact_info.phone}
                                </a>
                              )}
                              {staff.contact_info.email && (
                                <a
                                  href={`mailto:${staff.contact_info.email}`}
                                  className="flex items-center justify-center text-green-600 hover:text-green-800 text-xs"
                                >
                                  <Mail className="w-3 h-3 mr-1" />
                                  {staff.contact_info.email}
                                </a>
                              )}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Officers Tab */}
                <TabsContent value="officers" className="mt-0">
                  <ComingSoonPlaceholder icon={Briefcase} title="Officers" />
                </TabsContent>

                {/* Students Tab */}
                <TabsContent value="students" className="mt-0">
                  <ComingSoonPlaceholder icon={User} title="Student Statistics" />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default People;
