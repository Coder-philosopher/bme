"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Award,
  BookOpen,
  Users,
  Lightbulb,
  FileText,
  Presentation,
  Calendar,
} from "lucide-react";

// Hardcoded research grants data
const researchData = {
  research_projects: [
    {
      project_no: "NITRR/RP/BME/2017/84",
      title: "On Chip Development of Three Dimensional Clinical Graft for the Treatment of Diseased Esophageal with integration of Vascularisation and Enhanced Neurogenesis",
      coordinators: ["Dr. Arindam Bit"],
      research_grant: "33,18,100.00",
      funding_agency: "SERB",
      year_of_sanction: 2017,
      current_status: "Completed",
    },
    {
      project_no: "NITRR/RP/BME/2016/79",
      title: "Three-Dimensional Monte-Carlo Simulation for Photoacoustic Tomography using Graphics Processing Unit",
      coordinators: ["Dr. Saurabh Gupta"],
      research_grant: "20,19,330.00",
      funding_agency: "SERB",
      year_of_sanction: 2017,
      current_status: "Completed",
    },
    {
      project_no: "NITRR/RP/BME/2018/111",
      title: "Development of Risk Stratification System for Clinical Management of Sickle Cell Disease Using Predictive Machine Learning Approaches",
      coordinators: ["Dr. Bikesh Kumar Singh"],
      research_grant: "16,06,930.00",
      funding_agency: "SERB",
      year_of_sanction: 2018,
      current_status: "Completed",
    },
    {
      project_no: "NITRR/RP/BME/2019/115",
      title: "Regeneration Mechanisms of Deep-layer Skin Wounds in Response to Treatment with Polyelectrolyte-Hydrogel Complex Dressing and Gene Therapy",
      coordinators: ["Dr. Arindam Bit", "Dr. Linur I. Salafutdinov (Federal University, Kazan Russia)"],
      research_grant: "29,29,440.00",
      funding_agency: "RUS/RFBR",
      year_of_sanction: 2018,
      current_status: "Completed",
    },
    {
      project_no: "NITRR/RP/BME/2019/122",
      title: "Development of Complete Functional Blood Vessel Network on Multi-layered Microfluidic Platform",
      coordinators: ["Dr. Arindam Bit (PI)", "Dr. Lata Upadhyay (co-PI)"],
      research_grant: "49,19,622.00",
      funding_agency: "MHRD",
      year_of_sanction: 2019,
      current_status: "Completed",
    },
    {
      project_no: "NITRR/RP/BME/2019/123",
      title: "Development of Microfluidic Platform for Point-of-care Diagnosis of Sickle Cell Anemia of Chhattisgarh",
      coordinators: ["Dr. Arindam Bit"],
      research_grant: "29,95,344.00",
      funding_agency: "DST-TDP",
      year_of_sanction: 2019,
      current_status: "Completed",
    },
    {
      project_no: "NITRR/RP/BME/2020/125",
      title: "Development of a MultiModal Artificial Intelligent System for Detection of Endophenotypes in Schizophrenia Using Automated Speech and EEG Signal Analysis: An Explorative Study from Chhattisgarh State",
      coordinators: ["Dr. Bikesh Kumar Singh"],
      research_grant: "25,38,240.00",
      funding_agency: "DST (CSRI)",
      year_of_sanction: 2020,
      current_status: "Completed",
    },
    {
      project_no: "NITRR/RP/BME/2019/131",
      title: "Development of Patient-Specific Vertebral Disc Joint Impact with Multi-Components Designing Approach",
      coordinators: ["Dr. Arindam Bit"],
      research_grant: "28,88,580.00",
      funding_agency: "DST (India-Taiwan)",
      year_of_sanction: 2020,
      current_status: "Completed",
    },
    {
      project_no: "NITRR/RP/BME/2021/135",
      title: "Development of Breast Cancer Risk Assessment in Women using Advanced Artificial Intelligence Techniques: A Pilot Study",
      coordinators: ["Dr. Bikesh Kumar Singh"],
      research_grant: "2,33,000.00",
      funding_agency: "ICMR",
      year_of_sanction: 2021,
      current_status: "Completed",
    },
    {
      project_no: "NITRR/RP/BME/2021/141",
      title: "Enhancing Brain Cognition Through Neuro–Feedback Model in Indian Children with Learning Disability",
      coordinators: ["Dr. Bikesh Kumar Singh"],
      research_grant: "27,25,316.00",
      funding_agency: "SERB",
      year_of_sanction: 2021,
      current_status: "Completed",
    },
    {
      project_no: "NITRR/RP/BME/2023/162",
      title: "Identification of Composite Neural Biomarkers for Differentiating Psychotic Disorders Using Quantitative EEG and Speech Signal Analysis",
      coordinators: ["Dr. Bikesh Kumar Singh (PI)", "Dr. Sai Krishna Tikka (Co-PI)", "Dr. Lokesh Kumar Singh (Co-PI)"],
      research_grant: "45,79,696.00",
      funding_agency: "SERB (CRG)",
      year_of_sanction: 2023,
      current_status: "On Going",
    },
    {
      project_no: "NITRR/RP/BME/2023/170",
      title: "Investigating EEG and fNIRS Signatures for Different Types of Meditation – An Artificial Intelligence-Based Approach for Evaluation and Validation",
      coordinators: ["Dr. Bikesh Kumar Singh"],
      research_grant: "27,54,259.00",
      funding_agency: "DST/SATYAM",
      year_of_sanction: 2023,
      current_status: "On Going",
    },
  ],
  seed_grant_projects: [
    {
      project_no: "NITRR/Seed Grant/2019-20/003",
      title: "Development of Patient Specific Triply Periodic Minimal Surface Based Pre-Constructed Porous Orthopedic Implant",
      coordinators: ["Dr. Nishant Kumar Singh"],
      research_grant: "4,99,700.00",
      year_of_sanction: 2019,
      current_status: "Completed",
    },
    {
      project_no: "NITRR/Seed Grant/2021-22/34",
      title: "Development of 3D Printed Scoliotic Model for Surgical Training",
      coordinators: ["Dr. M. Marieswaran"],
      research_grant: "5,00,000.00",
      year_of_sanction: 2022,
      current_status: "On Going",
    },
    {
      project_no: "NITRR/Seed Grant/2024-25/10",
      title: "Study of Mechanotransduction of Cartilage on Chip to Identify Osteoarthritis (OA)",
      coordinators: ["Dr. Mainak Basu"],
      research_grant: "5,00,000.00",
      year_of_sanction: 2024,
      current_status: "On Going",
    },
    {
      project_no: "NITRR/Seed Grant/2024-25/11",
      title: "Comparative Analysis of Plantar Pressure and Muscle Activation in Normal and Flat-Footed Individuals: Effects of Correction Insoles",
      coordinators: ["Dr. Shivangi Giri"],
      research_grant: "5,00,000.00",
      year_of_sanction: 2024,
      current_status: "On Going",
    },
  ],
};

