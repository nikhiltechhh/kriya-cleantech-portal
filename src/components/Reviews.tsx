import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useAnimation } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "G. Anil Kumar",
    role: "Google User",
    location: "Google User",
    rating: 5,
    review:
      "Very fast and quality work Saturday bank approval Sunday installation completed Monday APCPDCL meter fixed Friday subsidy credited our account Thank you Kriya cleantech.",
    avatar: "AK",
  },
  {
    name: "Moni Murali",
    role: "Google User",
    location: "Google User",
    rating: 5,
    review:
      "Kriya cleantech services these guys are providing best service with affordable prices and we get quick response from their customer support.",
    avatar: "MM",
  },
  {
    name: "Rajulapati Likitha",
    role: "Google User",
    location: "Google User",
    rating: 5,
    review:
      "Great service and quick response from customer care. I strongly recommend you to try kriya cleantech services.",
    avatar: "RL",
  },
  {
    name: "Srinivas Reddy",
    role: "Google User",
    location: "Google User",
    rating: 5,
    review:
      "Professional EPC services with attention to detail. The team handled everything from permits to commissioning. Very satisfied!",
    avatar: "SR",
  },
  {
    name: "Rushi Kumar Nitta",
    role: "Google User",
    location: "Google User",
    rating: 5,
    review:
      "Its very good services company",
    avatar: "RK",
  },
  {
    name: "Santhi Prakash",
    role: "Google User",
    location: "Google User",
    rating: 5,
    review:
      "Great service, ontime implementation",
    avatar: "AP",
  },
];

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);

  // Duplicate reviews for infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews];

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    if (!isDragging && width > 0) {
      const startAutoScroll = async () => {
        await controls.start({
          x: [-width / 2, 0],
          transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          },
        });
      };
      startAutoScroll();
    }
  }, [width, controls, isDragging]);

  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop();
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our services.
          </p>
          <p className="text-sm text-gray-500 italic">
            👆 Drag to explore • Auto-scrolling
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient Overlays */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-green-50 via-green-50/80 to-transparent z-10 pointer-events-none" /> */}

          {/* Draggable Carousel */}
          <motion.div
            ref={carouselRef}
            className="cursor-grab active:cursor-grabbing"
            style={{ x }}
            animate={controls}
            drag="x"
            dragConstraints={{ left: -width / 2, right: 0 }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <div className="flex gap-6 py-4">
              {duplicatedReviews.map((review, idx) => (
                <motion.div
                  key={`${review.name}-${idx}`}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative group flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px]"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Quote Icon */}
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100 group-hover:text-blue-200 transition-colors" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 mb-6 leading-relaxed min-h-[120px]">
                    "{review.review}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center text-white font-semibold shadow-md">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {review.role} 
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;