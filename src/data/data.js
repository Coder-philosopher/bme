// Centralized data structure for NIT Raipur Biomedical Engineering Department
// Admin can edit this file to update content across the website

export const about = {
  deptInfo: "The Department of Biomedical Engineering at NIT Raipur stands as a beacon of innovation in healthcare technology. Established with the vision to bridge the gap between engineering excellence and medical advancement, we are committed to developing cutting-edge solutions for complex healthcare challenges.",
  vision: "To be a globally recognized center of excellence in biomedical engineering education and research, fostering innovation in healthcare technology and producing skilled professionals who will lead the transformation of medical care worldwide.",
  mission: "To nurture innovation and research excellence in biomedical engineering through comprehensive education, cutting-edge research, and industry collaboration, preparing students to address global healthcare challenges with ethical and sustainable solutions.",
  hodMessage: "Welcome to the Department of Biomedical Engineering at NIT Raipur. As we stand at the intersection of engineering innovation and medical advancement, our commitment remains unwavering in producing skilled professionals who will shape the future of healthcare technology.",
  stats: {
    faculties: 20,
    staff: 8,
    UGstudents: 240,
    PGstudents: 60,
    PhDstudents: 25,
    publications: 150
  }
};

export const academics = {
  UG: {
    programs: ["B.Tech in Biomedical Engineering"],
    description: "Our 4-year B.Tech program in Biomedical Engineering provides students with a strong foundation in engineering principles combined with medical sciences. The curriculum covers biomedical instrumentation, biomaterials, medical imaging, and healthcare technology management.",
    syllabus: "/syllabus/ug.pdf",
    subjects: [
      "Biomedical Instrumentation",
      "Biomaterials & Tissue Engineering", 
      "Medical Imaging Systems",
      "Physiological Control Systems",
      "Healthcare Technology Management"
    ],
    careers: [
      "Medical Device Engineer",
      "Clinical Engineer", 
      "Biomedical Research Scientist",
      "Healthcare Technology Consultant",
      "Medical Equipment Sales Engineer"
    ]
  },
  PG: {
    programs: ["M.Tech in Biomedical Engineering"],
    description: "Advanced postgraduate program focusing on specialized areas of biomedical engineering with research opportunities.",
    syllabus: "/syllabus/pg.pdf"
  },
  PhD: {
    programs: ["PhD in Biomedical Engineering"],
    description: "Research-intensive doctoral program for advanced biomedical engineering research.",
    syllabus: "/syllabus/phd.pdf"
  },
  labs: [
    {
      name: "Biomedical Instrumentation Lab",
      year: 2010,
      incharge: "Dr. Anita Sharma",
      contact: "anita.bme@nitrr.ac.in",
      subjects: "Biomedical Instrumentation, Medical Electronics, Signal Processing"
    },
    {
      name: "Biomaterials & Tissue Engineering Lab", 
      year: 2012,
      incharge: "Dr. Pradeep Kumar",
      contact: "pradeep.bme@nitrr.ac.in",
      subjects: "Biomaterials, Tissue Engineering, Regenerative Medicine"
    },
    {
      name: "Medical Imaging Lab",
      year: 2015,
      incharge: "Dr. Sushila Rani", 
      contact: "sushila.bme@nitrr.ac.in",
      subjects: "Medical Imaging, Image Processing, Diagnostic Systems"
    }
  ]
};

export const placements = {
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
  companies: ["Medtronic", "Siemens", "GE Healthcare", "Philips", "Johnson & Johnson", "Abbott"],
  description: "Our dedicated placement team works tirelessly to connect our talented students with leading healthcare and technology companies. We provide comprehensive career guidance, skill development programs, and industry exposure to ensure our graduates are well-prepared for successful careers."
};

