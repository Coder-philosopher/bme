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
  },
  {
    icon: FlaskConical,
    title: "Innovative Research",
    desc: "42+ funded projects and 18 patents.",
  },
  {
    icon: Microscope,
    title: "Specialized Labs",
    desc: "9 cutting-edge facilities for hands-on learning.",
  },
  {
    icon: BookOpen,
    title: "Collaboration",
    desc: "Projects with 15 international organizations.",
  },
  {
    icon: Layers,
    title: "Interdisciplinary Approach",
    desc: "Blending engineering, medical sciences, data & AI.",
  },
  {
    icon: Star,
    title: "Student Achievements",
    desc: "28 impactful publications, 35 PG & 15 PhD students.",
  },
];

const AboutPage = () => {
  const { data: aboutData, isLoading } = useQuery({
    queryKey: ["/api/department-data/about"],
  });

  const about = aboutData?.data || {
    department: "Biomedical Engineering",
    establishment: "2003",
    vision: "To provide society with world-class competitive professionals...",
    mission: "To provide world-class education in biomedical engineering...",
    deptInfo:
      "The Department of Biomedical Engineering at NIT Raipur stands as a beacon of innovation in healthcare technology. Established in 2008 with the vision to bridge the gap between engineering excellence and medical advancement, we are committed to developing cutting-edge solutions for complex healthcare challenges.",
    facilities: [
      "Biomedical Equipment Lab",
      "Anatomy and Physiology Lab",
      "Bioinformatics Lab",
      "Signal and Image Processing Lab",
      "Tissue Engineering Lab",
      "Microcontroller Lab",
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
            <div className="h-12 bg-gray-200 mb-6"></div>
            <div className="h-4 bg-gray-200 mb-4"></div>
            <div className="h-4 bg-gray-200 mb-4"></div>
            <div className="h-4 bg-gray-200"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" data-testid="page-about">
      {/* Hero - Academic Style */}
      <section className="relative bg-blue-900 border-b-4 border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide" data-testid="heading-about-title">
            About Biomedical Engineering
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200" data-testid="text-about-subtitle">
            Excellence in education, research, and innovation since {about.establishment}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white">
        <StatsSection />
      </section>

      {/* Overview & Facilities */}
      <section className="py-20 bg-white border-b-2 border-gray-300" data-testid="section-department-overview">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 pb-6 border-b-2 border-gray-400">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 uppercase tracking-wide" data-testid="heading-department-info">
              Department Overview
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <p className="text-base text-gray-800 mb-6 leading-relaxed text-justify" data-testid="text-department-info">
                {about.deptInfo}
              </p>
              
              <h3 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide border-b-2 border-blue-900 pb-2">
                Facilities
              </h3>
              <ul className="grid grid-cols-1 gap-y-2 text-gray-700 mb-8 list-disc pl-5">
                {about.facilities?.map((lab, i) => (
                  <li key={lab} className="font-medium">{lab}</li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border-2 border-gray-300 bg-gray-50">
                  <div className="text-2xl font-bold text-blue-900 mb-1">{about.stats.projects}+</div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Funded Projects</div>
                </div>
                <div className="p-4 border-2 border-gray-300 bg-gray-50">
                  <div className="text-2xl font-bold text-blue-900 mb-1">{about.stats.patents}</div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Patents</div>
                </div>
                <div className="p-4 border-2 border-gray-300 bg-gray-50">
                  <div className="text-2xl font-bold text-blue-900 mb-1">{about.stats.publications}</div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Publications</div>
                </div>
                <div className="p-4 border-2 border-gray-300 bg-gray-50">
                  <div className="text-2xl font-bold text-blue-900 mb-1">{about.stats.UGstudents}+</div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">UG Students</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80"
                alt="Biomedical lab"
                className="border-4 border-gray-400 shadow-lg w-full h-auto object-cover"
                data-testid="image-department-lab"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50 border-b-2 border-gray-300" data-testid="section-vision-mission">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="border-2 border-gray-400 bg-white p-8">
            <div className="flex items-start mb-6 pb-4 border-b-2 border-blue-900">
              <div className="bg-blue-900 p-3 mr-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">Vision</h3>
            </div>
            <p className="text-gray-800 leading-relaxed text-base text-justify">
              {about.vision}
            </p>
          </div>

          <div className="border-2 border-gray-400 bg-white p-8">
            <div className="flex items-start mb-6 pb-4 border-b-2 border-blue-900">
              <div className="bg-blue-900 p-3 mr-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">Mission</h3>
            </div>
            <p className="text-gray-800 leading-relaxed text-base text-justify">
              {about.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Program Outcomes & Objectives */}
      <section className="py-16 bg-white border-b-2 border-gray-300" data-testid="section-objectives">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="p-8 border-2 border-gray-400 bg-gray-50">
            <h4 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide pb-3 border-b-2 border-blue-900">
              Program Educational Objectives (PEOs)
            </h4>
            <ul className="list-disc ml-6 space-y-2">
              {about.programObjectives?.PEOs?.map((peo: string, i: number) => (
                <li className="text-gray-800 leading-relaxed" key={i}>{peo}</li>
              ))}
            </ul>
          </div>

          <div className="p-8 border-2 border-gray-400 bg-gray-50">
            <h4 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide pb-3 border-b-2 border-blue-900">
              Program Outcomes (POs)
            </h4>
            <ul className="list-disc ml-6 space-y-2">
              {about.programObjectives?.POs?.map((po: string, i: number) => (
                <li className="text-gray-800 leading-relaxed" key={i}>{po}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HoD Section */}
      <section className="py-20 bg-gray-100 border-b-2 border-gray-300" data-testid="section-hod">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-10 border-2 border-gray-400 bg-white grid md:grid-cols-3 gap-10 items-center">
            <div>
              <img
                src="/images/Prof.Bit.jpg"
                alt="Dr. Arindam Bit - HoD"
                className="border-4 border-blue-900 w-full max-w-xs mx-auto object-cover"
                data-testid="image-hod"
              />
            </div>
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide pb-3 border-b-2 border-blue-900">
                Message from the Head of Department
              </h3>
              <blockquote className="text-base text-gray-800 italic border-l-4 border-blue-900 pl-6 mb-6 leading-relaxed">
                "{about.hodMessage || 'Welcome to the Department. Our mission is to shape the future of healthcare technology through innovation, research, and interdisciplinary learning.'}"
              </blockquote>
              <div className="mt-6 pt-4 border-t-2 border-gray-300">
                <div className="font-bold text-gray-900 text-lg">{about.HoD.name || 'Prof. Bit'}</div>
                <div className="text-gray-700 font-semibold">Head of Department</div>
                <div className="text-gray-600">hod.bme@nitrr.ac.in</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Highlights */}
      <section className="py-20 bg-white" data-testid="section-highlights">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 pb-6 border-b-2 border-gray-400">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide">Department Highlights</h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our key strengths and achievements in biomedical engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightCards.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="p-6 text-center border-2 border-gray-400 bg-gray-50 hover:shadow-lg hover:border-blue-900 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
