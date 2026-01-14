import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: "Accessories", href: "#parts" },
      { label: "Parts", href: "#parts" },
      { label: "Chemicals", href: "#parts" },
      { label: "New Arrivals", href: "#parts" },
    ],
    services: [
      { label: "Engine Repair", href: "#services" },
      { label: "Transmission", href: "#services" },
      { label: "Brake Service", href: "#services" },
      { label: "Maintenance", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
      { label: "Blog", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Stay Updated</h3>
              <p className="text-xs text-slate-400">Get exclusive deals and automotive tips</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input 
                placeholder="Enter your email" 
                className="h-9 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 rounded-lg text-sm w-full md:w-56"
              />
              <Button variant="accent" size="sm" className="h-9 text-xs px-4">
                Subscribe
                <ArrowRight className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange flex items-center justify-center">
                <span className="text-sm font-bold text-white">TM</span>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-tight">TIGERS MARK</h3>
                <p className="text-[10px] text-slate-500 tracking-wide uppercase">Automotive Repair</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-xs mb-4 leading-relaxed">
              Your newly opened trusted destination for quality automotive service, 
              genuine parts, and professional repair solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-orange" />
                <span>123 Auto Plaza, Business District</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Phone className="w-3.5 h-3.5 text-orange" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Mail className="w-3.5 h-3.5 text-orange" />
                <span>info@tigersmark.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-orange" />
                <span>Mon-Sat: 8AM - 6PM</span>
              </div>
            </div>

            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-orange transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-xs text-slate-400 hover:text-orange transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-xs text-slate-400 hover:text-orange transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-xs text-slate-400 hover:text-orange transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <p>© {currentYear} Tigers Mark Automotive. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange transition-colors">Privacy</a>
              <a href="#" className="hover:text-orange transition-colors">Terms</a>
              <a href="#" className="hover:text-orange transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
