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
} from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<any>> = {
  Settings,
  Building2,
  BarChart3,
  Activity,
  Home,
  Zap,
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Settings;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-6 lg:p-8 h-full border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Sub-services */}
                  <div className="space-y-2 mb-6">
                    {service.subServices.slice(0, 3).map((sub, subIdx) => (
                      <div
                        key={subIdx}
                        className="flex items-center gap-2 text-sm"
                      >
                        {sub.isPopular ? (
                          <Star className="h-4 w-4 text-kriya-yellow fill-kriya-yellow" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        )}
                        <span
                          className={`${
                            sub.isPopular
                              ? "font-medium text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {sub.title}
                        </span>
                        {sub.isPopular && (
                          <span className="text-xs px-2 py-0.5 bg-kriya-yellow/20 text-kriya-yellow rounded-full font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                    ))}
                    {service.subServices.length > 3 && (
                      <p className="text-xs text-muted-foreground pl-4">
                        +{service.subServices.length - 3} more services
                      </p>
                    )}
                  </div>

                  {/* Read More Button */}
                  <Link to={`/services/${service.id}`}>
                    <Button
                      variant="outline"
                      className="w-full group/btn border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
