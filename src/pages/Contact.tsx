
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Icosahedron, Float } from "@react-three/drei";

function AnimatedIcosahedron() {
  return (
    <Float speed={1.6} rotationIntensity={1} floatIntensity={1.8}>
      <Icosahedron args={[1]}>
        <meshStandardMaterial color="#3b82f6" />
      </Icosahedron>
    </Float>
  );
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent Successfully! 🚀",
        description: "Thank you for reaching out! I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@yourname.dev",
      href: "mailto:hello@yourname.dev",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: "#",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", color: "from-blue-500 to-blue-700" },
    { name: "GitHub", color: "from-gray-600 to-gray-800" },
    { name: "Twitter", color: "from-cyan-400 to-blue-500" },
    { name: "Discord", color: "from-indigo-500 to-purple-600" }
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedIcosahedron />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent flex items-center">
                    <MessageCircle className="mr-3 text-cyan-400" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-white/5 border-white/20 focus:border-cyan-500/50 text-white placeholder:text-white/50 h-12"
                        />
                      </motion.div>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-white/5 border-white/20 focus:border-cyan-500/50 text-white placeholder:text-white/50 h-12"
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 border-white/20 focus:border-cyan-500/50 text-white placeholder:text-white/50 h-12"
                      />
                    </motion.div>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Textarea
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-white/5 border-white/20 focus:border-cyan-500/50 text-white placeholder:text-white/50 resize-none"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 py-4 text-lg font-medium shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            Sending...
                          </motion.div>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -5, rotateY: 5 }}
                    >
                      <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-500 cursor-pointer">
                        <CardContent className="p-6">
                          <a 
                            href={item.href} 
                            className="flex items-center space-x-4 text-white hover:text-cyan-400 transition-colors duration-300"
                          >
                            <div className={`p-4 bg-gradient-to-r ${item.color} rounded-xl shadow-lg`}>
                              <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-medium text-lg">{item.title}</h4>
                              <p className="text-white/70">{item.value}</p>
                            </div>
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/25">
                  <CardContent className="p-8 text-center">
                    <h4 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      Let's Create Something Amazing
                    </h4>
                    <p className="text-white/80 mb-6">
                      Whether you need a cutting-edge web application, AI integration, 
                      or innovative digital solutions, I'm here to bring your vision to life.
                    </p>
                    <div className="flex justify-center space-x-4">
                      {socialLinks.map((social, index) => (
                        <motion.div
                          key={social.name}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + index * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Button 
                            size="sm" 
                            className={`bg-gradient-to-r ${social.color} hover:shadow-lg transition-all duration-300`}
                          >
                            {social.name}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
