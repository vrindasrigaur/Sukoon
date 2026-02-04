import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-poppins font-semibold">Sukoon World</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A safe, confidential space for stress and anxiety relief. Where peace finds you.
            </p>
            <p className="text-sm text-red-300 font-medium">⚠️Sukoon World is not an emergency or crisis service. If you're in immediate danger, contact your local helpline.</p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-poppins font-semibold mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <span className="text-lg font-poppins font-semibold mb-4 block">Legal</span>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cancellation" className="block text-gray-300 hover:text-white transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2025 The Sukoon World. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;