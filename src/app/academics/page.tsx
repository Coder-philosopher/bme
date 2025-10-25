"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UGProgram = {
  title: "Bachelor of Technology in Biomedical Engineering",
  duration: "4 Years (8 Semesters)",
  programs: ["B.Tech in Biomedical Engineering"],
  syllabus: "/syllabus/ug.pdf",
  description:
    "A comprehensive undergraduate program combining engineering principles with medical sciences, emphasizing biomedical instrumentation, biomaterials, medical imaging, and clinical engineering. Includes lab work, internships, and final-year projects.",
  eligibility: "JEE Main qualified with Physics, Chemistry, and Mathematics.",
  careerProspects: [
    "Medical Device Industry",
    "Healthcare Technology",
    "Clinical Engineering",
    "Research & Development",
    "Higher Studies",
  ],
};

const PGProgram = {
  title: "Master of Technology in Biomedical Engineering",
  duration: "2 Years (4 Semesters)",
  programs: ["M.Tech in Biomedical Engineering"],
  syllabus: "/syllabus/pg.pdf",
  description:
    "An advanced postgraduate program focused on specialized areas such as medical device design, biomaterials, and clinical applications. Students undertake research and collaborate with industry partners.",
  eligibility: "GATE qualified in relevant streams.",
  specializations: [
    "Medical Device Design",
    "Biomaterials & Tissue Engineering",
    "Medical Signal Processing",
    "Clinical Engineering",
  ],
};

const PhDProgram = {
  title: "Doctor of Philosophy (PhD) in Biomedical Engineering",
  description:
    "Research-based doctoral program in Biomedical Engineering with focus areas including medical imaging, signal processing, biomechanical modeling, and clinical applications.",
  eligibility: "Masters in related engineering or science stream.",
};

const Laboratories = [
  {
    id: 2,
    name: "Microviscometer Anton Paar Lovis 2000ME",
    specs: {
      "Max Power": "80 W",
      Speed: "1000 mm/s",
      Repetitions: "20",
    },
  },
  {
    id: 3,
    name: "3D Printer",
    specs: {
      dimensions: "342x505x588 mm",
      build_volume: "215x215x200 mm",
      build_speed: "<24 mm³/s",
      travel_speed: "30–300 mm/s",
      sound: "50 dBA",
      filament_diameter: "2.85 mm",
      nozzle_temperature: "180–280 °C",
      bed_temperature: "20–120 °C",
      resolution: "6.9, 6.9, 2.5 microns (XYZ)",
      materials: "PLA, PETG",
    },
  },
  {
    id: 4,
    name: "Spin Coater Apex India SpinNXG-P1A",
    specs: {
      speed_range: "100–10,000 RPM",
      acceleration: "40–5,000 RPM",
      duration: "1–9,999 seconds per step",
      error_rate: "Less than 1%",
    },
  },
  {
    id: 5,
    name: "Oxygen Plasma Harrick Plasma PDC/32G/2",
    specs: {
      chamber_size: "3\" Dia. x 6.5\" L",
      rf_power: "18 W max",
      dimensions: "9\" H x 10\" W x 8\" D",
      weight: "13 Lbs",
    },
  },
  {
    id: 7,
    name: "Hot Air Oven - Pooja Scientific Instruments",
    specs: {
      serial_no: "12017",
      max_temp: "180 °C",
      air_circulation: "Forced Air",
      chambers: "One",
      power: "1.2 HP",
    },
  },
  {
    id: 8,
    name: "Autoclave - Pooja Scientific Instruments",
    specs: {
      inner_dimensions: "250x450 mm",
      capacity: "22 L",
      working_load: "2.0 KW",
      pressure: "1.2 kgf/cm² (15 psi) at 121°C",
    },
  },
  {
    id: 9,
    name: "16-channel EEG setup - AD Instruments 16/35",
    specs: {
      inputs: "16 (12 single-ended, 4 configurable)",
      amplification_range: "±2 mV to ±10 V",
      max_input_voltage: "±15 V",
      frequency_response: "25 kHz",
      output_range: "±200 mV to ±10 V",
    },
  },
  {
    id: 10,
    name: "Spectrophotometer / Plate Reader",
    specs: {
      bandwidth: "<2.5 nm",
      wavelength_range: "200–1,000 nm",
      light_source: "Xenon flash lamp",
      accuracy: "±1.0% + 0.003 Abs",
    },
  },
  {
    id: 11,
    name: "Cell Imaging System",
    specs: {
      magnification: "1.25X–100X",
      resolution: "1920x1080 pixels",
      light_source: "Lumen Dynamics X-Cite 120Q",
      camera: "Zeiss AxioCam ERc5s",
    },
  },
  {
    id: 12,
    name: "Microfluidic Workstation",
    specs: {
      flow_controller: "Fluigent Flow EZ",
      flow_range: "0±2 mL/min",
    },
  },
  {
    id: 13,
    name: "Electrospinning Unit",
    specs: {
      output_voltage: "0–50 KV ±0.05%",
      voltage_adjustment: "0.1 KV",
      output_current: "0–400 μA",
    },
  },
  {
    id: 14,
    name: "Bio Safety Cabinet (Laminar Air Flow 1300 Series)",
    specs: { air_flow: "1415 m³/h" },
  },
  {
    id: 15,
    name: "Ultrasonic Bath",
    specs: {
      power: "120 W",
      heat_power: "50 W",
    },
  },
];

