import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-mechanic.jpg";
import serviceDiagnostics from "@/assets/service-diagnostics.jpg";
import serviceCenter from "@/assets/service-center.jpg";

const slides = [
  {
    badge: "NEWLY OPENED",
    title: "TIGERS MARK",
    subtitle: "AUTOMOTIVE REPAIR SHOP",
    tagline: "Quality Service, Trusted Results",
    description: "Your newly opened destination for expert vehicle maintenance, genuine parts, and professional automotive solutions in the Philippines.",
    image: heroImage,
  },
  {
    badge: "EXPERT SERVICES",
    title: "PROFESSIONAL",
    subtitle: "REPAIR & MAINTENANCE",
    tagline: "Certified Filipino Technicians",
    description: "From routine oil changes to complex engine repairs, our skilled team delivers excellence with every service.",
    image: serviceDiagnostics,
  },
  {
    badge: "GENUINE PARTS",
    title: "QUALITY",
    subtitle: "AUTO PARTS & CHEMICALS",
    tagline: "Original Equipment Manufacturer",
    description: "Browse our extensive catalog of OEM parts, premium accessories, and automotive chemicals at competitive prices.",
    image: serviceCenter,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[80vh] min-h-[550px] max-h-[750px] overflow-hidden">
      {/* Background Images with Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src={slide.image} 
            alt="Tigers Mark Automotive" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <AnimatePresence mode="wait">
            <motion.span 
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="inline-block text-[11px] font-bold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full mb-4"
            >
              {slide.badge}
            </motion.span>
          </AnimatePresence>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.h1 
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white mb-2"
            >
              <span className="block text-2xl md:text-3xl font-light tracking-wide">{slide.title}</span>
              <span className="block text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">{slide.subtitle}</span>
            </motion.h1>
          </AnimatePresence>

          {/* Tagline */}
          <AnimatePresence mode="wait">
            <motion.p 
              key={`tagline-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 font-medium mb-4"
            >
              {slide.tagline}
            </motion.p>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p 
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm md:text-base text-white/70 mb-8 max-w-lg leading-relaxed"
            >
              {slide.description}
            </motion.p>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="accent" size="lg" className="text-sm">
              Book a Service
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-sm border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Explore Parts
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </motion.button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide ? "w-10 bg-accent" : "w-4 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <motion.div
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-accent"
        />
      </div>
    </section>
  );
};

export default HeroSection;
