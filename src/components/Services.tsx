import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const iconMap: Record<string, React.ComponentType<any>> = {
  Settings,
  Building2,
  BarChart3,
  Activity,
  Home,
  Zap,
};

const imageMap: Record<string, string> = {
  "operation-maintenance": serviceOm,
  "engineering-procurement-construction": serviceEpc,
  "asset-management": serviceAsset,
  "performance-monitoring": serviceMonitoring,
  "pm-suryaghar": serviceSuryaghar,
  "ev-charging": serviceEv,
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Comprehensive{" "}
            <span className="text-secondary">Clean Energy</span> Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From solar installations to EV charging infrastructure, we offer
            end-to-end solutions for all your clean energy needs.
          </p>
        </motion.div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-16 lg:space-y-24">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Settings;
            const isEven = idx % 2 === 0;
            const serviceImage = imageMap[service.id];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <motion.div
                  className={`relative group ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={serviceImage}
                      alt={service.title}
                      className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-secondary/90 backdrop-blur-sm text-secondary-foreground rounded-full shadow-lg">
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium text-sm">{service.shortTitle}</span>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      {service.subServices.filter(s => s.isPopular).length > 0 && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-kriya-yellow/90 backdrop-blur-sm text-foreground rounded-full shadow-lg">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-xs font-semibold">
                            {service.subServices.filter(s => s.isPopular).length} Popular
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 hidden lg:block" />
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.15 + 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                      Service {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Sub-services List */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.subServices.map((sub, subIdx) => (
                      <motion.div
                        key={subIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: idx * 0.15 + subIdx * 0.05 + 0.3 }}
                        className="flex items-start gap-2 group/item"
                      >
                        <CheckCircle2
                          className={`h-5 w-5 mt-0.5 flex-shrink-0 transition-colors ${
                            sub.isPopular
                              ? "text-secondary"
                              : "text-muted-foreground group-hover/item:text-secondary"
                          }`}
                        />
                        <span
                          className={`text-sm leading-tight ${
                            sub.isPopular
                              ? "font-medium text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {sub.title}
                          {sub.isPopular && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 bg-kriya-yellow/20 text-xs text-foreground rounded-full">
                              Popular
                            </span>
                          )}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link to={`/services/${service.id}`}>
                    <Button
                      className="group/btn bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl border border-border/50">
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-heading font-semibold text-foreground mb-1">
                Need a Custom Solution?
              </h4>
              <p className="text-muted-foreground text-sm">
                Let's discuss your specific clean energy requirements
              </p>
            </div>
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground whitespace-nowrap"
            >
              Get Free Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
