import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <div className="space-y-3">
            <h5 className="text-lg font-semibold text-white mb-3">LearningPortal HQ</h5>
            <p className="flex items-start">
              <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-green-400" />
              123 Learning Path, Knowledge City, ED 54321, USA
            </p>
            <p className="flex items-center">
              <Phone size={18} className="mr-2 text-green-400" />
              +1 (555) 010-0203
            </p>
            <p className="flex items-center">
              <Mail size={18} className="mr-2 text-green-400" />
              <a href="mailto:support@learningportal.mock" className="hover:text-green-300 transition-colors">support@learningportal.mock</a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-lg font-semibold text-white mb-3">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/courses" className="hover:text-green-300 transition-colors">All Courses</Link></li>
              <li><Link to="/resources" className="hover:text-green-300 transition-colors">Resources</Link></li>
              <li><Link to="/about#faq" className="hover:text-green-300 transition-colors">FAQ</Link></li> 
              <li><Link to="/contact" className="hover:text-green-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h5 className="text-lg font-semibold text-white mb-3">Legal</h5>
            <ul className="space-y-2">
              <li><Link to="/terms-of-service" className="hover:text-green-300 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-green-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/sitemap" className="hover:text-green-300 transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h5 className="text-lg font-semibold text-white mb-3">Connect With Us</h5>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors"><Facebook size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors"><Twitter size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors"><Linkedin size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors"><Instagram size={24} /></a>
            </div>
            <p className="text-sm mt-4">Stay informed about new courses and ISO standards updates.</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {currentYear} LearningPortal. All Rights Reserved. 
            <span className="block sm:inline mt-1 sm:mt-0">Crafted with care for lifelong learners.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 