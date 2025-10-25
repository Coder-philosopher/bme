"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, MapPin, Users, Clock, ChevronDown, Search } from "lucide-react";

// Hardcoded events data for demo purposes
const eventsData = [
  {
    SlNo: 1,
    Title: "High-End Workshop (Karyashala) on Mechanics and Materials for Biomedical Applications",
    Date: "30th Jan - 5th Feb 2024",
    Coordinators: ["Dr. Nishant Kumar Singh", "Dr. M. Marieswaran"],
    Type: "Workshop",
  },
  {
    SlNo: 2,
    Title:
      "3rd International Conference on Biomedical Engineering Science and Technology: Roadway from Laboratory to Market (ICBEST 2024)",
    Date: "10-11 April 2025",
    Coordinators: ["Dr. Neelam Shobha Nirala", "Dr. Saurabh Gupta", "Dr. Nishant Kumar Singh"],
    Type: "Conference",
  },
  {
    SlNo: 3,
    Title: "IICC expert lecture: 'Smart Microelectrode Patch for Accelerated Wound Healing' by Dr. Debasish Maji",
    Date: "12-September-2024",
    Coordinators: ["Dr. Mainak Basu", "Dr. Arindam Bit"],
    Type: "Guest Lecture",
  },
  {
    SlNo: 4,
    Title:
      "IICC expert lecture: 'Modern CT scanners - a long journey from fundamentals to features' by Mr. Bodhisattva Sensarma",
    Date: "01-October-2024",
    Coordinators: ["Dr. Mainak Basu", "Dr. Arindam Bit"],
    Type: "Guest Lecture",
  },
  {
    SlNo: 5,
    Title:
      "IICC expert lecture: 'Gamified Rehabilitation: Transformative Approach to boost patient engagement and accelerate recovery' by Ms. Rupsa Mukherjee",
    Date: "12-November-2024",
    Coordinators: ["Dr. Mainak Basu", "Dr. Arindam Bit"],
    Type: "Guest Lecture",
  },
  {
    SlNo: 6,
    Title:
      "IICC expert lecture: 'Challenges with commercialization of Microfluidic Devices' by Mr. Muthuraman Swaminathan",
    Date: "04-February-2025",
    Coordinators: ["Dr. Mainak Basu", "Dr. Arindam Bit"],
    Type: "Guest Lecture",
  },
  {
    SlNo: 7,
    Title: "IICC expert lecture: 'Revolutionizing Healthcare: The AI Advantage' by Mr. Ajit Deshpande",
    Date: "19-September-2025",
    Coordinators: ["Dr. Sudip Paul", "Dr. Arindam Bit"],
    Type: "Guest Lecture",
  },
  {
    SlNo: 8,
    Title: "Short Term Training Program (STTP) on Emerging Trends and Challenges in Biomechanics and Biomaterials",
    Date: "25th - 30th July 2023",
    Coordinators: ["Dr. Nishant Kumar Singh", "Dr. M. Marieswaran"],
    Type: "Training Program",
  },
  {
    SlNo: 9,
    Title:
      "2nd International Conference on Biomedical Engineering Science and Technology: Roadway from Laboratory to Market (ICBEST 2023)",
    Date: "10th - 11th Feb 2023",
    Coordinators: ["Dr. Saurabh Gupta", "Dr. Nishant Kumar Singh", "Dr. M. Marieswaran"],
    Type: "Conference",
  },
  {
    SlNo: 10,
    Title:
      "1st International Conference on Biomedical Engineering Science and Technology: Roadway from Laboratory to Market (ICBEST 2018)",
    Date: "20th - 21st Dec 2018",
    Coordinators: ["Dr. Neelamshobha Nirala", "Dr. Arindam Bit", "Dr. Saurabh Gupta"],
    Type: "Conference",
  },
];

// Category list
const categories = [
  "All",
  "Conference",
  "Workshop",
  "Training Program",
  "Guest Lecture",
  "Talks",
  "Departmental Events",
  "Induction",
];

