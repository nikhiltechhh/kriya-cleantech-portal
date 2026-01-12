import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Star,
  Phone,
  Settings,
  Building2,
  BarChart3,
  Activity,
  Home,
  Zap,
} from "lucide-react";
import { services, companyInfo } from "@/data/services";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import pm from "@/assets/pmm.png"; 

const iconMap: Record<string, React.ComponentType<any>> = {
  Settings,
  Building2,
  BarChart3,
  Activity,
  Home,
  Zap,
};

const ServicePage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find((s) => s.id === serviceId);
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Parallax effect for hero image
  const imageY = useTransform(scrollY, [0, 500], [0, 150]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-secondary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || Settings;

  const benefits = [
    "Experienced and certified professionals",
    "Premium quality equipment and materials",
    "Comprehensive warranty and support",
    "24/7 monitoring and maintenance",
    "Government subsidy assistance",
    "Flexible financing options",
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section with Background Image and Wave Cut */}
      <section className="pt-32 pb-24 relative overflow-hidden mt-10 max-w-full">
        {/* Background Image with Overlay and Parallax */}
        <motion.div 
          className="absolute inset-0 z-0 w-full"
          style={{ y: imageY, scale: imageScale }}
        >
          <motion.img
            src={service.heroImage || "/placeholder-hero.jpg"}
            alt={service.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {/* Animated overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        {/* Animated Wave SVG at bottom */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full z-[1] leading-[0] overflow-hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <svg
            className="w-full h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] block"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0,50 C200,90 400,20 600,50 C800,80 1000,30 1200,60 L1200,120 L0,120 Z"
              className="fill-background"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.path>
          </svg>
        </motion.div>

        {/* Content with staggered animations */}
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 mb-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div 
                className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconComponent className="h-8 w-8 text-primary-foreground" />
              </motion.div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                {service.title}
              </h1>
            </motion.div>

            <motion.p 
              className="text-lg text-primary-foreground/90 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sub-services Section with scroll animations */}
      <section className="py-16 -mt-8 w-full max-w-full">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Our <span className="text-secondary">{service.shortTitle}</span>{" "}
              Services
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              We offer a comprehensive range of {service.shortTitle.toLowerCase()}{" "}
              services tailored to meet your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.subServices.map((subService, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3 } 
                }}
                className="bg-card rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {subService.title}
                    </h3>
                  </div>
                 
                 
                </div>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Our expert team delivers professional {subService.title.toLowerCase()}{" "}
                  solutions with unmatched quality and reliability. We ensure
                  complete satisfaction with every project.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with dynamic animations */}
      <section className="py-16 bg-muted/50 w-full max-w-full">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Why Choose <span className="text-primary">Kriya Cleantech</span>{" "}
                for {service.shortTitle}?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                    </motion.div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
            >
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Get a Free Quote
              </h3>
              <p className="text-muted-foreground mb-6">
                Interested in our {service.shortTitle} services? Contact us today
                for a free consultation and quote.
              </p>
              <div className="space-y-4">
                <motion.a
                  href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
                    `Hi, I'm interested in your ${service.title} services. Please provide more information.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Get Free Quote via WhatsApp
                  </Button>
                </motion.a>
                <motion.a 
                  href={`tel:${companyInfo.phone}`} 
                  className="w-full block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Call: {companyInfo.phone}
                  </Button>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
{service.id === "pm-suryaghar" && (
 <section className="py-6 sm:py-12 md:py-16 bg-muted/30">
  <div className="container-custom mx-auto px-3 sm:px-4">
    <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-card">
      <img
        src={pm}
        alt={service.title}
        className="w-full h-[180px] sm:h-[300px] md:h-[380px] lg:h-[440px] object-cover"
      />
    </div>
  </div>
</section>
)}
      {/* Other Services with enhanced animations */}
      <section className="py-16 w-full max-w-full">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore Other Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((otherService, idx) => {
                const OtherIcon = iconMap[otherService.icon] || Settings;
                return (
                  <motion.div
                    key={otherService.id}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.02,
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <Link
                      to={`/services/${otherService.id}`}
                      className="block bg-card rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 group"
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <OtherIcon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {otherService.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {otherService.description}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default ServicePage;