export const research = {
  publications: [
    {
      title: "Advanced Biomedical Signal Processing Techniques for Healthcare Monitoring",
      authors: "Dr. A. Sharma, Dr. B. Kumar, Dr. C. Patel",
      journal: "IEEE Transactions on Biomedical Engineering",
      year: 2024,
      type: "Journal"
    },
    {
      title: "Novel Biomaterials for Cardiac Tissue Engineering Applications",
      authors: "Dr. P. Kumar, Dr. S. Rani",
      journal: "Biomaterials Science",
      year: 2024,
      type: "Journal"
    }
  ],
  conferences: [
    {
      title: "International Conference on Biomedical Engineering and Technology",
      location: "Mumbai, India",
      year: 2024,
      presenter: "Dr. Rajesh Kumar"
    },
    {
      title: "IEEE Engineering in Medicine and Biology Conference",
      location: "Berlin, Germany", 
      year: 2023,
      presenter: "Dr. Anita Sharma"
    }
  ],
  bookChapters: [
    {
      title: "Advances in Medical Device Design",
      authors: "Dr. R. Kumar",
      book: "Handbook of Biomedical Engineering",
      publisher: "Springer",
      year: 2024
    }
  ],
  mous: [
    {
      organization: "All India Institute of Medical Sciences (AIIMS)",
      purpose: "Collaborative research in medical technology",
      year: 2023
    },
    {
      organization: "Siemens Healthcare",
      purpose: "Industry collaboration and internships",
      year: 2022
    }
  ],
  projects: [
    {
      title: "Development of Smart Wearable Devices for Health Monitoring",
      pi: "Dr. Rajesh Kumar",
      copis: ["Dr. Anita Sharma", "Dr. Pradeep Kumar"],
      funding: "₹50,00,000",
      agency: "Department of Science and Technology (DST)",
      status: "Ongoing",
      startDate: "2023",
      endDate: "2026"
    },
    {
      title: "AI-based Medical Image Analysis for Early Disease Detection",
      pi: "Dr. Sushila Rani",
      copis: ["Dr. Amit Verma"],
      funding: "₹35,00,000",
      agency: "Indian Council of Medical Research (ICMR)",
      status: "Completed",
      startDate: "2021",
      endDate: "2024"
    }
  ],
  invitedTalks: [
    {
      title: "Future of Biomedical Engineering in Healthcare",
      speaker: "Dr. Rajesh Kumar",
      event: "National Conference on Healthcare Technology",
      date: "2024-07-15",
      status: "completed"
    },
    {
      title: "Machine Learning in Medical Diagnostics",
      speaker: "Dr. Anita Sharma", 
      event: "International Symposium on AI in Medicine",
      date: "2024-09-20",
      status: "upcoming"
    }
  ]
};

export const people = {
  faculty: [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Head of Department & Professor",
      email: "hod.bme@nitrr.ac.in",
      phone: "+91-771-2254201",
      specialization: "Biomedical Instrumentation, Medical Device Design",
      education: "PhD (IIT Delhi), M.Tech (IIT Bombay), B.Tech (NIT Raipur)",
      experience: "15 years"
    },
    {
      name: "Dr. Anita Sharma",
      designation: "Professor",
      email: "anita.bme@nitrr.ac.in", 
      phone: "+91-771-2254202",
      specialization: "Medical Signal Processing, Healthcare Informatics",
      education: "PhD (IIT Kharagpur), M.Tech (IIT Delhi), B.Tech (VNIT Nagpur)",
      experience: "12 years"
    },
    {
      name: "Dr. Pradeep Kumar",
      designation: "Associate Professor",
      email: "pradeep.bme@nitrr.ac.in",
      phone: "+91-771-2254203", 
      specialization: "Biomaterials, Tissue Engineering",
      education: "PhD (IISc Bangalore), M.Tech (IIT Madras), B.Tech (NIT Trichy)",
      experience: "10 years"
    },
    {
      name: "Dr. Sushila Rani",
      designation: "Assistant Professor",
      email: "sushila.bme@nitrr.ac.in",
      phone: "+91-771-2254204",
      specialization: "Medical Imaging, Computer Vision",
      education: "PhD (IIT Roorkee), M.Tech (NIT Kurukshetra), B.Tech (DTU Delhi)",
      experience: "8 years"
    },
    {
      name: "Dr. Amit Verma",
      designation: "Assistant Professor",
      email: "amit.bme@nitrr.ac.in",
      phone: "+91-771-2254205",
      specialization: "Rehabilitation Engineering, Assistive Technology",
      education: "PhD (IIT Kanpur), M.Tech (IIT Guwahati), B.Tech (MNNIT Allahabad)",
      experience: "6 years"
    }
  ],
  officers: [
    {
      name: "Mr. Suresh Patel",
      designation: "Senior Technical Officer",
      email: "suresh.bme@nitrr.ac.in",
      phone: "+91-771-2254206",
      responsibilities: "Laboratory Management, Equipment Maintenance"
    },
    {
      name: "Ms. Priya Singh",
      designation: "Administrative Officer", 
      email: "priya.admin@nitrr.ac.in",
      phone: "+91-771-2254207",
      responsibilities: "Academic Administration, Student Affairs"
    }
  ],
  staff: [
    {
      name: "Mr. Ramesh Gupta",
      designation: "Technical Assistant",
      email: "ramesh.bme@nitrr.ac.in",
      responsibilities: "Lab Support, Equipment Setup"
    },
    {
      name: "Ms. Sunita Devi",
      designation: "Office Assistant",
      email: "sunita.admin@nitrr.ac.in", 
      responsibilities: "Office Management, Documentation"
    }
  ],
  students: {
    UG: {
      total: 240,
      year1: 60,
      year2: 60, 
      year3: 60,
      year4: 60
    },
    PG: {
      total: 60,
      year1: 30,
      year2: 30
    },
    PhD: {
      total: 25,
      registered: 20,
      completed: 5
    }
  }
};

