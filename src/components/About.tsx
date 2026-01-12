import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Target, Eye, Lightbulb } from "lucide-react";
import MNRE from "@/assets/MNRE_india.png";

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
        "Our mission is to power a cleaner tomorrow by delivering smart, reliable, and future-ready solar, EV, and energy storage solutions. We help homes and businesses cut carbon, optimize energy performance, and transition to clean power with confidence—through innovation, quality, and customer-focused execution.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To enable a resilient, inclusive, and low-carbon energy ecosystem by advancing renewable energy, energy storage, and electric mobility solutions that create long-term environmental and social value while supporting responsible economic growth.",
    },
    {
      icon: Lightbulb,
      title: "Our Values",
      description:
        "Driven by sustainability, powered by innovation, built on integrity, and focused on lasting impact.",
    },
  ];

  const certifications = [
    "https://i.ibb.co/Q3Hxg1nj/832-iso-9001-logo.jpg",
    "https://mnre-pv.nise.res.in/assets/images/headerLogo/Group%2047.png",
    "https://www.presentations.gov.in/wp-content/uploads/2020/06/Skill-India_Preview.png",
    "https://www.apeasternpower.com/resources/cgrf/FormPage/images/logo_b.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9MDuNGQQlPJeiaT4dcpXf90mu1xgSUqthxBairYx0eeqBnWvYnqq07t1BTpT04Hagy74&usqp=CAU",
    "https://i.ibb.co/CkFLbyT/APSPDCL.png"
  ];

  return (
    <section id="about" className="section-padding bg-muted/50" ref={ref}>
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
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

          <p className=" text-muted-foreground mb-6 leading-relaxed text-justify">
              At <span className="font-semibold text-foreground">Kriya Cleantech Services</span>, we are building sustainable energy infrastructure with a clear focus on scale, reliability, and long-term value creation. We operate across{" "}
              <span className="font-semibold text-foreground">Solar Operations & Maintenance (O&M), Engineering, Procurement & Construction (EPC), Monitoring Solutions, and EV Charging Services</span>, delivering integrated clean energy solutions to a diverse customer base.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
              Our portfolio spans <span className="font-semibold text-foreground">residential, commercial, and industrial sectors</span>, covering{" "}
              <span className="font-semibold text-foreground">rooftop, ground-mount, and utility-scale solar projects</span>. By combining technical expertise with performance-driven operations, we help asset owners maximize energy yield, operational efficiency, and asset life.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
              A key growth driver is our <span className="font-semibold text-foreground">PM Surya Ghar</span> vertical, through which we have successfully completed{" "}
              <span className="font-semibold text-foreground">350+ residential rooftop solar installations in 2025</span>, with consistent momentum continuing. This vertical strengthens our presence in the distributed solar market while aligning with national renewable energy initiatives.
            </p>

            <p className="text-muted-foreground leading-relaxed text-justify">
              In parallel, we have launched a strategic <span className="font-semibold text-foreground">Battery Energy Storage Systems (BESS)</span> vertical, supported by an in-house{" "}
              <span className="font-semibold text-foreground">R&D team</span> focused on future-ready energy storage solutions. Our work targets scalable battery integration for{" "}
              <span className="font-semibold text-foreground">residential, commercial, and industrial applications</span>, including large-format systems that enhance grid resilience and renewable energy penetration.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
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

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8">
            Certifications
          </h3>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">

            {certifications.map((imgSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="bg-card rounded-lg p-4 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 aspect-square flex items-center justify-center"
              >
                <img 
                  src={imgSrc} 
                  alt={`Certification ${idx + 1}`}
                  className="w-full h-full object-contain rounded"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;