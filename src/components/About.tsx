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

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Kriya Cleantech Services is a rapidly growing clean energy solutions company
              committed to advancing India's transition toward a sustainable and
              low-carbon future. With strong capabilities in Solar Operations & Maintenance
              (O&M), Engineering, Procurement & Construction (EPC), Monitoring Solutions,
              EV Charging Infrastructure, and Energy Storage, we deliver integrated
              solutions across the renewable energy value chain.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              We operate across residential, commercial, and industrial segments,
              executing rooftop, ground-mount, and utility-scale solar projects with a
              focus on asset performance, operational excellence, and long-term value
              creation. Our solutions are designed to enhance energy efficiency, improve
              system uptime, and ensure predictable returns for asset owners and
              stakeholders.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              As a key growth driver, Kriya Cleantech Services has established a dedicated
              PM Surya Ghar vertical aligned with national renewable energy initiatives.
              In 2025, we successfully completed over 350+ residential rooftop solar
              installations, demonstrating strong execution capability, scalable
              processes, and increasing market penetration. This vertical continues to
              expand steadily, reinforcing our leadership in the distributed solar
              segment.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              To strengthen future readiness and technological differentiation, we have
              launched a strategic Battery Energy Storage Systems (BESS) vertical.
              Supported by an in-house Research & Development (R&D) team, we are actively
              developing next-generation storage solutions aimed at regulatory
              endorsement and commercial deployment. Our BESS roadmap focuses on
              large-scale integrated battery systems for residential, commercial, and
              industrial applications, enabling energy resilience, peak load management,
              and deeper renewable integration.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Driven by innovation, disciplined execution, and sustainability-led growth,
              Kriya Cleantech Services is positioned as a reliable long-term partner for
              investors, asset owners, and institutions seeking scalable and future-ready
              clean energy solutions. We remain committed to building resilient energy
              infrastructure while delivering measurable environmental and economic
              impact.
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