import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, GraduationCap, Globe, Languages } from "lucide-react";

const About = () => {
  const technologies = [
    "Node.js", "Express.js", "React", "TypeScript", "MongoDB", "PostgreSQL",
    "Docker", "AWS", "Redis", "Kafka", "Python", "Django",
    "Socket.io", "WebRTC", "LLM Integration", "RAG", "Chatbot"
  ];

  const languages = ["English", "Nepali", "Hindi", "Maithali", "Bhojpuri"];

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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Full Stack Developer with Backend Development expertise
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  Full Stack developer with Backend Development expertise specializing in building scalable, high-performance applications and APIs. Skilled in system architecture design, database optimization, and real-time communication systems using Socket.io, WebRTC, and microservices.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  Proficient in Docker-based deployments & GitHub Actions, API integrations, and modular backend development using Node.js, Express, MongoDB, and TypeScript. Capable of taking a project from idea to production including planning, development, testing, and deployment while ensuring security, maintainability, and clean architecture.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  Expert in LLM integration, RAG implementations, and chatbot development. Building AI-powered solutions with vector databases and modern ML integrations.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
              >
                <MapPin className="w-5 h-5" />
                <span>Kathmandu, Nepal</span>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-purple-500" />
                  <h3 className="text-lg font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Bachelor's in Computer Engineering</p>
                  <p className="text-sm text-slate-500">Nepal Engineering College, Kathmandu</p>
                  <p className="text-sm text-slate-500">Graduated: September 2024</p>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Languages className="w-5 h-5 text-cyan-500" />
                  <h3 className="text-lg font-semibold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-white/10 dark:bg-white/5 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-md w-full">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl"
                  >
                    <img 
                      src="/profile.png" 
                      alt="Suraj Yadav" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                    ER. Suraj Yadav
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Full Stack Developer
                  </p>
                  <div className="flex justify-center gap-4 text-sm text-slate-500 dark:text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Kathmandu
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Freelancing
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/20 dark:to-purple-900/20 backdrop-blur-lg border border-cyan-200 dark:border-cyan-700 rounded-full text-sm font-medium text-cyan-800 dark:text-cyan-300 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;