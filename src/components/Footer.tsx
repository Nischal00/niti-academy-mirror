
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Academic Programs", 
    "Admissions",
    "Faculty",
    "Campus Life",
    "Alumni"
  ];

  const programs = [
    "BBA Program",
    "BCA Program", 
    "MBA Program",
    "+2 Science",
    "+2 Management",
    "SEE Preparation"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Youtube, href: "#", color: "hover:text-red-600" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              NITI Academy
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Empowering students with quality education and innovative learning experiences 
              to shape tomorrow's leaders since our establishment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transform hover:scale-110 hover:-translate-y-1`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-xl font-bold mb-8 text-blue-400">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 relative group flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-bold mb-8 text-purple-400">Programs</h4>
            <ul className="space-y-4">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 relative group flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{program}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-xl font-bold mb-8 text-yellow-400">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
                  <MapPin size={20} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Kathmandu, Nepal</p>
                  <p className="text-gray-400 text-sm">Ward No. 5, Teku</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
                  <Phone size={20} className="text-yellow-400" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">+977-1-4567890</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
                  <Mail size={20} className="text-yellow-400" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">info@nitiacademy.edu.np</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h5 className="text-xl font-bold text-white mb-2">Stay Updated</h5>
              <p className="text-gray-400">Subscribe to our newsletter for latest updates and news.</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 NITI Academy. All rights reserved. Made with ❤️ for education.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transform hover:scale-110 transition-all duration-300"
              >
                <ArrowUp size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
