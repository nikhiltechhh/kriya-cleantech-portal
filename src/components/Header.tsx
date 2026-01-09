import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" },
    { name: "Reviews", path: "/#reviews" },
    { name: "Gallery", path: "/#gallery" },
    { name: "Contact", path: "/#contact" },
  ];

  const scrollToSection = (path: string) => {
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.img
              src={logo}
              alt="Kriya Cleantech Services"
              className="h-12 md:h-16 w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.path.startsWith("/#") ? (
                  <button
                    onClick={() => scrollToSection(link.path)}
                    className={`text-sm font-medium transition-colors hover:text-secondary ${
                      isScrolled ? "text-foreground" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-secondary ${
                      isScrolled ? "text-foreground" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <motion.button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary ${
                  isScrolled ? "text-foreground" : "text-foreground"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-card rounded-xl shadow-xl border border-border overflow-hidden z-50"
                  >
                    <div className="p-2">
                      {services.map((service, idx) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {service.title}
                            </span>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                              {service.description}
                            </p>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Link
                to="/#contact"
                onClick={() => scrollToSection("/#contact")}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 ${
              isMobileMenuOpen ? "hamburger-open" : ""
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`hamburger-line w-6 ${
                isMobileMenuOpen ? "w-6" : "w-6"
              }`}
            />
            <span
              className={`hamburger-line transition-all duration-300 ${
                isMobileMenuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`hamburger-line w-6 ${
                isMobileMenuOpen ? "w-6" : "w-6"
              }`}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-card mt-4 rounded-xl shadow-xl border border-border"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.path.startsWith("/#") ? (
                      <button
                        onClick={() => {
                          scrollToSection(link.path);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-3 rounded-lg hover:bg-muted font-medium transition-colors"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        className="block px-4 py-3 rounded-lg hover:bg-muted font-medium transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* Mobile Services Dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-muted font-medium transition-colors"
                  >
                    Services
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden ml-4 border-l-2 border-secondary/30"
                      >
                        {services.map((service, idx) => (
                          <motion.div
                            key={service.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              to={`/services/${service.id}`}
                              className="block px-4 py-2.5 text-sm hover:text-primary transition-colors"
                            >
                              {service.shortTitle}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-2"
                >
                  <button
                    onClick={() => {
                      scrollToSection("/#contact");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg transition-colors"
                  >
                    Contact Us
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