// Helper: Extract numeric year from mixed date string
const extractYear = (dateStr: string) => {
  const matches = dateStr.match(/\b(20\d{2})\b/);
  return matches ? matches[1] : "Other";
};

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [collapsedYears, setCollapsedYears] = useState<Record<string, boolean>>({});

  // Map events to include a year field
  const events = eventsData.map((ev) => ({
    ...ev,
    year: extractYear(ev.Date),
    type: ev.Type || (ev.Title.includes("Conference") ? "Conference" : ev.Title.includes("Workshop") ? "Workshop" : "Other"),
  }));

  // Unique years, latest first
  const years = Array.from(new Set(events.map((e) => e.year))).sort((a, b) => Number(b) - Number(a));

  // Category and search filtering
  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "All" || (event.type?.toLowerCase() === selectedCategory.toLowerCase());
    const matchesSearch =
      !searchQuery ||
      event.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (event.Coordinators || []).some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Group by year
  const eventsByYear = years.map((year) => ({
    year,
    items: filteredEvents.filter((e) => e.year === year),
  }));

  // Modal for event details
  const EventModal = ({ event, index }: { event: any; index: number }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm" className="mt-4 bg-blue-900 hover:bg-blue-800 text-white border-0 font-bold uppercase tracking-wide text-xs">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl border-4 border-gray-400">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b-2 border-blue-900 pb-3">
            {event.Title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div className="flex items-center text-gray-800 text-sm pb-3 border-b border-gray-300">
            <Calendar className="h-5 w-5 mr-2 text-blue-900" />
            <span className="font-semibold">{event.Date}</span>
          </div>
          <div className="pb-3 border-b border-gray-300">
            <div className="flex items-center text-gray-800 text-sm mb-2">
              <Users className="h-5 w-5 mr-2 text-blue-900" />
              <span className="font-bold uppercase tracking-wide">Coordinators:</span>
            </div>
            {event.Coordinators && (
              <div className="flex flex-wrap gap-2 ml-7">
                {event.Coordinators.map((coor: string, i: number) => (
                  <span key={i} className="border border-gray-400 bg-gray-50 text-gray-900 px-3 py-1 text-xs font-semibold">
                    {coor}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center text-gray-800 text-sm">
            <span className="px-3 py-1 bg-blue-900 text-white font-bold text-xs uppercase tracking-wide">
              {event.type}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen pt-28 bg-white">
      {/* Hero Section - Academic */}
      <section className="pb-12 bg-blue-900 border-b-4 border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide">
            Events & Activities
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Conferences, Workshops, Academic Sessions, and More
          </p>
        </div>
      </section>

      {/* Category & Search Filters */}
      <section className="py-6 border-b-2 border-gray-300 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === selectedCategory ? "default" : "outline"}
                className={`text-sm font-bold uppercase tracking-wide ${
                  cat === selectedCategory 
                    ? "bg-blue-900 text-white border-2 border-blue-900 hover:bg-blue-800" 
                    : "border-2 border-gray-400 text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCategory(cat)}>
                {cat}
              </Button>
            ))}
          </div>
          <div className="flex items-center ml-auto md:ml-8 w-full md:w-64">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-3 py-2 border-2 border-gray-400 w-full bg-white text-gray-900 font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events by Year */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {eventsByYear.length === 0 || eventsByYear.every((group) => group.items.length === 0) ? (
            <div className="text-center py-16 border-2 border-gray-300 bg-gray-50">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">No Events Found</h3>
              <p className="text-gray-700">Try adjusting category or search terms.</p>
            </div>
          ) : (
            <div>
              {eventsByYear.map(
                (group, gidx) =>
                  group.items.length > 0 && (
                    <div key={group.year} className="mb-12">
                      {/* Year Heading with Collapse Toggle */}
                      <div
                        className="flex items-center cursor-pointer mb-6 pb-4 border-b-2 border-gray-400 group select-none"
                        onClick={() =>
                          setCollapsedYears((prev) => ({
                            ...prev,
                            [group.year]: !prev[group.year],
                          }))
                        }>
                        <ChevronDown
                          className={`w-6 h-6 mr-2 text-blue-900 transition-transform duration-200 ${
                            collapsedYears[group.year] ? "-rotate-90" : ""
                          }`}
                        />
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 uppercase tracking-wide">
                          {group.year}
                        </h2>
                        <span className="ml-4 px-3 py-1 bg-gray-200 text-gray-900 text-sm font-bold uppercase tracking-wide">
                          {collapsedYears[group.year]
                            ? "Show"
                            : `${group.items.length} Event${group.items.length > 1 ? "s" : ""}`}
                        </span>
                      </div>
                      {!collapsedYears[group.year] && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {group.items.map((event, idx) => (
                            <div 
                              key={event.SlNo} 
                              className="p-6 bg-gray-50 border-2 border-gray-400 hover:shadow-lg hover:border-blue-900 transition-all duration-300 flex flex-col"
                            >
                              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-gray-300">
                                <span
                                  className={`uppercase tracking-wide text-xs px-3 py-1 font-bold border-2 ${
                                    event.type === "Conference"
                                      ? "border-blue-900 bg-blue-900 text-white"
                                      : event.type === "Workshop"
                                      ? "border-gray-600 bg-gray-600 text-white"
                                      : "border-gray-400 bg-gray-200 text-gray-900"
                                  }`}>
                                  {event.type}
                                </span>
                                <span className="text-xs px-2 py-1 border border-gray-400 bg-white text-gray-700 font-semibold">
                                  {event.year}
                                </span>
                              </div>
                              <h3 className="text-base font-bold text-gray-900 mb-3 leading-tight uppercase tracking-wide">
                                {event.Title}
                              </h3>
                              <div className="flex items-center text-gray-800 text-sm mb-3 font-semibold">
                                <Calendar className="h-4 w-4 mr-2 text-blue-900" />
                                {event.Date}
                              </div>
                              <div className="mb-3 flex flex-wrap items-center gap-2 pb-3 border-b border-gray-300">
                                {(event.Coordinators || []).map((coord: string, ic: number) => (
                                  <span
                                    key={ic}
                                    className="px-2 py-1 border border-gray-400 bg-white text-gray-800 text-xs font-semibold"
                                  >
                                    {coord}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-auto pt-2">
                                <EventModal event={event} index={idx} />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
