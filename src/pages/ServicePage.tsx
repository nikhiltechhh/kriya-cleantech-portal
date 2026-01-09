import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <IconComponent className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
                {service.title}
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/80 max-w-3xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sub-services Section */}
      <section className="py-16">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {subService.title}
                    </h3>
                  </div>
                  {subService.isPopular && (
                    <span className="flex items-center gap-1 px-3 py-1 bg-kriya-yellow/20 text-foreground rounded-full text-xs font-medium">
                      <Star className="h-3 w-3 text-kriya-yellow fill-kriya-yellow" />
                      Popular
                    </span>
                  )}
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

      {/* Benefits Section */}
      <section className="py-16 bg-muted/50">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Why Choose <span className="text-primary">Kriya Cleantech</span>{" "}
                for {service.shortTitle}?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                <a
                  href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
                    `Hi, I'm interested in your ${service.title} services. Please provide more information.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Get Free Quote via WhatsApp
                  </Button>
                </a>
                <a href={`tel:${companyInfo.phone}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Call: {companyInfo.phone}
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
            Explore Other Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((otherService, idx) => {
                const OtherIcon = iconMap[otherService.icon] || Settings;
                return (
                  <motion.div
                    key={otherService.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={`/services/${otherService.id}`}
                      className="block bg-card rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <OtherIcon className="h-6 w-6 text-primary" />
                      </div>
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