export const events = {
  upcoming: [
    {
      id: 1,
      title: "Annual Biomedical Engineering Symposium 2024",
      date: "2024-09-15",
      endDate: "2024-09-17",
      type: "Conference",
      description: "Three-day symposium featuring latest research in biomedical engineering, industry presentations, and student competitions.",
      venue: "NIT Raipur Auditorium",
      registrationRequired: true
    },
    {
      id: 2,
      title: "Guest Lecture: AI in Medical Diagnostics",
      date: "2024-09-05",
      type: "Guest Lecture",
      description: "Expert talk on artificial intelligence applications in medical diagnosis and treatment planning.",
      speaker: "Dr. John Smith, Johns Hopkins University",
      venue: "BME Conference Hall"
    },
    {
      id: 3,
      title: "Workshop: Medical Device Design",
      date: "2024-09-25",
      endDate: "2024-09-27",
      type: "Workshop", 
      description: "Hands-on workshop on medical device design principles and regulatory requirements.",
      venue: "BME Design Lab",
      registrationRequired: true
    }
  ],
  past: [
    {
      id: 4,
      title: "International Conference on Biomaterials",
      date: "2024-08-10",
      endDate: "2024-08-12",
      type: "Conference",
      description: "Conference focused on advances in biomaterials and tissue engineering.",
      venue: "NIT Raipur",
      participants: 150
    },
    {
      id: 5,
      title: "Student Induction Program 2024",
      date: "2024-07-20",
      endDate: "2024-07-25",
      type: "Induction",
      description: "Orientation program for new UG and PG students.",
      venue: "Various Venues",
      participants: 90
    },
    {
      id: 6,
      title: "Industrial Visit to Medtronic",
      date: "2024-06-15",
      type: "Departmental Events",
      description: "Educational visit to Medtronic manufacturing facility in Hyderabad.",
      participants: 40
    }
  ]
};

export const alumni = {
  featured: [
    {
      name: "Priya Sharma",
      batch: "2020",
      degree: "B.Tech",
      currentPosition: "Senior Biomedical Engineer",
      company: "Medtronic India",
      location: "Bangalore, India",
      email: "priya.sharma@example.com",
      achievements: "Led development of innovative cardiac monitoring device"
    },
    {
      name: "Rahul Verma", 
      batch: "2019",
      degree: "M.Tech",
      currentPosition: "Research Scientist",
      company: "Johns Hopkins University",
      location: "Baltimore, USA",
      email: "rahul.verma@example.com",
      achievements: "Published 15+ papers in top biomedical journals"
    },
    {
      name: "Sneha Patel",
      batch: "2021",
      degree: "B.Tech", 
      currentPosition: "Clinical Engineer",
      company: "Apollo Hospitals",
      location: "Chennai, India",
      email: "sneha.patel@example.com",
      achievements: "Improved patient care technology implementation"
    },
    {
      name: "Dr. Vikash Singh",
      batch: "2015",
      degree: "PhD",
      currentPosition: "Product Manager",
      company: "GE Healthcare",
      location: "Milwaukee, USA",
      email: "vikash.singh@example.com",
      achievements: "Led team developing next-gen MRI systems"
    }
  ],
  endowment: {
    fund: "BME Alumni Endowment Fund",
    description: "Supporting student scholarships, research activities, and infrastructure development in the department.",
    totalAmount: "₹25,00,000",
    beneficiaries: "UG students, PG students, PhD students",
    applications: "Merit-based scholarships for deserving students"
  },
  achievements: [
    {
      alumnus: "Dr. Arun Kumar (2010)",
      achievement: "Founded successful medtech startup valued at $10M",
      year: "2023"
    },
    {
      alumnus: "Kavita Jain (2018)",
      achievement: "Received Young Engineer Award from IEEE",
      year: "2024"
    }
  ],
  globalPresence: [
    { country: "India", count: 45, cities: ["Bangalore", "Mumbai", "Delhi", "Chennai", "Hyderabad"] },
    { country: "USA", count: 12, cities: ["California", "Massachusetts", "Texas", "Maryland"] },
    { country: "Germany", count: 8, cities: ["Munich", "Berlin", "Hamburg"] },
    { country: "Canada", count: 5, cities: ["Toronto", "Vancouver", "Montreal"] },
    { country: "UK", count: 4, cities: ["London", "Manchester", "Birmingham"] }
  ]
};

