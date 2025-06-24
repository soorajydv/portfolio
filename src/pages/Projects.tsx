import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-Commerce Platform",
      description: "A revolutionary e-commerce solution with AI recommendations, real-time analytics, and advanced payment processing. Built with cutting-edge technologies for optimal performance.",
      technologies: ["React", "Node.js", "AI/ML", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Real-time Collaboration Suite",
      description: "Advanced task management with real-time collaboration, video calls, file sharing, and AI-powered productivity insights.",
      technologies: ["Next.js", "WebRTC", "Socket.io", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Immersive Weather Experience",
      description: "3D weather visualization with interactive maps, AR integration, and climate change analytics dashboard.",
      technologies: ["Three.js", "React", "WebGL", "AR.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive deep learning model visualization with real-time training monitoring and performance analytics.",
      technologies: ["Python", "TensorFlow", "D3.js", "WebGL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Animated CSS Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-24 left-16 w-36 h-36 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-16 right-20 w-32 h-32 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '1.2s' }} />
        <motion.div
          className="absolute top-2/3 left-1/4 w-24 h-24 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full blur-2xl opacity-25"
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

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A showcase of innovative solutions that push the boundaries of technology
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
                className="group"
              >
                <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-500 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute top-4 right-4 flex space-x-2"
                    >
                      <Button size="icon" className="h-10 w-10 bg-white/20 backdrop-blur-md hover:bg-white/30">
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                      <Button size="icon" className="h-10 w-10 bg-white/20 backdrop-blur-md hover:bg-white/30">
                        <Github className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-white/80 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4 pt-4">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1 border-purple-500/50 hover:bg-purple-500/20 text-white hover:text-white"
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
  );
};

export default Projects;
