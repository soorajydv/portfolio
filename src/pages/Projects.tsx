import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Meetpoint",
      subtitle: "SaaS Appointment Platform",
      description: "Scalable backend supporting real-time audio/video/chat and wallet-based payments. Containerized production setup using Docker.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "WebRTC", "Docker", "Stripe", "eSewa", "Khalti", "PayPal"],
      features: [
        "Real-time audio/video/chat functionality",
        "Wallet-based payment integration",
        "Appointment booking system",
        "Docker containerized deployment"
      ]
    },
    {
      title: "Vroom Nepal",
      subtitle: "Ride Sharing App (Backend)",
      description: "Backend for ride-sharing mobile app with comprehensive booking and management. JWT authentication, RBAC, and real-time communication.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT", "RBAC"],
      features: [
        "JWT authentication and role-based access control",
        "Admin management dashboard",
        "Ride booking, inquiry & review management",
        "Invoice generation and real-time chat"
      ]
    },
    {
      title: "Astrology API Platform",
      subtitle: "API Service",
      description: "Modular API system providing charting, matchmaking, and astrological insights with subscription-based plans and pricing tiers.",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "JWT"],
      features: [
        "Kundali chart generation (D1, D9, D10, D60)",
        "Compatibility analysis system",
        "Subscription plans with rate limiting",
        "API analytics and usage logs"
      ]
    },
    {
      title: "Interactive Map System",
      subtitle: "Seed Bank Management",
      description: "Website to display locations of seed banks on map with add/update/delete operations and location-based data visualization.",
      technologies: ["Node.js", "Express", "PostgreSQL", "OpenStreetMap", "Leaflet.js"],
      features: [
        "Interactive map visualization",
        "CRUD operations for locations",
        "Data visualization on map",
        "OpenStreetMap API integration"
      ]
    },
    {
      title: "Backend for E-Learning Platform",
      subtitle: "MOOC Platform",
      description: "Full backend for online learning platform with course management, video streaming, and payment integration.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "Prisma", "Stripe"],
      features: [
        "Course management system",
        "Video upload and streaming",
        "Real-time Q&A chat",
        "Payment integration"
      ]
    },
    {
      title: "Restaurant Website",
      subtitle: "E-commerce",
      description: "Full-stack website for restaurant with menu management, ordering, and online payments.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: [
        "Menu management",
        "Online ordering system",
        "Payment processing",
        "Order tracking"
      ]
    },
    {
      title: "Vehicle Renting Website",
      subtitle: "Rental Platform",
      description: "Vehicle rental platform with booking, availability management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "Vehicle listing and search",
        "Booking management",
        "Availability calendar",
        "Admin dashboard"
      ]
    },
    {
      title: "Fonepay Integration",
      subtitle: "NPM Package",
      description: "Custom NPM package for Fonepay payment gateway integration in Node.js applications.",
      technologies: ["Node.js", "TypeScript", "NPM"],
      features: [
        "Payment gateway wrapper",
        "TypeScript support",
        "Easy integration",
        "Type definitions included"
      ]
    },
    {
      title: "School Management System",
      subtitle: "SaaS Product",
      description: "Full-stack SaaS product for managing schools with multi-role access and comprehensive features.",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
      features: [
        "Multi-role access (Admin, Teacher, Student)",
        "Attendance tracking",
        "Assignment and grading",
        "Event management"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 pb-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-24 left-16 w-36 h-36 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-10 dark:opacity-20 animate-pulse" />
        <div className="absolute bottom-16 right-20 w-32 h-32 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-3xl opacity-15 dark:opacity-25 animate-pulse" style={{ animationDelay: '1.2s' }} />
        <motion.div
          className="absolute top-2/3 left-1/4 w-24 h-24 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full blur-2xl opacity-15 dark:opacity-25"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 section-padding mt-[3rem]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Building scalable applications from idea to production
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                      {project.subtitle}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                            <span className="text-cyan-500 mr-2 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline"
                          className="bg-white/50 dark:bg-white/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;