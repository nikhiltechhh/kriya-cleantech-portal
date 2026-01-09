import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    location: "Eluru, AP",
    rating: 5,
    review:
      "Kriya Cleantech exceeded our expectations! Their solar installation has cut our electricity bills by 70%. The team was professional and completed the work on time.",
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Homeowner",
    location: "Vijayawada, AP",
    rating: 5,
    review:
      "Excellent service from start to finish. They helped us with PM Suryaghar subsidy and the entire process was smooth. Highly recommended!",
    avatar: "PS",
  },
  {
    name: "Dr. Venkat Rao",
    role: "Hospital Administrator",
    location: "Guntur, AP",
    rating: 5,
    review:
      "We installed a 100kW system for our hospital. The performance monitoring and maintenance services are exceptional. Great investment!",
    avatar: "VR",
  },
  {
    name: "Srinivas Reddy",
    role: "Factory Manager",
    location: "Kakinada, AP",
    rating: 5,
    review:
      "Professional EPC services with attention to detail. The team handled everything from permits to commissioning. Very satisfied!",
    avatar: "SR",
  },
  {
    name: "Lakshmi Devi",
    role: "School Principal",
    location: "Rajahmundry, AP",
    rating: 5,
    review:
      "Our school's solar project was completed flawlessly. The children learn about clean energy while we save on electricity. Thank you Kriya!",
    avatar: "LD",
  },
  {
    name: "Anil Prasad",
    role: "EV Owner",
    location: "Nellore, AP",
    rating: 5,
    review:
      "Got my home EV charger installed by Kriya. Quick, clean installation and great after-sales support. They really know their stuff!",
    avatar: "AP",
  },
];

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="reviews"
      className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5"
      ref={ref}
    >
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our services.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-kriya-yellow fill-kriya-yellow"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{review.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {review.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {review.role} • {review.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
