import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Star, Check, Filter, ChevronLeft, ChevronRight, Truck, Shield, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

import partBrakes from "@/assets/part-brakes.jpg";
import partEngine from "@/assets/part-engine.jpg";
import partSuspension from "@/assets/part-suspension.jpg";
import partTransmission from "@/assets/part-transmission.jpg";
import partBattery from "@/assets/part-battery.jpg";
import partWheels from "@/assets/part-wheels.jpg";

const parts = [
  { 
    id: 1, 
    name: "Premium Brake Kit", 
    category: "Parts",
    type: "Brakes",
    price: 14999, 
    rating: 4.9, 
    reviews: 128,
    image: partBrakes,
    inStock: true,
    badge: "Best Seller"
  },
  { 
    id: 2, 
    name: "Engine Oil 5W-30 (4L)", 
    category: "Chemicals",
    type: "Lubricants",
    price: 2499, 
    rating: 4.8, 
    reviews: 256,
    image: partEngine,
    inStock: true,
    badge: null
  },
  { 
    id: 3, 
    name: "Sport Suspension Kit", 
    category: "Accessories",
    type: "Suspension",
    price: 44999, 
    rating: 4.7, 
    reviews: 89,
    image: partSuspension,
    inStock: true,
    badge: "New Arrival"
  },
  { 
    id: 4, 
    name: "Transmission Fluid ATF", 
    category: "Chemicals",
    type: "Fluids",
    price: 1649, 
    rating: 4.9, 
    reviews: 142,
    image: partTransmission,
    inStock: true,
    badge: null
  },
  { 
    id: 5, 
    name: "AGM Battery 12V 70Ah", 
    category: "Parts",
    type: "Electrical",
    price: 9499, 
    rating: 4.6, 
    reviews: 156,
    image: partBattery,
    inStock: true,
    badge: "Popular"
  },
  { 
    id: 6, 
    name: "Alloy Wheel Set 17\"", 
    category: "Accessories",
    type: "Wheels",
    price: 72499, 
    rating: 4.8, 
    reviews: 73,
    image: partWheels,
    inStock: false,
    badge: "Premium"
  },
];

const featuredParts = [
  {
    title: "Premium Brake Systems",
    subtitle: "Safety First",
    description: "High-performance brake kits from leading manufacturers",
    image: partBrakes,
    discount: "20% OFF",
  },
  {
    title: "Performance Wheels",
    subtitle: "Style & Performance",
    description: "Alloy wheels that combine aesthetics with durability",
    image: partWheels,
    discount: "15% OFF",
  },
  {
    title: "Engine Components",
    subtitle: "Power & Reliability",
    description: "Genuine engine parts for optimal performance",
    image: partEngine,
    discount: "10% OFF",
  },
];

const mainCategories = ["All", "Accessories", "Parts", "Chemicals", "Services"];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const PartsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  // Auto-rotate featured carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredParts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const filteredParts = parts.filter(part => {
    const matchesCategory = activeCategory === "All" || part.category === activeCategory;
    const matchesSearch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          part.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="parts" ref={ref} className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Featured Parts Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={featuredIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-64 md:h-80"
              >
                <img
                  src={featuredParts[featuredIndex].image}
                  alt={featuredParts[featuredIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 text-accent text-xs font-bold tracking-widest uppercase mb-2"
                  >
                    <Tag className="w-4 h-4" />
                    {featuredParts[featuredIndex].discount}
                  </motion.span>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-white/70 text-sm mb-1"
                  >
                    {featuredParts[featuredIndex].subtitle}
                  </motion.p>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-4xl font-bold text-white mb-3"
                  >
                    {featuredParts[featuredIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-300 text-sm max-w-md mb-6"
                  >
                    {featuredParts[featuredIndex].description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button variant="accent">
                      Shop Now
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {featuredParts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setFeaturedIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === featuredIndex ? "w-8 bg-accent" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block"
            >
              Shop Online
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-display font-bold text-foreground"
            >
              Parts, Accessories & Chemicals
            </motion.h2>
          </div>

          {/* Search */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative w-full lg:w-80"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search parts, accessories..." 
              className="pl-10 h-10 text-sm border-border bg-white rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 mb-8 overflow-x-auto pb-2"
        >
          <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
          {mainCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === category
                  ? "bg-slate-900 text-white"
                  : "bg-white text-muted-foreground hover:bg-slate-100 border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Benefits Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {[
            { icon: Truck, text: "Free Delivery Over ₱5,000" },
            { icon: Shield, text: "Genuine Parts Warranty" },
            { icon: Tag, text: "Best Price Guarantee" },
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2 py-3 bg-white rounded-lg border border-border">
              <benefit.icon className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-foreground hidden sm:block">{benefit.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Parts Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {filteredParts.map((part, index) => (
            <motion.div
              key={part.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * index }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden">
                <img 
                  src={part.image} 
                  alt={part.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {part.badge && (
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-accent text-white text-[10px] font-semibold">
                    {part.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-slate-900/80 text-white text-[10px] font-medium">
                  {part.category}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ShoppingCart className="w-4 h-4 text-slate-600" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                    {part.type}
                  </span>
                  {part.inStock ? (
                    <span className="flex items-center gap-1 text-[10px] text-green-600">
                      <Check className="w-3 h-3" /> In Stock
                    </span>
                  ) : (
                    <span className="text-[10px] text-accent">Pre-order</span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-1">
                  {part.name}
                </h3>
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-accent text-accent" />
                    <span className="text-xs font-medium text-foreground">{part.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({part.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-foreground">{formatPrice(part.price)}</p>
                  <Button variant="outline" size="sm" className="h-8 text-xs px-3">
                    View Details
                  </Button>
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
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartsSection;
