"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Clock, Building2, Train, Plane, Car } from "lucide-react";

// Hardcoded contact data
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
    <div className="min-h-screen pt-28 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pb-10 bg-gradient-to-r from-blue-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Connect with us for admissions, collaborations, or any inquiries
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Department Contact */}
              <Card className="p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-6 h-6 mr-3 text-teal-600" />
                  Department Contact
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-3 rounded-xl shadow-md">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed">
                        {contactData.department.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-3 rounded-xl shadow-md">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a
                        href={`mailto:${contactData.department.email}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                      >
                        {contactData.department.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-green-500 to-teal-500 p-3 rounded-xl shadow-md">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a
                        href={`tel:${contactData.department.phone}`}
                        className="text-green-600 hover:text-green-800 hover:underline text-sm"
                      >
                        {contactData.department.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* HoD Contact */}
              <Card className="p-8 shadow-lg bg-gradient-to-br from-indigo-50 to-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Head of Department
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong className="text-gray-700">Name:</strong>{" "}
                    <span className="text-gray-900">{contactData.hod.name}</span>
                  </p>
                  <p>
                    <strong className="text-gray-700">Designation:</strong>{" "}
                    <span className="text-gray-900">{contactData.hod.designation}</span>
                  </p>
                  <p>
                    <strong className="text-gray-700">Email:</strong>{" "}
                    <a
                      href={`mailto:${contactData.hod.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {contactData.hod.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-gray-700">Phone:</strong>{" "}
                    <a
                      href={`tel:${contactData.hod.phone}`}
                      className="text-green-600 hover:underline"
                    >
                      {contactData.hod.phone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-gray-700">Office:</strong>{" "}
                    <span className="text-gray-900">{contactData.hod.office}</span>
                  </p>
                </div>
              </Card>

              {/* Office Hours */}
              <Card className="p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-blue-600" />
                  Office Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-900">{contactData.office.location}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Monday - Friday:</span>
                    <span className="text-blue-700 font-medium">{contactData.office.hours}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Saturday:</span>
                    <span className="text-green-700 font-medium">{contactData.office.saturday}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Sunday:</span>
                    <span className="text-red-700 font-medium">{contactData.office.sunday}</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 shadow-lg sticky top-28 h-fit">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
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
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us on Campus
            </h2>
            <p className="text-lg text-gray-600">
              Visit our department at NIT Raipur
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl">
            {/* Embedded Google Map */}
            <div className="relative w-full h-[500px]">
              <iframe 
              src="https://www.google.com/maps/embed?pb=!4v1761389495183!6m8!1m7!1sCAoSLEFGMVFpcFB3LUVZMEFJRGFhUTZweHA5ck9xM2pENDNFbW5fU3BGd2lqRmJs!2m2!1d21.24972223979945!2d81.6050290948289!3f333.6503887119515!4f2.0007897612194228!5f0.5970117501821992" 
              width="100%" 
              height="100%" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>


            </div>

            {/* Transportation Info */}
            <div className="p-6 bg-white">
  <h3 className="text-xl font-bold text-gray-900 mb-4">How to Reach</h3>
  <div className="grid md:grid-cols-3 gap-4">
    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div className="flex items-center mb-2">
        <Plane className="w-5 h-5 mr-2 text-blue-600" />
        <h4 className="font-semibold text-gray-900">By Air</h4>
      </div>
      <p className="text-gray-600 text-sm">
        Swami Vivekananda Airport, Raipur (15 km)
      </p>
    </div>

    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
      <div className="flex items-center mb-2">
        <Train className="w-5 h-5 mr-2 text-green-600" />
        <h4 className="font-semibold text-gray-900">By Train</h4>
      </div>
      <p className="text-gray-600 text-sm">
        Raipur Railway Station (25 km)
      </p>
    </div>

    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
      <div className="flex items-center mb-2">
        <Car className="w-5 h-5 mr-2 text-purple-600" />
        <h4 className="font-semibold text-gray-900">By Road</h4>
      </div>
      <p className="text-gray-600 text-sm">
        Via NH-6 and state highways
      </p>
    </div>
  </div>

  {/* 🔗 Add this Directions button below */}
  <div className="mt-6 text-center">
    <a
      href="https://www.google.com/maps/dir/?api=1&origin=21.2497222,81.6050291&destination=NIT+Raipur"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
    >
      Get Directions to NIT Raipur
    </a>
  </div>
</div>

          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
