import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Settings,
  Building2,
  BarChart3,
  Activity,
  Home,
  Zap,
  ArrowRight,
  Star,
  CheckCircle2,
  Battery,
} from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

// Service images
import serviceOm from "@/assets/service-om.jpg";
import serviceEpc from "@/assets/service-epc.jpg";
import serviceAsset from "@/assets/service-asset.jpg";
import serviceMonitoring from "@/assets/service-monitoring.jpg";
import serviceSuryaghar from "@/assets/service-suryaghar.jpg";
import serviceEv from "@/assets/service-ev.jpg";
import serviceBess from "@/assets/service-bess.jpg";

const iconMap: Record<string, React.ComponentType<any>> = {
  Settings,
  Building2,
  BarChart3,
  Activity,
  Home,
  Zap,
  Battery,
};

const imageMap: Record<string, string> = {
  "operation-maintenance": serviceOm,
  "engineering-procurement-construction": serviceEpc,
  "asset-management": serviceAsset,
  "performance-monitoring": serviceMonitoring,
  "pm-suryaghar": serviceSuryaghar,
  "ev-charging": serviceEv,
  "battery-energy-storage": "https://cdn.prod.website-files.com/64d891332f7859038cf0db9c/6822b37731e64a3eb12b4ec6_webflow%20cover%20pic%20BESS.jpg",
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <motion.section 
      id="services" 
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background overflow-hidden" 
      ref={ref}
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ scale }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4 px-4">
            Comprehensive{" "}
            <span className="text-secondary">Clean Energy</span> Solutions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            From solar installations to EV charging infrastructure, we offer
            end-to-end solutions for all your clean energy needs.
          </p>
        </motion.div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Settings;
            const isEven = idx % 2 === 0;
            const serviceImage = imageMap[service.id];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <motion.div
                  className={`relative group w-full ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.2 + 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                    <img
                      src={serviceImage}
                      alt={service.title}
                      className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/90 backdrop-blur-sm text-secondary-foreground rounded-full shadow-lg">
                      <IconComponent className="h-4 sm:h-5 w-4 sm:w-5" />
                      <span className="font-medium text-xs sm:text-sm">{service.shortTitle}</span>
                    </div>

                    {/* Stats Overlay */}
                    {/* <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex gap-2">
                      {service.subServices.filter(s => s.isPopular).length > 0 && (
                        <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-kriya-yellow/90 backdrop-blur-sm text-foreground rounded-full shadow-lg">
                          <Star className="h-3 sm:h-4 w-3 sm:w-4 fill-current" />
                          <span className="text-xs font-semibold">
                            {service.subServices.filter(s => s.isPopular).length} Popular
                          </span>
                        </div>
                      )}
                    </div> */}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 hidden lg:block" />
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`w-full ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  initial={{ opacity: 0, x: 0 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.2 + 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {/* <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-secondary uppercase tracking-wider">
                      Service {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div> */}

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground mb-3 sm:mb-4">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Sub-services List */}
                  <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
  {service.subServices.map((sub, subIdx) => (
    <motion.div
      key={subIdx}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        delay: idx * 0.2 + subIdx * 0.08 + 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="flex items-start gap-2 group/item"
    >
      <CheckCircle2
        className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0 text-muted-foreground group-hover/item:text-secondary transition-colors"
      />
      <span className="text-xs sm:text-sm leading-tight text-muted-foreground">
        {sub.title}
      </span>
    </motion.div>
  ))}
</div>


                  {/* CTA Button */}
                  <Link to={`/services/${service.id}`}>
                    <Button
                      className="group/btn bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                      size="lg"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

       
      </div>
    </motion.section>
  );
};

export default Services;