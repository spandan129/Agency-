"use client"
import { ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { quickLinks, socialLinks, services } from '@/data/footer';

export function Footer() {


  return (
    <footer className="bg-gradient-to-br from-[#7a2964] to-[#632152] text-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">TruLink WorkForce</h3>
              <p className="text-gray-300 leading-relaxed">
                Empowering careers through innovative solutions and personalized guidance.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <MapPin className="h-5 w-5 text-pink-400 group-hover:text-pink-500" />
                <span className="group-hover:text-white transition-colors">123 Career Street, CA 94107</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <Mail className="h-5 w-5 text-pink-400 group-hover:text-pink-500" />
                <span className="group-hover:text-white transition-colors">hello@truecare.com</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <Phone className="h-5 w-5 text-pink-400 group-hover:text-pink-500" />
                <span className="group-hover:text-white transition-colors">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 lg:mt-0"
          >
            <h4 className="text-xl font-semibold text-white mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center hover:text-white transition-colors duration-300"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 lg:mt-0"
          >
            <h4 className="text-xl font-semibold text-white mb-8">Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="group flex items-center hover:text-white transition-colors duration-300"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8 mt-8 lg:mt-0"
          >
            <div>
              <h4 className="text-xl font-semibold text-white mb-8">Stay Updated</h4>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for career tips and opportunities.
              </p>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border border-purple-300/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-300/50 transition-colors placeholder-gray-400"
                />
                <button className="bg-[#cf479b] text-white px-6 py-3 rounded-lg hover:bg-[#af3580] transition-colors duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-6">Follow Us</h5>
              <div className="flex space-x-5">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 bg-white/10 rounded-lg hover:bg-[#cf479b] hover:text-white transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} TrueCare. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;