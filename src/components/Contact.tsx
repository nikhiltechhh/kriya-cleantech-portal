import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { companyInfo } from "@/data/services";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const message = encodeURIComponent(
      `*New Contact Form Submission*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email || "Not provided"}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Subject:* ${formData.subject || "General Inquiry"}\n` +
        `*Message:* ${formData.message || "No message"}`
    );

    const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message is ready to send!",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      value: companyInfo.phone,
      link: `tel:${companyInfo.phone}`,
    },
    {
      icon: Mail,
      title: "Email",
      value: companyInfo.email,
      link: `mailto:${companyInfo.email}`,
    },
    {
      icon: MapPin,
      title: "Address",
      value: companyInfo.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(
        companyInfo.address
      )}`,
    },
    {
      icon: Clock,
      title: "Office Timing",
      value: companyInfo.timing,
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Contact Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4 px-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Ready to go solar or install an EV charger? Contact us today for a
            free consultation and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-foreground mb-5 sm:mb-6">
              Contact Information
            </h3>
            <div className="space-y-5 sm:space-y-6">
              {contactDetails.map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 0 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-3 sm:gap-4 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <detail.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-foreground text-sm sm:text-base">
                      {detail.title}
                    </h4>
                    {detail.link ? (
                      <a
                        href={detail.link}
                        target={detail.title === "Address" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-colors text-sm sm:text-base break-words"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm sm:text-base break-words">{detail.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-6 sm:mt-8"
            >
              <a
                href={`https://wa.me/${companyInfo.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] text-white font-medium rounded-full hover:bg-[#20BD5C] transition-colors shadow-lg text-sm sm:text-base"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                Chat on WhatsApp
              </a>
            </motion.div>

           
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-card border border-border/50">
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-foreground mb-5 sm:mb-6">
                Send us a Message
              </h3>
              <div className="space-y-3.5 sm:space-y-4">
                <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
                  />
                </div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
                />
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 resize-none text-sm sm:text-base"
                />
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;