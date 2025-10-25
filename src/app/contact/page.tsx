"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Clock, Building2, Train, Plane, Car } from "lucide-react";

const contactData = {
  department: {
    name: "Department of Biomedical Engineering",
    address: "National Institute of Technology Raipur\nG.E. Road, Raipur\nChhattisgarh - 492010\nIndia",
    email: "bme@nitrr.ac.in",
    phone: "+91-771-2254200",
  },
  hod: {
    name: "Dr. Arindam Bit",
    designation: "Associate Professor & Head of Department",
    email: "arinbit.bme@nitrr.ac.in",
    phone: "+91-9399603267",
    office: "Department of Biomedical Engineering, NIT Raipur",
  },
  office: {
    location: "Administrative Block, Ground Floor",
    hours: "9:00 AM - 5:00 PM",
    saturday: "9:00 AM - 1:00 PM",
    sunday: "Closed",
  },
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  return (
    <div className="min-h-screen pt-28 bg-white">
      {/* Hero Section - Academic */}
      <section className="pb-12 bg-blue-900 border-b-4 border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide">
            Contact Us
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Connect with us for admissions, collaborations, or any inquiries
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Department Contact */}
              <div className="p-8 border-2 border-gray-400 bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center uppercase tracking-wide pb-3 border-b-2 border-blue-900">
                  <Building2 className="w-6 h-6 mr-3 text-blue-900" />
                  Department Contact
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-300">
                    <div className="bg-blue-900 p-3">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-wide text-sm">Address</h4>
                      <p className="text-gray-800 whitespace-pre-line text-sm leading-relaxed">
                        {contactData.department.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-4 border-b border-gray-300">
                    <div className="bg-blue-900 p-3">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-wide text-sm">Email</h4>
                      <a
                        href={`mailto:${contactData.department.email}`}
                        className="text-blue-900 hover:underline text-sm font-semibold"
                      >
                        {contactData.department.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-900 p-3">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-wide text-sm">Phone</h4>
                      <a
                        href={`tel:${contactData.department.phone}`}
                        className="text-blue-900 hover:underline text-sm font-semibold"
                      >
                        {contactData.department.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* HoD Contact */}
              <div className="p-8 border-2 border-gray-400 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide pb-3 border-b-2 border-blue-900">
                  Head of Department
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="pb-2 border-b border-gray-200">
                    <strong className="text-gray-900 uppercase tracking-wide">Name:</strong>{" "}
                    <span className="text-gray-800 font-semibold">{contactData.hod.name}</span>
                  </p>
                  <p className="pb-2 border-b border-gray-200">
                    <strong className="text-gray-900 uppercase tracking-wide">Designation:</strong>{" "}
                    <span className="text-gray-800">{contactData.hod.designation}</span>
                  </p>
                  <p className="pb-2 border-b border-gray-200">
                    <strong className="text-gray-900 uppercase tracking-wide">Email:</strong>{" "}
                    <a
                      href={`mailto:${contactData.hod.email}`}
                      className="text-blue-900 hover:underline font-semibold"
                    >
                      {contactData.hod.email}
                    </a>
                  </p>
                  <p className="pb-2 border-b border-gray-200">
                    <strong className="text-gray-900 uppercase tracking-wide">Phone:</strong>{" "}
                    <a
                      href={`tel:${contactData.hod.phone}`}
                      className="text-blue-900 hover:underline font-semibold"
                    >
                      {contactData.hod.phone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-gray-900 uppercase tracking-wide">Office:</strong>{" "}
                    <span className="text-gray-800">{contactData.hod.office}</span>
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-8 border-2 border-gray-400 bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center uppercase tracking-wide pb-3 border-b-2 border-blue-900">
                  <Clock className="w-6 h-6 mr-3 text-blue-900" />
                  Office Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-3 border border-gray-300 bg-white">
                    <span className="font-bold text-gray-900 uppercase tracking-wide">Location:</span>
                    <span className="text-gray-800">{contactData.office.location}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-300 bg-white">
                    <span className="font-bold text-gray-900 uppercase tracking-wide">Mon - Fri:</span>
                    <span className="text-blue-900 font-bold">{contactData.office.hours}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-300 bg-white">
                    <span className="font-bold text-gray-900 uppercase tracking-wide">Saturday:</span>
                    <span className="text-blue-900 font-bold">{contactData.office.saturday}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-300 bg-white">
                    <span className="font-bold text-gray-900 uppercase tracking-wide">Sunday:</span>
                    <span className="text-red-700 font-bold">{contactData.office.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 border-2 border-gray-400 bg-gray-50 sticky top-28 h-fit">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide pb-3 border-b-2 border-blue-900">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-bold text-gray-900 uppercase tracking-wide">
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
                    className="mt-2 border-2 border-gray-400"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-bold text-gray-900 uppercase tracking-wide">
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
                    className="mt-2 border-2 border-gray-400"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject of your inquiry"
                    className="mt-2 border-2 border-gray-400"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-bold text-gray-900 uppercase tracking-wide">
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
                    className="mt-2 resize-y border-2 border-gray-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 border-0 font-bold uppercase tracking-wide transition-colors duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 pb-6 border-b-2 border-gray-400">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
              Find Us on Campus
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700">
              Visit our department at NIT Raipur
            </p>
          </div>

          <div className="overflow-hidden border-4 border-gray-400">
            {/* Embedded Google Map */}
            <div className="relative w-full h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1761389495183!6m8!1m7!1sCAoSLEFGMVFpcFB3LUVZMEFJRGFhUTZweHA5ck9xM2pENDNFbW5fU3BGd2lqRmJs!2m2!1d21.24972223979945!2d81.6050290948289!3f333.6503887119515!4f2.0007897612194228!5f0.5970117501821992" 
                width="100%" 
                height="100%" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            {/* Transportation Info */}
            <div className="p-6 bg-white border-t-4 border-gray-400">
              <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">How to Reach</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border-2 border-gray-400 bg-gray-50">
                  <div className="flex items-center mb-2 pb-2 border-b-2 border-blue-900">
                    <Plane className="w-5 h-5 mr-2 text-blue-900" />
                    <h4 className="font-bold text-gray-900 uppercase tracking-wide text-sm">By Air</h4>
                  </div>
                  <p className="text-gray-800 text-sm">
                    Swami Vivekananda Airport, Raipur (15 km)
                  </p>
                </div>

                <div className="p-4 border-2 border-gray-400 bg-gray-50">
                  <div className="flex items-center mb-2 pb-2 border-b-2 border-blue-900">
                    <Train className="w-5 h-5 mr-2 text-blue-900" />
                    <h4 className="font-bold text-gray-900 uppercase tracking-wide text-sm">By Train</h4>
                  </div>
                  <p className="text-gray-800 text-sm">
                    Raipur Railway Station (25 km)
                  </p>
                </div>

                <div className="p-4 border-2 border-gray-400 bg-gray-50">
                  <div className="flex items-center mb-2 pb-2 border-b-2 border-blue-900">
                    <Car className="w-5 h-5 mr-2 text-blue-900" />
                    <h4 className="font-bold text-gray-900 uppercase tracking-wide text-sm">By Road</h4>
                  </div>
                  <p className="text-gray-800 text-sm">
                    Via NH-6 and state highways
                  </p>
                </div>
              </div>

              {/* Directions Button */}
              <div className="mt-6 text-center pt-6 border-t-2 border-gray-300">
                <a
                  href="https://www.google.com/maps/dir/?api=1&origin=21.2497222,81.6050291&destination=NIT+Raipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-900 text-white px-6 py-3 hover:bg-blue-800 transition-colors font-bold uppercase tracking-wide"
                >
                  Get Directions to NIT Raipur
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
