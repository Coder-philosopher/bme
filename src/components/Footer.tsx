"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Department Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              Department of Biomedical Engineering
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              National Institute of Technology Raipur - Advancing healthcare
              through engineering excellence and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary-teal transition-colors"
                data-testid="link-social-facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-teal transition-colors"
                data-testid="link-social-twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-teal transition-colors"
                data-testid="link-social-linkedin"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-teal transition-colors"
                data-testid="link-social-youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-primary-teal transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-gray-300 hover:text-primary-teal transition-colors"
                  data-testid="link-footer-academics"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-gray-300 hover:text-primary-teal transition-colors"
                  data-testid="link-footer-research"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/placement"
                  className="text-gray-300 hover:text-primary-teal transition-colors"
                  data-testid="link-footer-placements"
                >
                  Placements
                </Link>
              </li>
              <li>
                <Link
                  href="/alumni"
                  className="text-gray-300 hover:text-primary-teal transition-colors"
                  data-testid="link-footer-alumni"
                >
                  Alumni
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary-teal transition-colors"
                  data-testid="link-footer-syllabus"
                >
                  Syllabus
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary-teal transition-colors"
                  data-testid="link-footer-admission"
                >
                  Admission
                </a>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="text-gray-300 hover:text-primary-teal transition-colors"
                  data-testid="link-footer-scholarships"
                >
                  Scholarships
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-gray-300 hover:text-primary-teal transition-colors"
                  data-testid="link-footer-facilities"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-primary-teal transition-colors"
                  data-testid="link-footer-gallery"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p data-testid="text-contact-address">
                NIT Raipur, G.E. Road
                <br />
                Raipur - 492010
                <br />
                Chhattisgarh, India
              </p>
              <p data-testid="text-contact-phone">Phone: +91-771-2254200</p>
              <p data-testid="text-contact-email">Email: bme@nitrr.ac.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400" data-testid="text-copyright">
            © 2024 Department of Biomedical Engineering, NIT Raipur. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
