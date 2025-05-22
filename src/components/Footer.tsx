import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h5 className="font-bold text-lg mb-3">Contact Us</h5>
            <p className="text-sm text-gray-400">123 Learning Lane, Education City, EC 45678</p>
            <p className="text-sm text-gray-400">Email: info@learningplatform.com</p>
            <p className="text-sm text-gray-400">Phone: (123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-lg mb-3">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/sitemap" className="text-sm text-gray-400 hover:text-white">Sitemap</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="font-bold text-lg mb-3">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">FB</a> {/* Placeholder */}
              <a href="#" className="text-gray-400 hover:text-white">TW</a> {/* Placeholder */}
              <a href="#" className="text-gray-400 hover:text-white">LI</a> {/* Placeholder */}
              <a href="#" className="text-gray-400 hover:text-white">IG</a> {/* Placeholder */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} LearningPlatform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 