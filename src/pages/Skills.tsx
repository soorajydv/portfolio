import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Mastery",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Three.js/WebGL", level: 85 },
        { name: "Advanced CSS/SASS", level: 95 }
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Backend Excellence",
      skills: [
        { name: "Node.js/Express", level: 90 },
        { name: "Python/Django", level: 85 },
        { name: "PostgreSQL/MongoDB", level: 80 },
        { name: "GraphQL/REST APIs", level: 88 }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS/Azure", level: 82 },
        { name: "Docker/Kubernetes", level: 78 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "Microservices", level: 80 }
      ],
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Animated CSS Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-16 right-24 w-32 h-32 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur-3xl opacity-25 animate-pulse" />
        <div className="absolute bottom-24 left-20 w-28 h-28 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <motion.div
          className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-2xl opacity-25"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks I use to build the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-500 h-full">
                  <CardHeader>
                    <CardTitle className={`text-2xl font-semibold text-center bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skill.name} 
                        className="space-y-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-white/90">
                            {skill.name}
                          </span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                            className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={skill.level} 
                            className="h-3 bg-white/10 rounded-full overflow-hidden"
                          />
                          <motion.div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
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

          {/* Floating skill badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["AI/ML", "Blockchain", "WebAssembly", "Progressive Web Apps", "Serverless", "Cybersecurity"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg border border-yellow-500/30 rounded-full text-sm font-medium text-yellow-300 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300 cursor-default"
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
