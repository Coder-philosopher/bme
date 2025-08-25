"use client"; // ✅ required because of useState + useQuery + toast

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Clock, Printer } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { data: contactData, isLoading } = useQuery({
    queryKey: ["/api/department-data/contact"],
  });

  const contact = contactData?.data;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We will get back to you soon!",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20" data-testid="page-contact-loading">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-6"></div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20" data-testid="page-contact">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-teal to-primary-blue text-white" data-testid="section-contact-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6" data-testid="heading-contact-title">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Connect with us for admissions, collaborations, or any inquiries
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20" data-testid="section-contact-content">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Department Contact */}
              <Card className="p-8 shadow-lg" data-testid="card-department-contact">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6" data-testid="heading-department-contact">
                  Department Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-teal p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600 whitespace-pre-line" data-testid="text-department-address">
                        {contact?.department?.address}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-blue p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600" data-testid="text-department-email">
                        {contact?.department?.email}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-teal p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600" data-testid="text-department-phone">
                        {contact?.department?.phone}
                      </p>
                    </div>
                  </div>

                  {contact?.department?.fax && (
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-blue p-3 rounded-full">
                        <Printer className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Printer</h4>
                        <p className="text-gray-600" data-testid="text-department-fax">
                          {contact?.department?.fax}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              {/* HoD Contact */}
              <Card className="p-8 shadow-lg" data-testid="card-hod-contact">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-hod-contact">
                  Head of Department
                </h3>
                <div className="space-y-2">
                  <p><strong>Name:</strong> <span data-testid="text-hod-name">{contact?.hod?.name}</span></p>
                  <p><strong>Designation:</strong> <span data-testid="text-hod-designation">{contact?.hod?.designation}</span></p>
                  <p><strong>Email:</strong> <span data-testid="text-hod-email">{contact?.hod?.email}</span></p>
                  <p><strong>Phone:</strong> <span data-testid="text-hod-phone">{contact?.hod?.phone}</span></p>
                  <p><strong>Office:</strong> <span data-testid="text-hod-office">{contact?.hod?.office}</span></p>
                </div>
              </Card>

              {/* Office Hours */}
              <Card className="p-8 shadow-lg" data-testid="card-office-hours">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-office-hours">
                  Office Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary-teal" />
                    <span className="font-semibold">Location:</span>
                    <span data-testid="text-office-location">{contact?.office?.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary-blue" />
                    <span className="font-semibold">Monday to Friday:</span>
                    <span data-testid="text-office-weekdays">{contact?.office?.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary-teal" />
                    <span className="font-semibold">Saturday:</span>
                    <span data-testid="text-office-saturday">{contact?.office?.saturday}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary-blue" />
                    <span className="font-semibold">Sunday:</span>
                    <span data-testid="text-office-sunday">{contact?.office?.sunday}</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 shadow-lg" data-testid="card-contact-form">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6" data-testid="heading-contact-form">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="mt-2"
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="mt-2"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject of your inquiry"
                    className="mt-2"
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    rows={5}
                    className="mt-2 resize-y"
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-primary-teal hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  data-testid="button-submit"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-20 bg-gray-50" data-testid="section-location">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-location">
              Find Us
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-location-subtitle">
              Visit our department at NIT Raipur campus
            </p>
          </div>
          
          <Card className="p-8 text-center" data-testid="card-location-map">
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p>Detailed campus map and directions would be embedded here</p>
                <p className="text-sm mt-2">
                  Coordinates: NIT Raipur, G.E. Road, Raipur, Chhattisgarh 492010
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-gray-900 mb-2">By Air</h4>
                <p className="text-gray-600 text-sm">
                  Swami Vivekananda Airport, Raipur (15 km from campus)
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-gray-900 mb-2">By Train</h4>
                <p className="text-gray-600 text-sm">
                  Raipur Railway Station (25 km from campus)
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-gray-900 mb-2">By Road</h4>
                <p className="text-gray-600 text-sm">
                  Well connected by NH-6 and state highways
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