const Academics = () => {
  const [activeTab, setActiveTab] = useState("ug");

  return (
    <div className="min-h-screen pt-28 bg-white" data-testid="page-academics">
      {/* Hero Section - Academic */}
      <section
        className="pb-12 bg-blue-900 border-b-4 border-gray-800"
        data-testid="section-academics-hero"
      >
        <div className="max-w-7xl mx-auto px-6 text-center py-20">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide"
            data-testid="heading-academics-title"
          >
            Academic Programs
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200"
            data-testid="text-academics-subtitle"
          >
            Comprehensive programs to shape future leaders in biomedical engineering
          </p>
        </div>
      </section>

      {/* Tabs for Programs */}
      <section
      className="py-24 bg-gradient-to-b from-white to-gray-50 border-b border-gray-300"
      data-testid="section-programs"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-wide mb-4"
            data-testid="heading-programs"
          >
            Our Programs
          </h2>
          <div className="w-28 h-1 bg-blue-900 mx-auto rounded-full mb-6"></div>
          <p
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            data-testid="text-programs-subtitle"
          >
            Explore our comprehensive Undergraduate, Postgraduate, and Doctoral programs
            designed to shape the innovators of tomorrow.
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
          data-testid="tabs-programs"
        >
          <TabsList
            className="grid w-full grid-cols-3 gap-2 bg-gray-100 border border-gray-300  mb-10"
            data-testid="tabs-list"
          >
            {[
              { value: "ug", label: "UG Programs" },
              { value: "pg", label: "PG Programs" },
              { value: "phd", label: "PhD Programs" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="text-base font-semibold uppercase tracking-wide  rounded-md transition-all duration-200
                  data-[state=active]:bg-blue-900 data-[state=active]:text-white
                  hover:bg-blue-800/10 border border-transparent data-[state=active]:border-blue-900"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* UG PROGRAMS */}
          <TabsContent value="ug" data-testid="tab-content-ug">
            <div className="p-8 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200">
              <h3
                className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 uppercase tracking-wide border-b-4 border-blue-900 pb-3"
                data-testid="heading-ug-program"
              >
                {UGProgram.title}
              </h3>

              <div className="space-y-4 mb-6 text-gray-800 font-medium">
                <p>
                  <span className="text-blue-900 font-semibold">Duration:</span>{" "}
                  {UGProgram.duration}
                </p>
                <p className="leading-relaxed text-justify">{UGProgram.description}</p>
                <p>
                  <span className="text-blue-900 font-semibold">Eligibility:</span>{" "}
                  {UGProgram.eligibility}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="font-bold text-blue-900 mb-4 uppercase tracking-wide">
                    Career Prospects
                  </h4>
                  <ol
                    className="list-decimal ml-6 space-y-2 text-gray-800 leading-relaxed"
                    data-testid="list-ug-careers"
                  >
                    {UGProgram.careerProspects.map((career, index) => (
                      <li key={index}>{career}</li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-4 uppercase tracking-wide">
                    Programs Offered
                  </h4>
                  <ol className="list-decimal ml-6 space-y-2 text-gray-800 leading-relaxed">
                    {UGProgram.programs.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-300 text-center">
                <Button
                  className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md shadow-sm transition-all uppercase"
                  asChild
                  data-testid="button-ug-syllabus"
                >
                  <a href={UGProgram.syllabus} target="_blank" rel="noopener noreferrer">
                    Download Syllabus
                  </a>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* PG PROGRAMS */}
          <TabsContent value="pg" data-testid="tab-content-pg">
            <div className="p-8 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200">
              <h3
                className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 uppercase tracking-wide border-b-4 border-blue-900 pb-3"
                data-testid="heading-pg-program"
              >
                {PGProgram.title}
              </h3>

              <div className="space-y-4 mb-6 text-gray-800 font-medium">
                <p>
                  <span className="text-blue-900 font-semibold">Duration:</span>{" "}
                  {PGProgram.duration}
                </p>
                <p className="leading-relaxed text-justify">{PGProgram.description}</p>
                <p>
                  <span className="text-blue-900 font-semibold">Eligibility:</span>{" "}
                  {PGProgram.eligibility}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-blue-900 mb-4 uppercase tracking-wide">
                  Specializations
                </h4>
                <ol
                  className="list-decimal ml-6 space-y-2 text-gray-800 leading-relaxed"
                  data-testid="list-pg-specializations"
                >
                  {PGProgram.specializations.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ol>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-300 text-center">
                <Button
                  className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md shadow-sm transition-all uppercase"
                  asChild
                  data-testid="button-pg-syllabus"
                >
                  <a href={PGProgram.syllabus} target="_blank" rel="noopener noreferrer">
                    Download Syllabus
                  </a>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* PHD PROGRAMS */}
          <TabsContent value="phd" data-testid="tab-content-phd">
            <div className="p-8 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200">
              <h3
                className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 uppercase tracking-wide border-b-4 border-blue-900 pb-3"
                data-testid="heading-phd-program"
              >
                {PhDProgram.title || "Doctoral Program (PhD)"}
              </h3>

              <div className="text-gray-800 space-y-4 font-medium">
                <p className="leading-relaxed text-justify">{PhDProgram.description}</p>
                <p>
                  <span className="text-blue-900 font-semibold">Eligibility:</span>{" "}
                  {PhDProgram.eligibility}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-300 text-center">
                <Button
                  className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md shadow-sm transition-all uppercase"
                  data-testid="button-phd-contact"
                >
                  Contact Department
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      </section>


      {/* Laboratories & Facilities */}
      <section
        className="py-20 bg-gray-50"
        data-testid="section-laboratories"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 pb-6 border-b-2 border-gray-400">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 uppercase tracking-wide"
              data-testid="heading-labs"
            >
              Laboratories & Equipment
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
            <p
              className="text-lg text-gray-700 max-w-xl mx-auto"
              data-testid="text-labs-subtitle"
            >
              Hands-on learning with state-of-the-art biomedical engineering facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {Laboratories.map((eq) => (
              <div
                key={eq.id}
                className="p-6 border-2 border-gray-400 bg-white hover:shadow-lg hover:border-blue-900 transition-all duration-300"
              >
                <div className="text-lg font-bold text-blue-900 mb-3 uppercase tracking-wide pb-2 border-b-2 border-gray-300">
                  {eq.name}
                </div>
                <div className="text-sm text-gray-800">
                  {eq.specs ? (
                    Object.entries(eq.specs).map(([key, value]) => (
                      <div key={key} className="mb-1">
                        <span className="font-semibold text-gray-900">
                          {key.replace(/_/g, " ")}:
                        </span>{" "}
                        {value}
                      </div>
                    ))
                  ) : (
                    <div className="italic text-gray-600">General Lab Equipment</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
