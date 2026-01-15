import { Button } from "@/components/ui/button";
import { Menu, Phone, X, Search, User, ShoppingCart, ChevronDown, Package, Wrench, Settings, Shield, Droplets } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { 
      icon: Package, 
      label: "Accessories", 
      description: "Enhance your vehicle experience",
      href: "#parts" 
    },
    { 
      icon: Settings, 
      label: "Parts", 
      description: "Quality auto parts for all makes",
      href: "#parts" 
    },
    { 
      icon: Droplets, 
      label: "Chemicals", 
      description: "Oils, fluids & maintenance",
      href: "#parts" 
    },
    { 
      icon: Wrench, 
      label: "Services", 
      description: "Expert repair & maintenance",
      href: "#services" 
    },
    { 
      icon: Shield, 
      label: "Warranty", 
      description: "Protection for your investment",
      href: "#about" 
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-slate-900 text-white py-2"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between text-xs">
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-medium">NEW STORE LAUNCH</span>
            </p>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-orange transition-colors flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5" />
                Search
              </a>
              <a href="#" className="hover:text-orange transition-colors flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                Login
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="sticky top-0 z-50 bg-background border-b border-border"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
   <motion.a 
  href="#" 
  className="flex items-center gap-5"
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <img
    src="/logoTA-removebg-preview.png"
    alt="TIGERS MARK Logo"
    className="w-20 object-contain"
  />

   <div className="leading-tight">
    <h1 className="text-base font-bold tracking-tight">
      TIGERS AUTO MECHANIC SHOP
    </h1>
    <p className="text-[12px] text-muted-foreground uppercase tracking-wide">
      Supply and Repair
    </p>
  </div>
</motion.a>


            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <a href="tel:+1234567890" className="hidden lg:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>(123) 456-7890</span>
              </a>
              <div className="hidden md:flex items-center gap-2 border-l border-border pl-3">
                <button className="flex items-center gap-1.5 text-xs font-medium hover:text-orange transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="bg-orange text-white text-[10px] px-1.5 py-0.5 rounded-full">0</span>
                  Cart
                </button>
              </div>
              <Button variant="accent" size="sm" className="hidden md:flex text-xs h-8 px-4">
                Book Service
              </Button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="hidden lg:block border-t border-border bg-slate-50/50">
          <div className="container mx-auto px-4 lg:px-8">
            <nav className="flex items-center justify-center gap-0">
              {categories.map((category, index) => (
                <motion.a
                  key={category.label}
                  href={category.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                  className="group flex items-center gap-3 px-6 py-4 hover:bg-white transition-colors border-b-2 border-transparent hover:border-orange"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center group-hover:border-orange/30 transition-colors">
                    <category.icon className="w-4 h-4 text-slate-500 group-hover:text-orange transition-colors" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-foreground group-hover:text-orange transition-colors">
                        {category.label}
                      </span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-tight max-w-[120px]">
                      {category.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-border"
            >
              <nav className="py-4 px-4 space-y-1">
                {categories.map((category, index) => (
                  <motion.a
                    key={category.label}
                    href={category.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
                      <category.icon className="w-4 h-4 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{category.label}</p>
                      <p className="text-[11px] text-muted-foreground">{category.description}</p>
                    </div>
                  </motion.a>
                ))}
                <div className="pt-3 border-t border-border mt-3">
                  <Button variant="accent" size="default" className="w-full text-sm">
                    Book Service
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
