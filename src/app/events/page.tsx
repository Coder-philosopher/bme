"use client"; // ✅ needed because of useState + useQuery + UI dialogs

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Events = () => {
  const { data: eventsData, isLoading } = useQuery({
    queryKey: ["/api/department-data/events"],
  });

  const events = eventsData?.data;
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "Conference",
    "Workshop",
    "Guest Lecture",
    "Talks",
    "Departmental Events",
    "Induction",
  ];

  const allEvents = [
    ...(events?.upcoming || []).map((event: any) => ({ ...event, status: "upcoming" })),
    ...(events?.past || []).map((event: any) => ({ ...event, status: "past" })),
  ];

  const filteredEvents =
    selectedCategory === "all"
      ? allEvents
      : allEvents.filter((event: any) => event.type === selectedCategory);

  const EventModal = ({ event, index }: { event: any; index: number }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" data-testid={`button-event-details-${index}`}>
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl" data-testid={`modal-event-${index}`}>
        <DialogHeader>
          <DialogTitle data-testid={`modal-event-title-${index}`}>{event.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-primary-teal" />
            <span data-testid={`modal-event-date-${index}`}>
              {new Date(event.date).toLocaleDateString()}
              {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString()}`}
            </span>
          </div>

          {event.venue && (
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary-blue" />
              <span data-testid={`modal-event-venue-${index}`}>{event.venue}</span>
            </div>
          )}

          {event.speaker && (
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary-teal" />
              <span data-testid={`modal-event-speaker-${index}`}>
                <strong>Speaker:</strong> {event.speaker}
              </span>
            </div>
          )}

          {event.participants && (
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary-blue" />
              <span data-testid={`modal-event-participants-${index}`}>
                <strong>Participants:</strong> {event.participants}
              </span>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
            <p className="text-gray-600" data-testid={`modal-event-description-${index}`}>
              {event.description}
            </p>
          </div>

          {event.registrationRequired && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>Note:</strong> Registration required for this event
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20" data-testid="page-events-loading">
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

  return (
    <div className="min-h-screen pt-20" data-testid="page-events">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-teal to-primary-blue text-white" data-testid="section-events-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6" data-testid="heading-events-title">
            Events & Activities
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-testid="text-events-subtitle">
            Stay updated with our latest conferences, workshops, and academic activities
          </p>
        </div>
      </section>

      {/* Event Categories Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm" data-testid="section-event-filters">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary-teal hover:bg-teal-700" : ""}
                data-testid={`filter-${category.toLowerCase().replace(' ', '-')}`}
              >
                {category === "all" ? "All Events" : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20" data-testid="section-events-grid">
        <div className="max-w-7xl mx-auto px-6">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12" data-testid="empty-events">
              <div className="bg-gray-100 p-8 rounded-lg">
                <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Events Found</h3>
                <p className="text-gray-500">No events found for the selected category.</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-testid={`card-event-${index}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant={event.status === "upcoming" ? "default" : "secondary"}
                      className={event.status === "upcoming" ? "bg-primary-teal" : ""}
                      data-testid={`badge-event-status-${index}`}
                    >
                      {event.status}
                    </Badge>
                    <Badge variant="outline" data-testid={`badge-event-type-${index}`}>
                      {event.type}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" data-testid={`heading-event-title-${index}`}>
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-primary-teal" />
                      <span data-testid={`text-event-date-${index}`}>
                        {new Date(event.date).toLocaleDateString()}
                        {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString()}`}
                      </span>
                    </div>
                    
                    {event.venue && (
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-primary-blue" />
                        <span data-testid={`text-event-venue-${index}`}>{event.venue}</span>
                      </div>
                    )}
                    
                    {event.speaker && (
                      <div className="flex items-center text-gray-600 text-sm">
                        <Users className="h-4 w-4 mr-2 text-primary-teal" />
                        <span data-testid={`text-event-speaker-${index}`}>{event.speaker}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3" data-testid={`text-event-description-${index}`}>
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <EventModal event={event} index={index} />
                    
                    {event.registrationRequired && (
                      <Badge variant="outline" className="text-yellow-600 border-yellow-600" data-testid={`badge-registration-${index}`}>
                        Registration Required
                      </Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events Highlight */}
      {events?.upcoming && events.upcoming.length > 0 && (
        <section className="py-20 bg-gray-50" data-testid="section-upcoming-highlight">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-upcoming">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600" data-testid="text-upcoming-subtitle">
                Don&apos;t miss these exciting upcoming events
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.upcoming.slice(0, 3).map((event, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-to-br from-primary-teal/10 to-primary-blue/10 border-primary-teal hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-testid={`card-upcoming-${index}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-teal p-3 rounded-full mr-4">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <Badge className="bg-primary-teal text-white" data-testid={`badge-upcoming-type-${index}`}>
                      {event.type}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" data-testid={`heading-upcoming-title-${index}`}>
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary-teal" />
                      <span data-testid={`text-upcoming-date-${index}`}>
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    {event.venue && (
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-primary-blue" />
                        <span data-testid={`text-upcoming-venue-${index}`}>{event.venue}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm" data-testid={`text-upcoming-description-${index}`}>
                    {event.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Events;
