import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-xl shadow-2xl border border-border p-4 md:p-5">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                    <Cookie className="w-4 h-4 text-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      Cookie Preferences
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      We use cookies to enhance your browsing experience, serve personalized content, 
                      and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={declineCookies}
                    className="flex-1 md:flex-none text-xs h-8"
                  >
                    Decline
                  </Button>
                  <Button 
                    variant="accent" 
                    size="sm" 
                    onClick={acceptCookies}
                    className="flex-1 md:flex-none text-xs h-8"
                  >
                    Accept All
                  </Button>
                  <button 
                    onClick={declineCookies}
                    className="p-1.5 hover:bg-slate-100 rounded-md transition-colors md:hidden"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
