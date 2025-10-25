"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16 border-t-4 border-gray-800" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Department Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide border-b-2 border-white pb-2">
              Department of Biomedical Engineering
            </h3>
            <p className="text-gray-200 leading-relaxed mb-6 text-sm">
              National Institute of Technology Raipur - Advancing healthcare
              through engineering excellence and innovation.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 border border-white hover:bg-white hover:text-blue-900 transition-colors duration-200"
                data-testid="link-social-facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 border border-white hover:bg-white hover:text-blue-900 transition-colors duration-200"
                data-testid="link-social-twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 border border-white hover:bg-white hover:text-blue-900 transition-colors duration-200"
                data-testid="link-social-linkedin"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 border border-white hover:bg-white hover:text-blue-900 transition-colors duration-200"
                data-testid="link-social-youtube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide border-b-2 border-white pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-200 hover:text-white hover:underline transition-colors text-sm font-medium"
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-gray-200 hover:text-white hover:underline transition-colors text-sm font-medium"
                  data-testid="link-footer-academics"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-gray-200 hover:text-white hover:underline transition-colors text-sm font-medium"
                  data-testid="link-footer-research"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/placement"
                  className="text-gray-200 hover:text-white hover:underline transition-colors text-sm font-medium"
                  data-testid="link-footer-placements"
                >
                  Placements
                </Link>
              </li>
              <li>
                <Link
                  href="/alumni"
                  className="text-gray-200 hover:text-white hover:underline transition-colors text-sm font-medium"
                  data-testid="link-footer-alumni"
                >
                  Alumni
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide border-b-2 border-white pb-2">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white hover:underline transition-colors text-sm font-medium"
                  data-testid="link-footer-syllabus"
                >
                  Syllabus
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white hover:underline transition-colors text-sm font-medium"
                  data-testid="link-footer-admission"
                >
                  Admission
                </a>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="text-gray-200 hover:text-white hover:underline transition-colors text-sm font-medium"
                  data-testid="link-footer-scholarships"
                >
                  Scholarships
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-gray-200 hover:text-white hover:underline transition-colors text-sm font-medium"
                  data-testid="link-footer-facilities"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-200 hover:text-white hover:underline transition-colors text-sm font-medium"
                  data-testid="link-footer-gallery"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide border-b-2 border-white pb-2">Contact Info</h3>
            <div className="space-y-3 text-gray-200 text-sm">
              <p data-testid="text-contact-address">
                <span className="font-bold text-white">Address:</span><br />
                NIT Raipur, G.E. Road<br />
                Raipur - 492010<br />
                Chhattisgarh, India
              </p>
              <p data-testid="text-contact-phone">
                <span className="font-bold text-white">Phone:</span><br />
                +91-771-2254200
              </p>
              <p data-testid="text-contact-email">
                <span className="font-bold text-white">Email:</span><br />
                bme@nitrr.ac.in
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-sm font-medium" data-testid="text-copyright">
            © 2024 Department of Biomedical Engineering, NIT Raipur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
