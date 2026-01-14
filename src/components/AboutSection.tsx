import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Shield, Zap, CheckCircle, MapPin } from "lucide-react";
import serviceCenter from "@/assets/service-center.jpg";
import serviceDiagnostics from "@/assets/service-diagnostics.jpg";

const values = [
  { icon: Award, title: "Quality", description: "Premium parts & service" },
  { icon: Users, title: "Trust", description: "Customer-first approach" },
  { icon: Shield, title: "Warranty", description: "Guaranteed satisfaction" },
  { icon: Zap, title: "Speed", description: "Fast turnaround times" },
];

const highlights = [
  "Certified Filipino Technicians",
  "Genuine OEM Parts",
  "Modern Diagnostic Equipment",
  "Competitive Pricing in Peso",
  "Convenient Location in Metro Manila",
  "Customer-Focused Service",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block"
            >
              About Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4"
            >
              Welcome to
              <span className="text-gradient-accent block">Tigers Mark Automotive</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm text-muted-foreground mb-4 leading-relaxed"
            >
              We're excited to announce the grand opening of <strong>Tigers Mark Automotive Repair Shop</strong> — 
              your new go-to destination for professional vehicle care in the Philippines. Our team of certified 
              Filipino technicians brings expertise to deliver exceptional service quality at competitive prices.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="text-sm text-muted-foreground mb-6 leading-relaxed"
            >
              Whether you need routine maintenance, complex repairs, or genuine auto parts and chemicals, 
              we've got you covered with state-of-the-art equipment and a commitment to excellence. 
              All prices are in Philippine Peso (₱) for your convenience.
            </motion.p>

            {/* Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-2 mb-6"
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs text-foreground">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Values Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="grid grid-cols-2 gap-3"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-border"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{value.title}</h4>
                    <p className="text-[11px] text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={serviceCenter} 
                    alt="Tigers Mark Service Center" 
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={serviceDiagnostics} 
                    alt="Diagnostics Equipment" 
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-xl overflow-hidden shadow-lg h-full">
                  <img 
                    src={serviceCenter} 
                    alt="Our Facility" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* New Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-accent flex flex-col items-center justify-center shadow-lg"
            >
              <span className="text-white text-[10px] font-medium">NEWLY</span>
              <span className="text-white text-sm font-bold">OPENED</span>
            </motion.div>

            {/* Location Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute -bottom-4 left-4 px-4 py-2 rounded-lg bg-white shadow-lg border border-border flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-foreground">Metro Manila, Philippines</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
