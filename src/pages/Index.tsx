import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Dribbble, ArrowDown, Database, Server, Box, Cloud, Code, FileCode, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/soorajydv", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sooraj-yadav-37708b1a5", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
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

const OrbitingIcons = ({ radius = 140, containerSize = 350, iconSize = "w-8 h-8", textSize = "text-[9px]" }: { radius?: number; containerSize?: number; iconSize?: string; textSize?: string }) => (
  <motion.div className="absolute inset-0 pointer-events-none" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
    {TECH_STACK.map((tech, index) => {
      const angle = (index / TECH_STACK.length) * 2 * Math.PI;
      return (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
          style={{ transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)` }}
        >
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 dark:opacity-20"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-15 dark:opacity-25"
          animate={{ scale: [1, 1.2, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-20 py-20">
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
                  <span className="block text-foreground dark:text-white">ER. Suraj</span>
                  <span className="block bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Yadav</span>
                </h1>
              </motion.div>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl sm:text-2xl lg:text-3xl font-light text-foreground/70 dark:text-slate-300">
                Computer Engineer{' '}<span className="text-foreground/30 dark:text-slate-600">•</span>{' '}Full Stack Developer
              </motion.p>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-foreground/50 dark:text-slate-400 max-w-md leading-relaxed">
                Building scalable, high-performance applications and APIs. Skilled in system architecture, database optimization, and real-time communication using Socket.io, WebRTC & microservices. LLM integration, RAG implementations & chatbot development expert.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90 text-white border-0 px-8 py-6 text-base font-semibold rounded-full shadow-lg shadow-purple-500/25">View Portfolio</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-2 border-white/20 hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-base font-semibold rounded-full">Let's Talk</Button>
                </Link>
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
                  <img src="/profile.png" alt="Suraj Yadav" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-cyan-500/30" />
                </div>

                {/* Mobile/Small: smaller orbit */}
                <div className="absolute inset-0 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 lg:hidden pointer-events-none">
                  <OrbitingIcons radius={140} containerSize={350} iconSize="w-8 h-8" textSize="text-[9px]" />
                </div>

                {/* Desktop: larger orbit */}
                <div className="hidden lg:block absolute inset-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 pointer-events-none">
                  <OrbitingIcons radius={250} containerSize={600} iconSize="w-10 h-10" textSize="text-xs" />
                </div>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex justify-center mt-16">
            <Link to="/about" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-foreground/40 dark:text-slate-500 hover:text-foreground dark:hover:text-white hover:border-white/30 transition-all duration-300">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;