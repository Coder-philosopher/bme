"use client";

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import StatsSection from "@/components/StatsSection";
import { Award, FlaskConical, Users, Star, Microscope, BookOpen, Layers } from "lucide-react";

const highlightCards = [
  {
    icon: Award,
    title: "Academic Excellence",
    desc: "Comprehensive curriculum and world-class faculty.",
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: FlaskConical,
    title: "Innovative Research",
    desc: "42+ funded projects and 18 patents.",
    color: "bg-cyan-100 text-cyan-800",
  },
  {
    icon: Microscope,
    title: "Specialized Labs",
    desc: "9 cutting-edge facilities for hands-on learning.",
    color: "bg-purple-100 text-purple-800",
  },
  {
    icon: BookOpen,
    title: "Collaboration",
    desc: "Projects with 15 international organizations.",
    color: "bg-green-100 text-green-800",
  },
  {
    icon: Layers,
    title: "Interdisciplinary Approach",
    desc: "Blending engineering, medical sciences, data & AI.",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    icon: Star,
    title: "Student Achievements",
    desc: "28 impactful publications, 35 PG & 15 PhD students.",
    color: "bg-pink-100 text-pink-800",
  },
];

const AboutPage = () => {
  const { data: aboutData, isLoading } = useQuery({
    queryKey: ["/api/department-data/about"],
  });

  // fallback if API fails
  const about = aboutData?.data || {
    department: "Biomedical Engineering",
    establishment: "2003",
    vision: "To provide society with world-class competitive professionals ...",
    mission: "...",
    deptInfo:
      "The Department of Biomedical Engineering at NIT Raipur stands as a beacon of innovation in healthcare technology. Established in 2008 with the vision to bridge the gap between engineering excellence and medical advancement, we are committed to developing cutting-edge solutions for complex healthcare challenges.",
    facilities: [
      "Biomedical Equipment Lab",
      "Anatomy and Physiology Lab",
      "Bioinformatics Lab",
      "Signal and Image Processing Lab",
      "Tissue Engineering Lab",
      "Microcontroller Lab", // localized
    ],
    programObjectives: {
      PEOs: [
        "Prepare students for diverse careers.",
        "Enable leadership and teamwork.",
      ],
      POs: [
        "Apply anatomy and engineering.",
        "Design and conduct experiments.",
      ],
    },
    HoD: {
      name: "Dr. Arindam Bit",
      image: "/images/Prof.Bit.jpg",
    },
    stats: {
      staff: 5,
      patents: 18,
      projects: 42,
      faculties: 10,
      PGstudents: 35,
      UGstudents: 400,
      PhDstudents: 15,
      publications: 28,
      collaborations: 15,
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20" data-testid="page-about-loading">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-6"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" data-testid="page-about">
      {/* Hero */}
      <section className="relative  bg-white">
        <div className="absolute inset-0 overflow-hidden opacity-60 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=80"
            alt=""
            className="w-full h-full object-cover blur-[2px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-teal-200 opacity-80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-28 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg" data-testid="heading-about-title">
            About Biomedical Engineering
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700" data-testid="text-about-subtitle">
            Excellence in education, research, and innovation since {about.establishment}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white">
        <StatsSection />
      </section>

      {/* Overview & Facilities */}
      <section className="py-20" data-testid="section-department-overview">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-department-info">
                Department Overview
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed" data-testid="text-department-info">
                {about.deptInfo}
              </p>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Facilities</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-600 mb-8 list-disc pl-4">
                {about.facilities?.map((lab, i) =>
                  <li key={lab} className="font-medium">{lab}</li>
                )}
              </ul>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-teal-700 mb-1">{about.stats.projects}+</div>
                  <div className="text-sm font-semibold text-gray-600">Funded Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-700 mb-1">{about.stats.patents}</div>
                  <div className="text-sm font-semibold text-gray-600">Patents</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-700 mb-1">{about.stats.publications}</div>
                  <div className="text-sm font-semibold text-gray-600">Publications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-700 mb-1">{about.stats.UGstudents}+</div>
                  <div className="text-sm font-semibold text-gray-600">UG Students</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80"
                alt="Biomedical lab"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                data-testid="image-department-lab"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="pb-20" data-testid="section-vision-mission">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <Card className="shadow-md p-8 border-t-4 border-blue-500 bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-center mb-6 gap-3">
              <Star className="w-7 h-7 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {about.vision}
            </p>
          </Card>
          <Card className="shadow-md p-8 border-t-4 border-teal-500 bg-gradient-to-br from-teal-50 to-white">
            <div className="flex items-center mb-6 gap-3">
              <BookOpen className="w-7 h-7 text-teal-500" />
              <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {about.mission}
            </p>
          </Card>
        </div>
      </section>

      {/* Program Outcomes & Objectives */}
      <section className="py-16 bg-gray-50" data-testid="section-objectives">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <Card className="p-8 border-l-4 border-blue-300 bg-white shadow">
            <h4 className="text-xl font-bold text-blue-800 mb-4">Program Educational Objectives (PEOs)</h4>
            <ul className="list-disc ml-6">
              {about.programObjectives?.PEOs?.map((peo: string, i: number) =>
                <li className="text-gray-700 mb-2 leading-relaxed" key={i}>{peo}</li>
              )}
            </ul>
          </Card>
          <Card className="p-8 border-l-4 border-teal-300 bg-white shadow">
            <h4 className="text-xl font-bold text-teal-800 mb-4">Program Outcomes (POs)</h4>
            <ul className="list-disc ml-6">
              {about.programObjectives?.POs?.map((po: string, i: number) =>
                <li className="text-gray-700 mb-2 leading-relaxed" key={i}>{po}</li>
              )}
            </ul>
          </Card>
        </div>
      </section>

      {/* HoD Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-teal-50" data-testid="section-hod">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="p-8 shadow-md grid md:grid-cols-3 gap-8 items-center">
            <div>
              <img
                src="/images/Prof.Bit.jpg"
                alt="Dr. Arindam Bit - HoD"
                className="rounded-xl shadow-lg w-full max-w-xs mx-auto object-cover"
                data-testid="image-hod"
              />
            </div>
            <div className="col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Message from the HoD</h3>
              <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-400 pl-6">
                "{about.hodMessage || 'Welcome to the Department. Our mission is to shape the future of healthcare technology through innovation, research, and interdisciplinary learning.'}"
              </blockquote>
              <div className="mt-6">
                <div className="font-semibold text-gray-900">{about.HoD.name || 'Prof. Bit'}</div>
                <div className="text-gray-600">Head of Department</div>
                <div className="text-gray-600">hod.bme@nitrr.ac.in</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Department Highlights */}
      <section className="py-20" data-testid="section-highlights">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Highlights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our key strengths and achievements in biomedical engineering
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightCards.map(({ icon: Icon, title, desc, color }, i) => (
              <Card key={i} className={`p-6 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${color}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
