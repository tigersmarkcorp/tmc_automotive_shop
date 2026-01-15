import { Wrench, Cog, Battery, Gauge, Car, Settings, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import serviceDiagnostics from "@/assets/service-diagnostics.jpg";
import serviceCenter from "@/assets/service-center.jpg";
import heroImage from "@/assets/hero-mechanic.jpg";

const services = [
  {
    icon: Wrench,
    title: "Engine Repair",
    description: "Complete diagnostics & rebuilds for all engine types",
    price: "From ₱14,999",
    image: heroImage,
  },
  {
    icon: Cog,
    title: "Transmission",
    description: "Manual & automatic transmission repair and service",
    price: "From ₱24,999",
    image: serviceDiagnostics,
  },
  {
    icon: Battery,
    title: "Electrical Systems",
    description: "Battery, alternator & electrical diagnostics",
    price: "From ₱4,999",
    image: serviceCenter,
  },
  {
    icon: Gauge,
    title: "Brake Service",
    description: "Brake pads, rotors & complete system check",
    price: "From ₱7,499",
    image: heroImage,
  },
  {
    icon: Car,
    title: "Body & Paint",
    description: "Collision repair & professional paint work",
    price: "From ₱19,999",
    image: serviceDiagnostics,
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Oil changes, tune-ups & preventive care",
    price: "From ₱2,499",
    image: serviceCenter,
  },
];

const featuredServices = [
  {
    title: "Complete Engine Overhaul",
    description: "Full engine rebuild with genuine parts and warranty",
    price: "₱89,999",
    image: heroImage,
    features: ["Full diagnostics", "Genuine parts", "12-month warranty", "Free pickup"],
  },
  {
    title: "Premium Maintenance Package",
    description: "Comprehensive vehicle care for peak performance",
    price: "₱12,999",
    image: serviceDiagnostics,
    features: ["Oil change", "Filter replacement", "Brake inspection", "Tire rotation"],
  },
  {
    title: "Air Conditioning Service",
    description: "Keep cool with our complete A/C solutions",
    price: "₱5,999",
    image: serviceCenter,
    features: ["Refrigerant refill", "Leak detection", "Compressor check", "Cleaning"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCarousel, setActiveCarousel] = useState(0);

  const nextCarousel = () => setActiveCarousel((prev) => (prev + 1) % featuredServices.length);
  const prevCarousel = () => setActiveCarousel((prev) => (prev - 1 + featuredServices.length) % featuredServices.length);

  return (
    <section id="services" ref={ref} className="py-16 lg:py-20 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block"
          >
            Professional Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3"
          >
            Expert Vehicle Care at
            <span className="text-gradient-accent block">Tigers Auto Mechanic Shop</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            Our certified technicians provide comprehensive repair and maintenance services for all vehicle makes and models.
          </motion.p>
        </div>

        {/* Featured Services Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative mb-16"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <motion.img
                  key={activeCarousel}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={featuredServices[activeCarousel].image}
                  alt={featuredServices[activeCarousel].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent lg:bg-gradient-to-l" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  key={activeCarousel}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block">
                    Featured Service
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    {featuredServices[activeCarousel].title}
                  </h3>
                  <p className="text-slate-400 mb-4">
                    {featuredServices[activeCarousel].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredServices[activeCarousel].features.map((feature, idx) => (
                      <span key={idx} className="flex items-center gap-1 text-xs text-slate-300 bg-white/10 px-3 py-1 rounded-full">
                        <Shield className="w-3 h-3 text-accent" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-slate-400 text-sm">Starting at</span>
                      <p className="text-3xl font-bold text-accent">{featuredServices[activeCarousel].price}</p>
                    </div>
                    <Button variant="accent" size="lg">
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevCarousel}
              className="w-10 h-10 rounded-full bg-slate-100 border border-border flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>
            <div className="flex gap-2">
              {featuredServices.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCarousel(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeCarousel ? "w-8 bg-accent" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextCarousel}
              className="w-10 h-10 rounded-full bg-slate-100 border border-border flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </motion.button>
          </div>
        </motion.div>

        {/* All Services Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * index }}
              whileHover={{ y: -5, boxShadow: "0 15px 40px -10px rgba(0,0,0,0.1)" }}
              className="group bg-white rounded-xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-muted-foreground mb-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-accent">{service.price}</p>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Sparkles className="w-3 h-3" />
                    Quality Assured
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Button variant="dark" size="lg">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
