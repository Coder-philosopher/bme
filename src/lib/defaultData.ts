    const defaultData = [
      {
        section: "about",
        data: {
          deptInfo: "The Department of Biomedical Engineering at NIT Raipur stands as a beacon of innovation in healthcare technology. Established in 2008 with the vision to bridge the gap between engineering excellence and medical advancement, we are committed to developing cutting-edge solutions for complex healthcare challenges. Our department has grown to become one of India's premier institutions for biomedical engineering education, research, and innovation.",
          vision: "To be a globally recognized center of excellence in biomedical engineering education and research, fostering innovation in healthcare technology and producing skilled professionals who will lead the transformation of medical care worldwide through ethical, sustainable, and accessible solutions.",
          mission: "To nurture innovation and research excellence in biomedical engineering through comprehensive education, cutting-edge research, and industry collaboration, preparing students to address global healthcare challenges with ethical and sustainable solutions while maintaining the highest standards of academic integrity and professional ethics.",
          hodMessage: "Welcome to the Department of Biomedical Engineering at NIT Raipur. As we stand at the intersection of engineering innovation and medical advancement, our commitment remains unwavering in producing skilled professionals who will shape the future of healthcare technology. We take pride in our state-of-the-art facilities, distinguished faculty, and exceptional students who continue to push the boundaries of what's possible in biomedical engineering.",
          establishment: "2008",
          accreditation: "NBA Accredited, NAAC A++ Grade",
          stats: {
            faculties: 30,
            staff: 12,
            UGstudents: 320,
            PGstudents: 85,
            PhDstudents: 45,
            publications: 285,
            patents: 18,
            projects: 42,
            collaborations: 15
          },
          facilities: [
            "Advanced Biomedical Instrumentation Lab",
            "Biomaterials & Tissue Engineering Lab", 
            "Medical Imaging & Signal Processing Lab",
            "Biofluid Mechanics Lab",
            "Rehabilitation Engineering Lab",
            "Biosensors & Microfluidics Lab",
            "Clinical Engineering Lab",
            "Central Research Facility"
          ]
        }
      },
      {
        section: "academics",
        data: {
          UG: {
            programs: ["B.Tech in Biomedical Engineering (4 Years)", "B.Tech in Biomedical Engineering with AI Specialization (4 Years)"],
            description: "Our comprehensive 4-year B.Tech programs in Biomedical Engineering provide students with a strong foundation in engineering principles combined with medical sciences. The curriculum includes advanced courses in biomedical instrumentation, biomaterials, medical imaging, and clinical engineering. Students gain hands-on experience through extensive laboratory work, industry internships, and capstone projects.",
            syllabus: "/syllabus/ug.pdf",
            intake: 80,
            duration: "4 Years (8 Semesters)",
            eligibility: "JEE Main qualified with Physics, Chemistry, Mathematics",
            careerProspects: ["Medical Device Industry", "Healthcare Technology", "Clinical Engineering", "Research & Development", "Higher Studies"]
          },
          PG: {
            programs: ["M.Tech in Biomedical Engineering", "M.Tech in Medical Instrumentation", "M.Tech in Biomaterials Engineering"],
            description: "Advanced postgraduate programs focusing on specialized areas of biomedical engineering including medical device design, advanced biomaterials, and clinical applications. Students engage in cutting-edge research projects and collaborate with industry partners.",
            syllabus: "/syllabus/pg.pdf",
            intake: 30,
            duration: "2 Years (4 Semesters)",
            eligibility: "GATE qualified in relevant streams",
            specializations: ["Medical Device Design", "Biomaterials & Tissue Engineering", "Medical Signal Processing", "Clinical Engineering"]
          },
          PhD: {
            programs: ["PhD in Biomedical Engineering"],
            description: "Research-intensive doctoral program for advanced biomedical engineering research in areas such as medical devices, biomaterials, medical imaging, and computational biology. Students work closely with faculty mentors on innovative research projects.",
            syllabus: "/syllabus/phd.pdf",
            intake: 15,
            duration: "3-6 Years",
            eligibility: "M.Tech/M.E./M.S. in relevant field or equivalent",
            researchAreas: ["Medical Device Innovation", "Tissue Engineering", "Biomedical Signal Processing", "Computational Biology", "Medical Imaging"]
          },
          labs: [
            {
              name: "Advanced Biomedical Instrumentation Lab",
              year: 2010,
              incharge: "Dr. Anita Sharma",
              contact: "anita.bme@nitrr.ac.in",
              subjects: "Biomedical Instrumentation, Medical Electronics, Signal Processing",
              equipment: ["ECG Systems", "EEG Machine", "Ultrasound Scanner", "Digital Oscilloscopes", "Function Generators"],
              area: "120 sq.m"
            },
            {
              name: "Biomaterials & Tissue Engineering Lab",
              year: 2012,
              incharge: "Dr. Pradeep Kumar",
              contact: "pradeep.bme@nitrr.ac.in",
              subjects: "Biomaterials, Tissue Engineering, Regenerative Medicine",
              equipment: ["Cell Culture Incubators", "Microscopy Systems", "Material Testing Equipment", "3D Bioprinter", "Sterilization Units"],
              area: "150 sq.m"
            },
            {
              name: "Medical Imaging & Signal Processing Lab",
              year: 2015,
              incharge: "Dr. Sushila Rani",
              contact: "sushila.bme@nitrr.ac.in",
              subjects: "Medical Imaging, Image Processing, Diagnostic Systems",
              equipment: ["MRI Simulator", "CT Scan Simulator", "High-end Workstations", "Image Processing Software", "AI Computing Cluster"],
              area: "100 sq.m"
            },
            {
              name: "Biofluid Mechanics Lab",
              year: 2018,
              incharge: "Dr. Rakesh Patel",
              contact: "rakesh.bme@nitrr.ac.in",
              subjects: "Biomechanics, Fluid Dynamics, Cardiovascular Engineering",
              equipment: ["Flow Measurement Systems", "Pressure Transducers", "PIV System", "Wind Tunnel", "CFD Workstations"],
              area: "80 sq.m"
            },
            {
              name: "Rehabilitation Engineering Lab",
              year: 2020,
              incharge: "Dr. Meera Singh",
              contact: "meera.bme@nitrr.ac.in",
              subjects: "Prosthetics, Orthotics, Assistive Technology",
              equipment: ["3D Printers", "CAD Workstations", "Motion Capture System", "Force Plates", "EMG Systems"],
              area: "90 sq.m"
            },
            {
              name: "Biosensors & Microfluidics Lab",
              year: 2021,
              incharge: "Dr. Amit Verma",
              contact: "amit.bme@nitrr.ac.in",
              subjects: "Biosensors, Lab-on-Chip, Point-of-Care Diagnostics",
              equipment: ["Microfluidic Fabrication Setup", "Spectrophotometers", "Electrochemical Analyzers", "Clean Room Facility"],
              area: "110 sq.m"
            }
          ],
          curriculum: {
            core: ["Mathematics", "Physics", "Chemistry", "Engineering Mechanics", "Thermodynamics", "Circuit Theory"],
            biomedical: ["Anatomy & Physiology", "Biomedical Instrumentation", "Biomaterials", "Medical Imaging", "Biostatistics"],
            specialization: ["Artificial Intelligence in Healthcare", "Medical Device Design", "Clinical Engineering", "Regulatory Affairs"]
          }
        }
      },
      {
        section: "placements",
        data: {
          coordinator: {
            name: "Dr. Amit Verma",
            email: "placement.bme@nitrr.ac.in",
            phone: "+91-771-2254200"
          },
          stats: [
            { year: 2024, UG: 52, PG: 18, PhD: 8 },
            { year: 2023, UG: 48, PG: 15, PhD: 6 },
            { year: 2022, UG: 45, PG: 12, PhD: 5 },
            { year: 2021, UG: 42, PG: 10, PhD: 4 }
          ],
          companies: ["Medtronic", "Siemens", "GE Healthcare", "Philips", "Johnson & Johnson", "Abbott"]
        }
      },
      {
        section: "research",
        data: {
          publications: [
            {
              title: "Advanced Biomedical Signal Processing Techniques",
              authors: "Dr. A. Sharma, Dr. B. Kumar",
              journal: "IEEE Transactions on Biomedical Engineering",
              year: 2024
            }
          ],
          conferences: [
            {
              title: "International Conference on Biomedical Engineering",
              location: "Mumbai, India",
              year: 2024
            }
          ],
          projects: [
            {
              title: "Development of Smart Medical Devices",
              pi: "Dr. Rajesh Kumar",
              funding: "₹50,00,000",
              agency: "DST",
              status: "Ongoing"
            }
          ]
        }
      },
      {
        section: "events",
        data: {
          upcoming: [
            {
              title: "Biomedical Engineering Symposium",
              date: "2024-09-15",
              type: "Conference",
              description: "Annual symposium on latest trends in biomedical engineering"
            }
          ],
          past: [
            {
              title: "Guest Lecture on Medical Imaging",
              date: "2024-08-10",
              type: "Guest Lecture",
              speaker: "Dr. John Smith"
            }
          ]
        }
      },
      {
        section: "people",
        data: {
          faculty: [
            {
              name: "Dr. Rajesh Kumar",
              designation: "Head of Department",
              email: "hod.bme@nitrr.ac.in",
              specialization: "Biomedical Instrumentation"
            },
            {
              name: "Dr. Anita Sharma",
              designation: "Professor",
              email: "anita.bme@nitrr.ac.in",
              specialization: "Medical Signal Processing"
            }
          ],
          staff: [
            {
              name: "Mr. Suresh Patel",
              designation: "Technical Assistant",
              email: "suresh.bme@nitrr.ac.in"
            }
          ]
        }
      },
      {
        section: "alumni",
        data: {
          featured: [
            {
              name: "Priya Sharma",
              batch: "2020",
              currentPosition: "Senior Engineer at Medtronic",
              location: "Bangalore, India"
            },
            {
              name: "Rahul Verma",
              batch: "2019",
              currentPosition: "Research Scientist at Johns Hopkins",
              location: "Baltimore, USA"
            }
          ],
          endowment: {
            fund: "BME Alumni Endowment Fund",
            description: "Supporting student scholarships and research activities"
          }
        }
      },
      {
        section: "gallery",
        data: {
          images: [
            {
              url: "/public/placeholder.svg",
              caption: "Students working in the biomedical lab",
              category: "Laboratory"
            },
            {
              url: "/public/placeholder.svg",
              caption: "Annual department conference",
              category: "Events"
            }
          ]
        }
      },
      {
        section: "achievements",
        data: {
          faculty: [
            {
              name: "Dr. Rajesh Kumar",
              award: "Best Researcher Award",
              year: 2024,
              organization: "IEEE"
            }
          ],
          students: [
            {
              name: "Amit Singh",
              award: "Best Student Project",
              year: 2024,
              level: "UG"
            }
          ],
          scholarships: [
            {
              name: "Merit Scholarship",
              amount: "₹50,000",
              criteria: "Academic Excellence"
            }
          ]
        }
      },
      {
        section: "contact",
        data: {
          department: {
            name: "Department of Biomedical Engineering",
            address: "National Institute of Technology Raipur, G.E. Road, Raipur - 492010, Chhattisgarh, India",
            phone: "+91-771-2254200",
            fax: "+91-771-2254993",
            email: "bme@nitrr.ac.in",
            website: "https://www.nitrr.ac.in/bme"
          },
          hod: {
            name: "Dr. Rajesh Kumar",
            phone: "+91-771-2254201",
            email: "hod.bme@nitrr.ac.in",
            office: "Room 301, BME Department"
          },
          admissions: {
            ugAdmissions: "admissions.ug@nitrr.ac.in",
            pgAdmissions: "admissions.pg@nitrr.ac.in",
            phdAdmissions: "phd.admissions@nitrr.ac.in",
            phone: "+91-771-2254205"
          },
          placements: {
            coordinator: "Dr. Amit Verma",
            email: "placement.bme@nitrr.ac.in",
            phone: "+91-771-2254200"
          },
          location: {
            latitude: 21.2514,
            longitude: 81.6296,
            directions: "The campus is well-connected by road, rail, and air. Nearest airport is Raipur Airport (15 km)."
          },
          workingHours: {
            weekdays: "9:00 AM - 5:30 PM",
            saturday: "9:00 AM - 1:00 PM",
            sunday: "Closed"
          }
        }
      },
      {
        section: "facilities",
        data: {
          infrastructure: {
            totalArea: "2,500 sq.m",
            laboratories: 8,
            classrooms: 6,
            seminarHalls: 2,
            conferenceRoom: 1,
            facultyOffices: 12,
            computerLab: 1
          },
          library: {
            books: 2500,
            journals: 45,
            digitalResources: "IEEE Xplore, ScienceDirect, PubMed",
            readingSeats: 50,
            workingHours: "24x7"
          },
          computingFacilities: {
            workstations: 60,
            servers: 4,
            software: ["MATLAB", "LabVIEW", "ANSYS", "SolidWorks", "ImageJ", "ITK-SNAP"],
            internetSpeed: "1 Gbps",
            wifi: "Campus-wide WiFi available"
          },
          safetyFeatures: [
            "Fire safety systems in all labs",
            "Emergency exits and evacuation plans",
            "First aid kits and safety equipment",
            "24x7 security surveillance",
            "Biometric access control",
            "Safety training for all lab users"
          ]
        }
      }
    ];
export default defaultData