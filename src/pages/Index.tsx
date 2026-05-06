import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowDown, ArrowUp, Database, Server, Box, Cloud, Code, FileCode, Cog, MapPin, Calendar, Building, GraduationCap, Mail, Send, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/soorajydv", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sooraj-yadav-37708b1a5", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:soorajydv@example.com", label: "Email" },
];

const TECH_STACK = [
  { name: "Node.js", icon: Code, color: "text-green-500" },
  { name: "Express.js", icon: Server, color: "text-gray-500" },
  { name: "React", icon: Code, color: "text-cyan-500" },
  { name: "TypeScript", icon: FileCode, color: "text-blue-500" },
  { name: "MongoDB", icon: Database, color: "text-green-600" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-600" },
  { name: "Docker", icon: Box, color: "text-blue-400" },
  { name: "AWS", icon: Cloud, color: "text-orange-500" },
  { name: "Redis", icon: Database, color: "text-red-500" },
  { name: "Kafka", icon: Cog, color: "text-gray-600" },
  { name: "Python", icon: Code, color: "text-yellow-500" },
  { name: "Django", icon: Server, color: "text-green-700" },
];

const EXPERIENCES = [
  {
    title: "Backend Developer",
    company: "Cellapp",
    location: "Kathmandu, Nepal",
    period: "03/2025 - Current",
    description: "Designing and deploying scalable backend supporting real-time audio/video/chat and wallet-based payments.",
    achievements: ["Real-time audio/video/chat using Socket.io and WebRTC", "Wallet-based payment integration", "Docker containerization"],
    technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "WebRTC", "Docker", "Stripe"]
  },
  {
    title: "Backend Developer",
    company: "Vroom Nepal Pvt. Ltd",
    location: "Kathmandu, Nepal",
    period: "11/2024 - 02/2025",
    description: "Implemented JWT authentication, RBAC, and admin dashboard.",
    achievements: ["JWT authentication and RBAC", "Real-time Socket.io communication", "Ride booking and invoice modules"],
    technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT"]
  },
  {
    title: "Freelancing",
    company: "Self Employed",
    location: "Remote",
    period: "09/2022 - Currently",
    description: "Building scalable backend systems and APIs for various client projects.",
    achievements: ["Astrology API Platform", "Interactive Map System", "End-to-end Docker deployment"],
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "Redis"]
  }
];

const PROJECTS = [
  { title: "Meetpoint", subtitle: "SaaS Appointment Platform", description: "Scalable backend with real-time audio/video/chat and wallet payments.", technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "WebRTC", "Docker", "Stripe", "eSewa", "Khalti", "PayPal"] },
  { title: "Vroom Nepal", subtitle: "Ride Sharing App (Backend)", description: "JWT authentication, RBAC, admin dashboard, ride booking.", technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT", "RBAC"] },
  { title: "Astrology API Platform", subtitle: "API Service", description: "Modular API for charting, matchmaking, subscription plans.", technologies: ["Node.js", "Express", "MongoDB", "Redis", "JWT"] },
  { title: "Interactive Map System", subtitle: "Seed Bank Management", description: "Map visualization with CRUD operations.", technologies: ["Node.js", "Express", "PostgreSQL", "OpenStreetMap", "Leaflet.js"] },
  { title: "Backend for E-Learning", subtitle: "MOOC Platform", description: "Course management, video streaming, payment integration.", technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "Prisma", "Stripe"] },
  { title: "School Management System", subtitle: "SaaS Product", description: "Multi-role access, attendance, assignments, events.", technologies: ["React", "Node.js", "MongoDB", "Docker"] },
];

