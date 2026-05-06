import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Node.js/Express", level: 95 },
        { name: "MongoDB/PostgreSQL", level: 90 },
        { name: "Python/Django", level: 75 },
        { name: "Redis/Kafka", level: 85 }
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Frontend",
      skills: [
        { name: "React/TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "HTML/CSS/Tailwind", level: 90 },
        { name: "REST APIs", level: 95 }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", level: 90 },
        { name: "AWS/DigitalOcean", level: 75 },
        { name: "CI/CD GitHub Actions", level: 85 },
        { name: "cPanel", level: 80 }
      ]
    },
    {
      title: "AI & LLM",
      skills: [
        { name: "LLM Integration", level: 90 },
        { name: "RAG Implementation", level: 85 },
        { name: "Chatbot Development", level: 90 },
        { name: "Vector Databases", level: 80 }
      ],
      color: "from-yellow-500 to-orange-600"
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Technologies I use to build scalable, high-performance applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-500 h-full"
                >
                  <CardHeader>
                    <CardTitle className={`text-xl font-semibold text-center bg-gradient-to-r ${category.color || 'from-cyan-500 to-purple-500'} bg-clip-text text-transparent`}>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skill.name} 
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-white/90">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-cyan-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={skill.level} 
                            className="h-2 bg-white/10 rounded-full overflow-hidden"
                          />
                          <motion.div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color || 'from-cyan-500 to-purple-500'} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Socket.io", "WebRTC", "Microservices", "Prisma", "JWT", "RBAC", "WebSockets", "API Integration", "Stripe", "eSewa", "Khalti", "PayPal"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-sm font-medium text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 cursor-default"
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

export default Skills;