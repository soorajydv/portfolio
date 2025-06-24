import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const highlightedProjects = [
    {
      title: "🎓 Mindmorph – MOOC-Based E-Learning Platform",
      description: "A feature-rich online education platform inspired by Unacademy, enabling seamless learning for students and educators with microservices architecture.",
      technologies: ["Node.js", "PostgreSQL", "MongoDB", "Django", "React", "Socket.io", "Prisma ORM"],
      features: [
        "Secure user authentication (OAuth, JWT, bcrypt) with Google and Facebook login",
        "Microservices architecture with 3 backend servers",
        "Real-time chat (Socket.io), Q&A modules, and course feedback",
        "Video upload, streaming, and course management",
        "eSewa payment integration and certification generation"
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "🚗 Vroom Nepal – Ride Sharing App (Backend)",
      description: "Scalable backend service powering a ride-sharing mobile app across Nepal with comprehensive booking and management features.",
      technologies: ["Node.js", "Express", "MongoDB"],
      features: [
        "Role-based authentication and admin dashboard",
        "Booking, cancellation, and ride history management",
        "Review, rating, and invoice generation modules",
        "Inquiry and support system APIs",
        "Collaboration with frontend/mobile team"
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "🔮 Astrology API Platform (Backend)",
      description: "API platform for astrologers and apps to access Vedic astrology features with comprehensive chart generation and compatibility analysis.",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      features: [
        "Kundali generation (D1, D9, D10, D60 charts)",
        "Kundali Milan (8-point compatibility system)",
        "Subscription system with rate-limited API access",
        "OAuth-based authentication and token management",
        "Analytics and usage logs per user"
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "🏫 School/College Management System (SaaS)",
      description: "A full-stack SaaS product for managing schools and colleges efficiently with multi-role access and comprehensive management features.",
      technologies: ["Node.js", "React.js", "MongoDB", "Docker"],
      features: [
        "Multi-role access (Admin, Teacher, Student)",
        "Attendance tracking, assignment uploads, grading",
        "Event and notice management",
        "User profiles with document upload",
        "Deployed in Dockerized microservices environment"
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  const otherProjects = [
    {
      title: "🍽️ Online Food Shop",
      description: "A Django-based web app that enables users to browse, order, and pay for food items online with secure payment integration.",
      technologies: ["Django", "PostgreSQL", "HTML/CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "🎫 Online Ticket Booking System (OTBS)",
      description: "A web-based system for managing bus ticket bookings with route, seat, and schedule control.",
      technologies: ["Django", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "🧩 Meetpoint – SaaS Collaboration Platform",
      description: "A modular SaaS platform for service management and team collaboration with subscription-based access.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "🗺️ Interactive Map – Key Location Management",
      description: "A tool for managing and visualizing key places across Nepal using QGIS with interactive features.",
      technologies: ["Python", "Django", "QGIS", "Leaflet.js"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Animated CSS Background */}
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
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              A showcase of innovative solutions that push the boundaries of technology
            </p>
          </motion.div>

          {/* Highlighted Projects */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-200 text-center">
              Highlighted Projects
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {highlightedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                        {project.title}
                      </CardTitle>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-700 dark:text-slate-300">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                              <span className="text-blue-500 mr-2 mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4 pt-4">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button 
                          variant="outline"
                          className="flex-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-200 text-center">
              Other Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (highlightedProjects.length * 0.1) + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4 pt-4">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button 
                          variant="outline"
                          className="flex-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