const TECH_LOGOS = [
  { name: "Node.js", icon: Code, color: "text-green-500", bg: "bg-green-500" },
  { name: "Express", icon: Server, color: "text-gray-500", bg: "bg-gray-500" },
  { name: "React", icon: Code, color: "text-cyan-500", bg: "bg-cyan-500" },
  { name: "TypeScript", icon: FileCode, color: "text-blue-500", bg: "bg-blue-500" },
  { name: "MongoDB", icon: Database, color: "text-green-600", bg: "bg-green-600" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-600", bg: "bg-blue-600" },
  { name: "Docker", icon: Box, color: "text-blue-400", bg: "bg-blue-400" },
  { name: "AWS", icon: Cloud, color: "text-orange-500", bg: "bg-orange-500" },
  { name: "Redis", icon: Database, color: "text-red-500", bg: "bg-red-500" },
  { name: "Kafka", icon: Cog, color: "text-gray-600", bg: "bg-gray-600" },
  { name: "Python", icon: Code, color: "text-yellow-500", bg: "bg-yellow-500" },
  { name: "Django", icon: Server, color: "text-green-700", bg: "bg-green-700" },
  { name: "Socket.io", icon: Cog, color: "text-gray-500", bg: "bg-gray-500" },
  { name: "WebRTC", icon: Cog, color: "text-blue-500", bg: "bg-blue-500" },
  { name: "Prisma", icon: Database, color: "text-indigo-500", bg: "bg-indigo-500" },
  { name: "Stripe", icon: CreditCard, color: "text-purple-500", bg: "bg-purple-500" },
];

const OrbitingIcons = ({ radius = 140, iconSize = "w-8 h-8", textSize = "text-[9px]" }: { radius?: number; iconSize?: string; textSize?: string }) => (
  <motion.div className="absolute inset-0 pointer-events-none" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
    {TECH_STACK.map((tech, index) => {
      const angle = (index / TECH_STACK.length) * 2 * Math.PI;
      return (
        <motion.div key={tech.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + index * 0.1 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" style={{ transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)` }}>
          <div className={`${iconSize} rounded-full bg-white/90 dark:bg-black/50 backdrop-blur-xl border border-white/30 dark:border-white/20 flex items-center justify-center shadow-lg`}>
            <tech.icon className={`w-4 h-4 ${tech.color}`} />
          </div>
          <span className={`mt-1 font-medium text-foreground/70 dark:text-slate-300 whitespace-nowrap ${textSize}`}>{tech.name}</span>
        </motion.div>
      );
    })}
  </motion.div>
);

const Index = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 dark:opacity-20" animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-15 dark:opacity-25" animate={{ scale: [1, 1.2, 1], rotate: [360, 180, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
        
        {/* Floating particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 dark:bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen py-20 pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 mb-16 lg:mb-0">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm dark:bg-white/10">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-foreground/70 font-medium">Available for projects</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="block text-foreground dark:text-white">Er. Suraj</span>
                  <span className="block bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Yadav</span>
                </h1>
              </motion.div>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl sm:text-2xl lg:text-3xl font-light text-foreground/70 dark:text-slate-300">Computer Engineer{' '}<span className="text-foreground/30 dark:text-slate-600">•</span>{' '}Full Stack Developer</motion.p>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-foreground/50 dark:text-slate-400 max-w-md leading-relaxed">Building scalable, high-performance applications and APIs. Skilled in system architecture, database optimization, and real-time communication. LLM integration, RAG implementations & chatbot development expert.</motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90 text-white border-0 px-8 py-6 text-base font-semibold rounded-full shadow-lg shadow-purple-500/25">View Portfolio</Button>
                <Button variant="outline" size="lg" className="border-2 border-white/20 hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-base font-semibold rounded-full">Let's Talk</Button>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-4 pt-2">
                <span className="text-sm text-foreground/30 dark:text-slate-500 uppercase tracking-widest">Connect</span>
                <div className="flex gap-2">
                  {SOCIAL_LINKS.map((social) => (
                    <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }} className="w-11 h-11 rounded-full bg-white/5 dark:bg-white/10 border border-white/10 dark:border-white/20 flex items-center justify-center text-foreground/60 dark:text-slate-400 hover:text-foreground dark:hover:text-white hover:border-white/30 transition-all duration-300" aria-label={social.label}>
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-cyan-500/30 blur-xl" />
                <div className="absolute inset-0 w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] rounded-full border border-purple-500/20 animate-pulse" />
                <div className="absolute -inset-4 w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] rounded-full border border-cyan-500/10 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="relative w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl">
                  <img src="/profile.png" alt="Sooraj Yadav" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-cyan-500/30" />
                </div>
                <div className="absolute inset-0 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 lg:hidden pointer-events-none">
                  <OrbitingIcons radius={140} iconSize="w-8 h-8" textSize="text-[9px]" />
                </div>
                <div className="hidden lg:block absolute inset-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 pointer-events-none">
                  <OrbitingIcons radius={250} iconSize="w-10 h-10" textSize="text-xs" />
                </div>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex justify-center mt-12">
            <a href="#about" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-foreground/40 dark:text-slate-500 hover:text-foreground dark:hover:text-white hover:border-white/30 transition-all duration-300">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-10 dark:opacity-20" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 dark:opacity-20" />
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">About Me</h2>
            <p className="text-xl text-slate-700 dark:text-slate-300">Full Stack Developer with Backend Development expertise</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-4">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">Full Stack developer with Backend Development expertise specializing in building scalable, high-performance applications and APIs. Skilled in system architecture design, database optimization, and real-time communication systems using Socket.io, WebRTC, and microservices.</p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">Proficient in Docker-based deployments & GitHub Actions, API integrations, and modular backend development using Node.js, Express, MongoDB, and TypeScript. Capable of taking a project from idea to production including planning, development, testing, and deployment.</p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">Expert in LLM integration, RAG implementations, and chatbot development. Building AI-powered solutions with vector databases.</p>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 pt-4"><MapPin className="w-5 h-5" /><span>Kathmandu, Nepal</span></div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400"><GraduationCap className="w-5 h-5" /><span>Bachelor's in Computer Engineering - Nepal Engineering College (2024)</span></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700">
                <CardContent className="p-8 text-center">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl">
                    <img src="/profile.png" alt="Sooraj Yadav" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Sooraj Yadav</h3>
                  <p className="text-slate-600 dark:text-slate-400">Full Stack Developer</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-10 dark:opacity-15" />
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-10 dark:opacity-15" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</h2>
            <p className="text-xl text-slate-700 dark:text-slate-300">Building scalable applications from idea to production</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} whileHover={{ y: -10 }}>
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-200">{project.title}</CardTitle>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{project.subtitle}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (<Badge key={tech} variant="outline" className="bg-white/50 dark:bg-white/10">{tech}</Badge>))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full blur-3xl opacity-10 dark:opacity-15" />
          <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 dark:opacity-15" />
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</h2>
            <p className="text-xl text-slate-700 dark:text-slate-300">Technologies I work with</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-wrap justify-center gap-4">
            {TECH_LOGOS.map((tech, index) => (
              <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + index * 0.05 }} whileHover={{ scale: 1.1, y: -5 }} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/80 dark:bg-white/10 border border-white/20 dark:border-white/20 shadow-md hover:shadow-lg transition-all cursor-default">
                <div className={`w-6 h-6 rounded-lg ${tech.bg} flex items-center justify-center`}>
                  <tech.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground dark:text-white">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-10 dark:opacity-15" />
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl opacity-10 dark:opacity-15" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</h2>
            <p className="text-xl text-slate-700 dark:text-slate-300">Professional journey</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />
            <div className="space-y-12">
              {EXPERIENCES.map((exp, index) => (
                <motion.div key={exp.title + exp.period} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} className="relative pl-20">
                  <div className="absolute left-5 w-7 h-7 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-white dark:border-slate-900 flex items-center justify-center"><Building className="w-3 h-3 text-white" /></div>
                  <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700">
                    <CardHeader className="pb-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg font-semibold text-slate-800 dark:text-slate-200">{exp.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-1 text-slate-600 dark:text-slate-400"><Building className="w-4 h-4" /><span>{exp.company}</span></div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full"><Calendar className="w-4 h-4" />{exp.period}</div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-500"><MapPin className="w-4 h-4" />{exp.location}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-400 mb-3">{exp.description}</p>
                      <ul className="space-y-1 mb-4">{exp.achievements.map((a, i) => (<li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start"><span className="text-cyan-500 mr-2">•</span>{a}</li>))}</ul>
                      <div className="flex flex-wrap gap-2">{exp.technologies.map((tech) => (<Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>))}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 pb-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-10 dark:opacity-15" />
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-10 dark:opacity-15" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Contact</h2>
            <p className="text-xl text-slate-700 dark:text-slate-300">Let's work together</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 dark:bg-white/10 flex items-center justify-center"><Mail className="w-6 h-6 text-cyan-500" /></div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-slate-600 dark:text-slate-400">soorajydv@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 dark:bg-white/10 flex items-center justify-center"><MapPin className="w-6 h-6 text-purple-500" /></div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-slate-600 dark:text-slate-400">Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                {SOCIAL_LINKS.map((social) => (<motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="w-12 h-12 rounded-full bg-white/10 dark:bg-white/10 flex items-center justify-center text-foreground/70 hover:text-foreground transition-all" aria-label={social.label}><social.icon className="w-5 h-5" /></motion.a>))}
              </div>
            </div>

            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700">
              <CardContent className="p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Name" className="bg-white/50 dark:bg-white/10" />
                  <Input placeholder="Email" type="email" className="bg-white/50 dark:bg-white/10" />
                </div>
                <Input placeholder="Subject" className="bg-white/50 dark:bg-white/10" />
                <Textarea placeholder="Message" rows={4} className="bg-white/50 dark:bg-white/10" />
                <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90 text-white"><Send className="w-4 h-4 mr-2" />Send Message</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500 dark:text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sooraj Yadav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;