const ComingSoonPlaceholder = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <div className="p-16 text-center border-2 border-gray-300 bg-gray-50">
    <Icon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
    <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">{title}</h3>
    <p className="text-gray-700">Content will be updated soon</p>
  </div>
);

const Research = () => {
  const [activeTab, setActiveTab] = useState("projects");

  // Calculate statistics
  const totalProjects = researchData.research_projects.length + researchData.seed_grant_projects.length;
  const ongoingProjects = [...researchData.research_projects, ...researchData.seed_grant_projects].filter(
    (p) => p.current_status === "On Going"
  ).length;
  const totalFunding = [...researchData.research_projects, ...researchData.seed_grant_projects]
    .reduce((sum, p) => sum + parseFloat(p.research_grant.replace(/,/g, "")), 0)
    .toFixed(2);

  return (
    <div className="min-h-screen pt-28 bg-white">
      {/* Hero Section - Academic */}
      <section className="pb-12 bg-blue-900 border-b-4 border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide">
            Research & Innovation
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Advancing biomedical science through cutting-edge research and collaboration
          </p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-12 bg-gray-50 border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border-2 border-gray-400 bg-white border-t-4 border-t-blue-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Total Projects</p>
                  <p className="text-4xl font-bold text-blue-900">{totalProjects}</p>
                </div>
                <Lightbulb className="w-12 h-12 text-blue-900 opacity-20" />
              </div>
            </div>

            <div className="p-6 border-2 border-gray-400 bg-white border-t-4 border-t-blue-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Ongoing Projects</p>
                  <p className="text-4xl font-bold text-blue-900">{ongoingProjects}</p>
                </div>
                <Award className="w-12 h-12 text-blue-900 opacity-20" />
              </div>
            </div>

            <div className="p-6 border-2 border-gray-400 bg-white border-t-4 border-t-blue-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Total Funding</p>
                  <p className="text-3xl font-bold text-blue-900">₹{(parseFloat(totalFunding) / 10000000).toFixed(2)}Cr+</p>
                </div>
                <FileText className="w-12 h-12 text-blue-900 opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Vertical Sidebar for Desktop */}
              <TabsList className="hidden lg:flex flex-col w-64 bg-gray-50 border-2 border-gray-300 gap-0 p-0 h-fit sticky top-28">
                <TabsTrigger
                  value="projects"
                  className="w-full justify-start text-left px-4 py-3 border-b-2 border-gray-300 data-[state=active]:bg-blue-900 data-[state=active]:text-white font-bold uppercase tracking-wide text-sm"
                >
                  <Lightbulb className="w-5 h-5 mr-3" />
                  Research Projects
                </TabsTrigger>
                <TabsTrigger
                  value="publications"
                  className="w-full justify-start text-left px-4 py-3 border-b-2 border-gray-300 data-[state=active]:bg-blue-900 data-[state=active]:text-white font-bold uppercase tracking-wide text-sm"
                >
                  <BookOpen className="w-5 h-5 mr-3" />
                  Publications
                </TabsTrigger>
                <TabsTrigger
                  value="conference"
                  className="w-full justify-start text-left px-4 py-3 border-b-2 border-gray-300 data-[state=active]:bg-blue-900 data-[state=active]:text-white font-bold uppercase tracking-wide text-sm"
                >
                  <Presentation className="w-5 h-5 mr-3" />
                  Conferences
                </TabsTrigger>
                <TabsTrigger
                  value="mous"
                  className="w-full justify-start text-left px-4 py-3 border-b-2 border-gray-300 data-[state=active]:bg-blue-900 data-[state=active]:text-white font-bold uppercase tracking-wide text-sm"
                >
                  <Users className="w-5 h-5 mr-3" />
                  MoUs & Collaborations
                </TabsTrigger>
                <TabsTrigger
                  value="talks"
                  className="w-full justify-start text-left px-4 py-3 data-[state=active]:bg-blue-900 data-[state=active]:text-white font-bold uppercase tracking-wide text-sm"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Invited Talks
                </TabsTrigger>
              </TabsList>

              {/* Horizontal Tabs for Mobile */}
              <TabsList className="lg:hidden grid grid-cols-5 gap-2 bg-gray-50 border-2 border-gray-300 p-2 mb-6">
                <TabsTrigger value="projects" className="text-xs px-2 py-2 font-bold uppercase data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                  Projects
                </TabsTrigger>
                <TabsTrigger value="publications" className="text-xs px-2 py-2 font-bold uppercase data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                  Publications
                </TabsTrigger>
                <TabsTrigger value="conference" className="text-xs px-2 py-2 font-bold uppercase data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                  Conferences
                </TabsTrigger>
                <TabsTrigger value="mous" className="text-xs px-2 py-2 font-bold uppercase data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                  MoUs
                </TabsTrigger>
                <TabsTrigger value="talks" className="text-xs px-2 py-2 font-bold uppercase data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                  Talks
                </TabsTrigger>
              </TabsList>

              {/* Tab Content */}
              <div className="flex-1">
                {/* Projects Tab */}
                <TabsContent value="projects" className="mt-0">
                  <div className="space-y-12">
                    {/* Sponsored Research Projects */}
                    <div>
                      <div className="flex items-center mb-6 pb-4 border-b-2 border-gray-400">
                        <div className="bg-blue-900 p-3 mr-4">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
                          Sponsored Research Projects
                        </h2>
                      </div>
                      <div className="overflow-hidden border-2 border-gray-400 bg-gray-50">
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow className="border-b-2 border-gray-400">
                                <TableHead className="font-bold text-gray-900 uppercase tracking-wide bg-blue-900 text-white border-r-2 border-gray-300 text-xs">Project No.</TableHead>
                                <TableHead className="font-bold text-gray-900 uppercase tracking-wide bg-blue-900 text-white border-r-2 border-gray-300 text-xs">Title</TableHead>
                                <TableHead className="font-bold text-gray-900 uppercase tracking-wide bg-blue-900 text-white border-r-2 border-gray-300 text-xs">Coordinators</TableHead>
                                <TableHead className="font-bold text-gray-900 uppercase tracking-wide bg-blue-900 text-white border-r-2 border-gray-300 text-xs">Funding Agency</TableHead>
                                <TableHead className="font-bold text-gray-900 uppercase tracking-wide bg-blue-900 text-white text-center border-r-2 border-gray-300 text-xs">Year</TableHead>
                                <TableHead className="font-bold text-gray-900 uppercase tracking-wide bg-blue-900 text-white text-right border-r-2 border-gray-300 text-xs">Grant (₹)</TableHead>
                                <TableHead className="font-bold text-gray-900 uppercase tracking-wide bg-blue-900 text-white text-center text-xs">Status</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {researchData.research_projects.map((project, idx) => (
                                <TableRow key={idx} className="border-b border-gray-300 hover:bg-white bg-gray-50">
                                  <TableCell className="font-mono text-xs font-semibold text-gray-800 border-r border-gray-300">
                                    {project.project_no}
                                  </TableCell>
                                  <TableCell className="max-w-md border-r border-gray-300">
                                    <p className="font-bold text-gray-900 text-sm">{project.title}</p>
                                  </TableCell>
                                  <TableCell className="border-r border-gray-300">
                                    {project.coordinators.map((coord, i) => (
                                      <div key={i} className="text-sm text-gray-800 font-semibold">
                                        {coord}
                                      </div>
                                    ))}
                                  </TableCell>
                                  <TableCell className="border-r border-gray-300">
                                    <span className="text-sm font-bold text-blue-900">
                                      {project.funding_agency}
                                    </span>
                                  </TableCell>
                                  <TableCell className="text-center font-semibold text-gray-800 border-r border-gray-300">
                                    {project.year_of_sanction}
                                  </TableCell>
                                  <TableCell className="text-right font-bold text-gray-900 border-r border-gray-300">
                                    {project.research_grant}
                                  </TableCell>
                                  <TableCell className="text-center">
                                    <span
                                      className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide border ${
                                        project.current_status === "On Going"
                                          ? "bg-blue-900 text-white border-blue-900"
                                          : "bg-white text-gray-900 border-gray-400"
                                      }`}
                                    >
                                      {project.current_status}
                                    </span>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                    </div>

                    {/* Seed Grant Projects */}
                    <div>
                      <div className="flex items-center mb-6 pb-4 border-b-2 border-gray-400">
                        <div className="bg-blue-900 p-3 mr-4">
                          <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
                          Seed Grant Projects
                        </h2>
                      </div>
                      <div className="overflow-hidden border-2 border-gray-400 bg-gray-50">
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow className="border-b-2 border-gray-400">
                                <TableHead className="font-bold text-gray-900 uppercase tracking-wide bg-blue-900 text-white border-r-2 border-gray-300 text-xs">Project No.</TableHead>
                                <TableHead className="font-bold text-gray-900 uppercase tracking-wide bg-blue-900 text-white border-r-2 border-gray-300 text-xs">Title</TableHead>
                                <TableHead className="font-bold text-gray-900 uppercase tracking-wide bg-blue-900 text-white border-r-2 border-gray-300 text-xs">Coordinators</TableHead>
                                <TableHead className="font-bold text-gray-900 uppercase tracking-wide bg-blue-900 text-white text-center border-r-2 border-gray-300 text-xs">Year</TableHead>
                                <TableHead className="font-bold text-gray-900 uppercase tracking-wide bg-blue-900 text-white text-right border-r-2 border-gray-300 text-xs">Grant (₹)</TableHead>
                                <TableHead className="font-bold text-gray-900 uppercase tracking-wide bg-blue-900 text-white text-center text-xs">Status</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {researchData.seed_grant_projects.map((project, idx) => (
                                <TableRow key={idx} className="border-b border-gray-300 hover:bg-white bg-gray-50">
                                  <TableCell className="font-mono text-xs font-semibold text-gray-800 border-r border-gray-300">
                                    {project.project_no}
                                  </TableCell>
                                  <TableCell className="max-w-md border-r border-gray-300">
                                    <p className="font-bold text-gray-900 text-sm">{project.title}</p>
                                  </TableCell>
                                  <TableCell className="border-r border-gray-300">
                                    {project.coordinators.map((coord, i) => (
                                      <div key={i} className="text-sm text-gray-800 font-semibold">
                                        {coord}
                                      </div>
                                    ))}
                                  </TableCell>
                                  <TableCell className="text-center font-semibold text-gray-800 border-r border-gray-300">
                                    {project.year_of_sanction}
                                  </TableCell>
                                  <TableCell className="text-right font-bold text-gray-900 border-r border-gray-300">
                                    {project.research_grant}
                                  </TableCell>
                                  <TableCell className="text-center">
                                    <span
                                      className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide border ${
                                        project.current_status === "On Going"
                                          ? "bg-blue-900 text-white border-blue-900"
                                          : "bg-white text-gray-900 border-gray-400"
                                      }`}
                                    >
                                      {project.current_status}
                                    </span>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Other Tabs */}
                <TabsContent value="publications" className="mt-0">
                  <ComingSoonPlaceholder icon={BookOpen} title="Publications" />
                </TabsContent>

                <TabsContent value="conference" className="mt-0">
                  <ComingSoonPlaceholder icon={Presentation} title="Conference Papers" />
                </TabsContent>

                <TabsContent value="mous" className="mt-0">
                  <ComingSoonPlaceholder icon={Users} title="MoUs & Collaborations" />
                </TabsContent>

                <TabsContent value="talks" className="mt-0">
                  <ComingSoonPlaceholder icon={Calendar} title="Invited Talks" />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Research;