export const gallery = {
  images: [
    {
      id: 1,
      url: "/public/placeholder.svg",
      caption: "Students working on biomedical instrumentation projects",
      category: "Laboratory",
      year: "2024"
    },
    {
      id: 2,
      url: "/public/placeholder.svg", 
      caption: "Annual department conference with industry experts",
      category: "Events",
      year: "2024"
    },
    {
      id: 3,
      url: "/public/placeholder.svg",
      caption: "State-of-the-art medical imaging equipment",
      category: "Facilities",
      year: "2023"
    },
    {
      id: 4,
      url: "/public/placeholder.svg",
      caption: "Research presentation at international conference",
      category: "Research",
      year: "2024"
    },
    {
      id: 5,
      url: "/public/placeholder.svg",
      caption: "Student team winning national competition",
      category: "Achievements",
      year: "2024"
    },
    {
      id: 6,
      url: "/public/placeholder.svg",
      caption: "Biomaterials laboratory with tissue engineering setup",
      category: "Laboratory", 
      year: "2023"
    }
  ],
  categories: ["All", "Laboratory", "Events", "Facilities", "Research", "Achievements"]
};

export const achievements = {
  faculty: [
    {
      name: "Dr. Rajesh Kumar",
      award: "Best Researcher Award in Biomedical Engineering",
      year: 2024,
      organization: "IEEE Engineering in Medicine and Biology Society",
      description: "For outstanding contributions to biomedical instrumentation research"
    },
    {
      name: "Dr. Anita Sharma",
      award: "Excellence in Teaching Award",
      year: 2023,
      organization: "NIT Raipur",
      description: "Recognition for innovative teaching methods in biomedical signal processing"
    },
    {
      name: "Dr. Pradeep Kumar",
      award: "Young Scientist Award",
      year: 2024,
      organization: "Department of Biotechnology",
      description: "For breakthrough research in tissue engineering applications"
    }
  ],
  students: {
    UG: [
      {
        name: "Amit Singh",
        award: "Best Student Project Award",
        year: 2024,
        project: "Smart Health Monitoring Wearable Device",
        description: "Innovative wearable device for continuous health parameter monitoring"
      },
      {
        name: "Ritu Sharma",
        award: "IEEE Student Paper Competition Winner",
        year: 2024,
        project: "AI-based ECG Analysis System",
        description: "Machine learning approach for automated cardiac abnormality detection"
      }
    ],
    PG: [
      {
        name: "Deepak Patel",
        award: "Best M.Tech Thesis Award",
        year: 2024,
        project: "Novel Biomaterial for Bone Tissue Engineering",
        description: "Development of biocompatible material for orthopedic applications"
      }
    ],
    PhD: [
      {
        name: "Dr. Sunita Kumari",
        award: "Outstanding PhD Thesis Award",
        year: 2024,
        project: "Advanced Medical Imaging Techniques for Cancer Detection",
        description: "Novel imaging methods for early-stage cancer diagnosis"
      }
    ]
  },
  scholarships: [
    {
      name: "Merit Scholarship",
      amount: "₹50,000 per year",
      criteria: "Academic Excellence (CGPA > 8.5)",
      beneficiaries: "10 UG students, 5 PG students",
      sponsor: "Department Alumni Fund"
    },
    {
      name: "Research Excellence Scholarship", 
      amount: "₹75,000 per year",
      criteria: "Outstanding research contribution",
      beneficiaries: "5 PhD students",
      sponsor: "Industry Partners"
    },
    {
      name: "Need-based Financial Aid",
      amount: "₹30,000 per year",
      criteria: "Financial need with good academic standing",
      beneficiaries: "15 students (all levels)",
      sponsor: "Institute Welfare Fund"
    }
  ]
};

export const contact = {
  department: {
    name: "Department of Biomedical Engineering",
    address: "National Institute of Technology Raipur\nG.E. Road, Raipur - 492010\nChhattisgarh, India",
    email: "bme@nitrr.ac.in",
    phone: "+91-771-2254200",
    fax: "+91-771-2254993"
  },
  hod: {
    name: "Dr. Rajesh Kumar",
    designation: "Head of Department",
    email: "hod.bme@nitrr.ac.in",
    phone: "+91-771-2254201",
    office: "Room 301, BME Block"
  },
  office: {
    location: "BME Block, Ground Floor",
    hours: "Monday to Friday: 9:00 AM - 5:00 PM",
    saturday: "9:00 AM - 1:00 PM",
    sunday: "Closed"
  }
};
