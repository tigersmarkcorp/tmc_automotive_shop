import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Car, User, Mail, Phone, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Booking Submitted!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    
    setIsSubmitting(false);
  };

  const services = [
    "Engine Repair",
    "Transmission Service",
    "Brake Service",
    "Electrical Diagnostics",
    "Oil Change",
    "Full Inspection",
    "Body Work",
    "Other",
  ];

  return (
    <section ref={ref} className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="text-white">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-orange text-sm font-semibold tracking-widest uppercase mb-4 block"
            >
              Book Service
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
            >
              Schedule Your
              <span className="text-gradient-accent block">Service Today</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg mb-10"
            >
              Book your appointment online and enjoy priority scheduling. 
              Our team will contact you to confirm within 24 hours.
            </motion.p>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {[
                { icon: Calendar, title: "Flexible Scheduling", desc: "Choose a time that works for you" },
                { icon: Clock, title: "Quick Turnaround", desc: "Most services completed same-day" },
                { icon: Car, title: "Free Pickup", desc: "Complimentary vehicle pickup available" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Request an Appointment
              </h3>

              <div className="space-y-5">
                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input 
                      placeholder="Full Name" 
                      className="pl-12 h-12 rounded-xl border-slate-200"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input 
                      placeholder="Phone Number" 
                      type="tel"
                      className="pl-12 h-12 rounded-xl border-slate-200"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Email Address" 
                    type="email"
                    className="pl-12 h-12 rounded-xl border-slate-200"
                    required
                  />
                </div>

                {/* Vehicle */}
                <div className="relative">
                  <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Vehicle (e.g., 2022 Toyota Camry)" 
                    className="pl-12 h-12 rounded-xl border-slate-200"
                    required
                  />
                </div>

                {/* Service Type */}
                <Select>
                  <SelectTrigger className="h-12 rounded-xl border-slate-200">
                    <SelectValue placeholder="Select Service Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service.toLowerCase().replace(/\s/g, '-')}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Preferred Date/Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input 
                    type="date" 
                    className="h-12 rounded-xl border-slate-200"
                    required
                  />
                  <Input 
                    type="time" 
                    className="h-12 rounded-xl border-slate-200"
                    required
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                  <Textarea 
                    placeholder="Additional details or concerns..." 
                    className="pl-12 min-h-[100px] rounded-xl border-slate-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Booking
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
