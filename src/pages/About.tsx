import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "Next.js", "Tailwind CSS",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "GraphQL"
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Animated CSS Background (Copied from Projects) */}
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
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Passionate developer with a love for creating innovative solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="prose prose-lg">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300"
                >
                  I'm a passionate full-stack developer with over 3 years of experience 
                  in creating web applications that solve real-world problems. My journey 
                  started with curiosity about how websites work, and it has evolved into 
                  a deep passion for crafting exceptional digital experiences.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  I specialize in modern JavaScript frameworks, cloud technologies, and 
                  building scalable applications. When I'm not coding, you can find me 
                  exploring new technologies, contributing to open-source projects, or 
                  sharing knowledge with the developer community.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-3 mt-8"
              >
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/20 dark:to-purple-900/20 backdrop-blur-lg border border-cyan-200 dark:border-cyan-700 rounded-full text-sm font-medium text-cyan-800 dark:text-cyan-300 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
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
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl"
                  >
                    <img 
                      src="profile.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                    Full Stack Developer
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Building the future, one line of code at a time
                  </p>
                  <div className="flex justify-center space-x-4 text-sm text-slate-500 dark:text-slate-500">
                    <span>📍 Kathmandu, Nepal</span>
                    <span>💼 Available for work</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;