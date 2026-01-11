import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center mt-4 pt-16 sm:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Solar panels background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/70" />
      </div>

      <div className="relative z-10 w-full py-12 sm:py-16 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center w-full">
            {/* Centered Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary-foreground text-center max-w-4xl"
            >
              <motion.span
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 sm:px-4 py-1.5 bg-secondary/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-secondary/30"
              >
                🌞 Leading Clean Energy Solutions
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4 sm:mb-6"
              >
                Empowering{" "}
                <span className="text-kriya-yellow">Clean Energy</span>{" "}
                Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 mx-auto max-w-3xl"
              >
                At Kriya Cleantech Services, we provide comprehensive,
                high-performance, and future-ready clean energy solutions that
                ensure maximum efficiency and long-term sustainability.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 sm:px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-6 sm:px-8 py-3 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Our Services
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 lg:pt-12 border-t border-primary-foreground/20 max-w-4xl mx-auto"
              >
                {[
                  { value: "450+", label: "Projects Completed" },
                  { value: "25+", label: "Years of Experienced Team" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-kriya-yellow mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg text-primary-foreground/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;