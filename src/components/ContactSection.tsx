import { MapPin, Phone, Clock, Mail, MessageCircle, ArrowRight, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "Tigers Mark Automotive Shop",
    secondary: "Metro Manila, Philippines",
    action: "Get Directions",
    href: "#",
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+63 917 123 4567",
    secondary: "+63 2 8123 4567",
    action: "Call Now",
    href: "tel:+639171234567",
  },
  {
    icon: Clock,
    title: "Working Hours",
    primary: "Mon-Sat: 8:00 AM - 6:00 PM",
    secondary: "Sunday: By Appointment",
    action: "View Schedule",
    href: "#",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "service@tigersmark.ph",
    secondary: "parts@tigersmark.ph",
    action: "Send Email",
    href: "mailto:service@tigersmark.ph",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-16 lg:py-20 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block"
          >
            Contact Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3"
          >
            Get In Touch
            <span className="text-gradient-accent block">With Tigers Mark</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            Have questions? Our team is ready to help. Reach out through any channel and we'll respond promptly.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }}
              className="group p-5 rounded-xl bg-white border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-slate-100 group-hover:bg-accent/10 flex items-center justify-center mb-4 transition-colors">
                <item.icon className="w-5 h-5 text-slate-600 group-hover:text-accent transition-colors" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm">{item.title}</h4>
              <p className="text-foreground font-medium text-sm mb-0.5">{item.primary}</p>
              <p className="text-muted-foreground text-xs mb-3">{item.secondary}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                {item.action}
                <ArrowRight className="w-3 h-3" />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Emergency Contact & Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-slate-900 rounded-2xl p-6 lg:p-10"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                Need Immediate Assistance?
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Our emergency hotline is available for urgent vehicle issues. Don't hesitate to call us.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="tel:+639171234567"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Hotline
                </a>
                <a 
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Live Chat
                </a>
                <a 
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
                <a 
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-4xl lg:text-5xl font-bold text-white mb-1">
                24<span className="text-accent">/</span>7
              </p>
              <p className="text-slate-400 text-sm">Emergency Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
