// Updated Contact Page with Modern Layout
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent 🚀",
        description: "I'll get back to you soon."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "soorajydv9@gmail.com", href: "mailto:soorajydv9@gmail.com" },
    { icon: Phone, label: "Phone", value: "+9779819865988", href: "tel:+9779819865988" },
    { icon: MapPin, label: "Location", value: "Pepsicola, Kathmandu" }
  ];

  return (
    <section className="min-h-screen pt-20 relative  overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl mt-[3rem] sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Let’s create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-start space-x-4 bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-cyan-500/30"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white/90">{label}</p>
                  <a
                    href={href || "#"}
                    className="text-white/70 hover:text-cyan-400 transition"
                  >
                    {value}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Message Me</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-transparent border-white/20 text-white placeholder:text-white/50"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-transparent border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-white/20 text-white placeholder:text-white/50"
                  />
                  <Textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-transparent border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-lg font-medium py-3"
                  >
                    {isSubmitting ? "Sending..." : <><Send className="mr-2" /> Send</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
