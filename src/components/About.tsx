import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Target, Eye, Lightbulb } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Comprehensive Solar Solutions",
    "Expert EV Infrastructure",
    "24/7 Monitoring & Support",
    "Government Subsidy Assistance",
    "Premium Quality Products",
    "Professional Installation",
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To accelerate the transition to sustainable energy by providing cutting-edge solar and EV solutions that empower communities and businesses.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading clean energy service provider in India, driving innovation and excellence in renewable energy solutions.",
    },
    {
      icon: Lightbulb,
      title: "Our Values",
      description:
        "Integrity, Innovation, and Customer-centricity guide everything we do as we work towards a greener future.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/50" ref={ref}>
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Powering a{" "}
              <span className="text-primary">Sustainable Future</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Kriya Cleantech Services is a pioneering clean energy company
              committed to delivering comprehensive solar and electric vehicle
              solutions. With years of expertise, we help residential,
              commercial, and industrial clients embrace sustainable energy
              with confidence.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of certified professionals ensures seamless project
              execution from design to commissioning, backed by ongoing
              maintenance and monitoring services for optimal performance.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
