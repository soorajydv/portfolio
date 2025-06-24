import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Architect",
      company: "TechNova Innovations",
      period: "2023 - Present",
      description: "Leading a team of 12 developers in building next-generation applications using AI, blockchain, and AR/VR technologies. Spearheaded the development of a platform serving 1M+ users.",
      technologies: ["React", "Node.js", "AI/ML", "Blockchain", "AWS", "Microservices"],
      type: "Full-time",
      achievements: ["Increased system performance by 300%", "Led team to 3 major product launches", "Implemented CI/CD reducing deployment time by 80%"]
    },
    {
      title: "Lead Frontend Engineer",
      company: "Digital Dynamics Corp",
      period: "2021 - 2023",
      description: "Revolutionized user experiences through innovative UI/UX implementations and advanced frontend architectures. Built scalable applications used by Fortune 500 companies.",
      technologies: ["React", "Vue.js", "Three.js", "WebGL", "TypeScript", "GraphQL"],
      type: "Full-time",
      achievements: ["Built 15+ enterprise applications", "Improved user engagement by 250%", "Mentored 8 junior developers"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupLab Ventures",
      period: "2020 - 2021",
      description: "Developed MVP applications for multiple startups, focusing on rapid prototyping and scalable architectures. Worked with cutting-edge technologies in a fast-paced environment.",
      technologies: ["React", "Python", "PostgreSQL", "Docker", "AWS"],
      type: "Full-time",
      achievements: ["Delivered 8 successful MVPs", "Reduced development time by 60%", "Achieved 99.9% uptime"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "MIT - Massachusetts Institute of Technology",
      period: "2018 - 2020",
      description: "Specialized in AI, Machine Learning, and Distributed Systems. Thesis on 'Quantum Computing Applications in Web Development'.",
      type: "Education",
      gpa: "3.9/4.0"
    },
    {
      degree: "Advanced AI & Machine Learning Certification",
      institution: "Stanford University",
      period: "2021",
      description: "Intensive program covering deep learning, neural networks, and AI implementation in production systems.",
      type: "Certification",
      credential: "Credential ID: ST-AI-2021-042"
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Animated CSS Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-16 w-32 h-32 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-28 left-24 w-28 h-28 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '1.8s' }} />
        <motion.div
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-fuchsia-400 to-pink-500 rounded-full blur-2xl opacity-25"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 270, 360],
          }}
          transition={{
            duration: 12,
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
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Experience & Education
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              My journey through innovation, leadership, and continuous learning
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-semibold mb-8 text-center lg:text-left bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              >
                Professional Experience
              </motion.h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ y: -5, rotateY: 2 }}
                  >
                    <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-500">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            {exp.title}
                          </CardTitle>
                          <Badge className="w-fit bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300">
                            {exp.type}
                          </Badge>
                        </div>
                        <div className="text-white/80">
                          <p className="font-medium text-lg">{exp.company}</p>
                          <p className="text-sm text-white/60">{exp.period}</p>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-white/80 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-white/90 mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-white/70 flex items-start">
                                <span className="text-cyan-400 mr-2">▪</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
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

            {/* Education */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-semibold mb-8 text-center lg:text-left bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"
              >
                Education & Certifications
              </motion.h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: (index + experiences.length) * 0.2 }}
                    whileHover={{ y: -5, rotateY: -2 }}
                  >
                    <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-500">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                            {edu.degree}
                          </CardTitle>
                          <Badge className="w-fit bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-300">
                            {edu.type}
                          </Badge>
                        </div>
                        <div className="text-white/80">
                          <p className="font-medium text-lg">{edu.institution}</p>
                          <p className="text-sm text-white/60">{edu.period}</p>
                          {edu.gpa && (
                            <p className="text-sm text-emerald-400 font-medium">GPA: {edu.gpa}</p>
                          )}
                          {edu.credential && (
                            <p className="text-sm text-emerald-400 font-medium">{edu.credential}</p>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/80 leading-relaxed">
                          {edu.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
