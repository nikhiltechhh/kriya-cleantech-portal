import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
} from "lucide-react";
import { services, companyInfo } from "@/data/services";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },

    { name: "Gallery", path: "/gallery" },
    { name: "Download", path: "/download" },
  ];

  const socialLinks = [
  {
    icon: Instagram,
    link: "https://www.instagram.com/kriyacleantechservices/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/company/kriya-cleantech-services/",
    label: "LinkedIn",
  },
  {
    icon: Youtube,
    link: "https://www.youtube.com/@KriyaCleantech",
    label: "YouTube",
  },
];


  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Company Info */}
          {/* Company Info */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <img
    src="https://i.ibb.co/rGFy6nxn/Kriya-CS.jpg"
    alt="Kriya Cleantech Services"
    className="h-16 w-auto mb-4"
  />

  <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
    Driving a greener future with expert Solar O&M, EPC, Monitoring Solutions, and EV Charging Services.
  </p>

  {/* Social Links */}
  <div className="flex gap-2 mb-4">
    {socialLinks.map((social, idx) => (
      <a
        key={idx}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
      >
        <social.icon className="h-4 w-4" />
      </a>
    ))}
  </div>

  {/* Map Embed */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.6 }}
    className="rounded-lg overflow-hidden shadow-lg h-[160px] sm:h-[180px] w-full"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.0748930776526!2d81.0291008!3d16.683770600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3613b813eaec19%3A0xfdeaef20daf6b05f!2sKriya%20Cleantech%20Services!5e1!3m2!1sen!2sin!4v1768049342818!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Kriya Cleantech Services Location"
    />
  </motion.div>
</motion.div>


          {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 ,}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-heading font-semibold mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3 ">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-heading font-semibold mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/services/${service.id}`}
                      className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-heading font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  {companyInfo.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  {companyInfo.timing}
                </span><br></br>
              </li>
               <li className="flex gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Support Line Available 24x7
                </span><br></br>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Kriya Cleantech Services. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="#"
                className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-all duration-300 z-40 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
