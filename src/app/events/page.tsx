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
      "1st International Conference on “Biomedical Engineering Science and Technology: Roadway from Laboratory to Market” (ICBEST 2018)",
    Date: "20th - 21st Dec 2018",
    Coordinators: ["Dr. Neelamshobha Nirala", "Dr. Arindam Bit", "Dr. Saurabh Gupta"],
    Type: "Conference",
  },
  // ... add remaining entries as-is ...
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
        <Button variant="secondary" size="sm" className="mt-4 rounded-lg">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{event.Title}</DialogTitle>
        </DialogHeader>
        <div className="mt-2 space-y-3">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="h-5 w-5 mr-2 text-blue-500" />
            {event.Date}
          </div>
          <div className="flex flex-wrap items-center text-gray-600 text-sm">
            <Users className="h-5 w-5 mr-2 text-teal-600" />
            <span className="font-medium">Coordinators:</span>
            {event.Coordinators && (
              <div className="flex flex-wrap gap-2 ml-2">
                {event.Coordinators.map((coor: string, i: number) => (
                  <span key={i} className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium">
                    {coor}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Badge variant="default" className="bg-blue-100 text-blue-700 font-medium">
              {event.type}
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pb-10 bg-gradient-to-r from-teal-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Events & Activities</h1>
          <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Conferences, Workshops, Academic Sessions, and More
          </p>
        </div>
      </section>

      {/* Category & Search Filters */}
      <section className="py-8 border-b bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === selectedCategory ? "default" : "outline"}
                className={`text-sm rounded-xl ${cat === selectedCategory ? "bg-primary-teal text-white" : ""}`}
                onClick={() => setSelectedCategory(cat)}>
                {cat}
              </Button>
            ))}
          </div>
          <div className="flex items-center ml-auto md:ml-8 w-full md:w-64">
            <div className="relative w-full">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                className="pl-8 pr-3 py-2 rounded-lg border w-full bg-gray-50 text-gray-700 shadow-inner"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
          </div>
        </div>
      </section>

      {/* Events by Year */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {eventsByYear.length === 0 || eventsByYear.every((group) => group.items.length === 0) ? (
            <div className="text-center py-16">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
              <p className="text-gray-500">Try adjusting category or search terms.</p>
            </div>
          ) : (
            <div>
              {eventsByYear.map(
                (group, gidx) =>
                  group.items.length > 0 && (
                    <div key={group.year} className="mb-12">
                      {/* Year Heading with Collapse Toggle */}
                      <div
                        className="flex items-center cursor-pointer mb-6 group select-none"
                        onClick={() =>
                          setCollapsedYears((prev) => ({
                            ...prev,
                            [group.year]: !prev[group.year],
                          }))
                        }>
                        <ChevronDown
                          className={`w-6 h-6 mr-2 transition-transform duration-200 ${collapsedYears[group.year] ? "-rotate-90" : ""}`}
                        />
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-wide">
                          {group.year}
                        </h2>
                        <span className="ml-3 text-sm text-gray-500 font-medium group-hover:text-teal-600">
                          {collapsedYears[group.year]
                            ? "Show"
                            : `(${group.items.length} event${group.items.length > 1 ? "s" : ""})`}
                        </span>
                      </div>
                      {!collapsedYears[group.year] && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                          {group.items.map((event, idx) => (
                            <Card key={event.SlNo} className="p-6 bg-white border shadow hover:shadow-lg rounded-xl flex flex-col">
                              <div className="flex items-center gap-3 mb-3">
                                <Badge
                                  variant="outline"
                                  className={`uppercase tracking-wide text-xs px-2.5 py-1.5 font-bold ${
                                    event.type === "Conference"
                                      ? "border-blue-300 text-blue-600"
                                      : event.type === "Workshop"
                                      ? "border-green-300 text-green-600"
                                      : "border-gray-200 text-gray-600"
                                  }`}>
                                  {event.type}
                                </Badge>
                                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                                  {event.year}
                                </span>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                                {event.Title}
                              </h3>
                              <div className="flex items-center text-gray-600 text-sm mb-2">
                                <Calendar className="h-4 w-4 mr-2 text-teal-600" />
                                {event.Date}
                              </div>
                              <div className="mb-2 flex flex-wrap items-center gap-2">
                                {(event.Coordinators || []).map((coord: string, ic: number) => (
                                  <span
                                    key={ic}
                                    className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
                                  >
                                    {coord}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-auto pt-2 flex items-end justify-between">
                                <EventModal event={event} index={idx} />
                              </div>
                            </Card>
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
