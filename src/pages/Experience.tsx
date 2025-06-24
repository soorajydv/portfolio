import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer (Node.js)",
      company: "Vroom Nepal Pvt. Ltd",
      period: "11/2024 - Present",
      description: "Contributing to the development of a ride-sharing platform by building scalable backend features and optimizing performance. Collaborated with cross-functional teams to deliver seamless user experiences and robust system architecture.",
      technologies: ["Node.js", "Express", "MongoDB", "REST APIs"],
      type: "Full-time",
      achievements: [
        "Built key features including user authentication, role-based authorization, and admin panel",
        "Developed modules for review and rating, invoice generation, inquiry handling, and ride booking",
        "Optimized backend performance for scalable system growth",
        "Collaborated with frontend developers to integrate APIs for seamless user experience",
        "Contributed to feature design discussions aligned with business goals"
      ]
    },
    {
      title: "Internship in Backend Development",
      company: "NexGen Innovations Pvt. Ltd",
      period: "08/2024 - 11/2024",
      description: "Assisted in building backend systems by designing APIs and integrating database models. Participated in team collaboration and debugging to ensure reliable system performance.",
      technologies: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
      type: "Internship",
      achievements: [
        "Designed and implemented RESTful APIs for key features",
        "Integrated user authentication and role-based access control",
        "Developed calendar, hostel, and library management features",
        "Assisted in debugging and resolving backend issues",
        "Participated in requirements gathering and feature specification refinement"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "Nepal Engineering College",
      period: "11/2019 - 09/2024",
      description: "Pursued a comprehensive program in computer engineering, focusing on software development, system design, and emerging technologies.",
      type: "Education",
      gpa: null // GPA not provided in the data
    }
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

      {/* Main Section Content */}
      <div className="relative z-10 section-padding mt-[3rem]">
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

          {/* Regular Grid View */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-white/20 to-emerald-500 rounded-full opacity-30" />

            {/* Experience Column */}
            <div className="space-y-12 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
                <h2 className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Professional Experience
                </h2>
              </motion.div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -5, rotateY: 2 }}
                >
                  <Card 
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-transparent relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent"
                      animate={{
                        borderColor: ['rgba(0,255,255,0.5)', 'rgba(255,0,255,0.5)', 'rgba(0,255,255,0.5)'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        borderImage: 'linear-gradient(45deg, cyan, magenta, cyan) 1',
                        borderImageSlice: 1
                      }}
                    />
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                          {exp.title}
                        </CardTitle>
                        <Badge className="w-fit bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-black">
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
                            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-black hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
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

            {/* Education Column */}
            <div className="space-y-12 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse" />
                <h2 className="text-3xl font-semibold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                  Education & Certifications
                </h2>
              </motion.div>

              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (index + experiences.length) * 0.2 }}
                  whileHover={{ y: -5, rotateY: -2 }}
                >
                  <Card 
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-transparent relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent"
                      animate={{
                        borderColor: ['rgba(0,255,255,0.5)', 'rgba(255,0,255,0.5)', 'rgba(0,255,255,0.5)'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        borderImage: 'linear-gradient(45deg, cyan, magenta, cyan) 1',
                        borderImageSlice: 1
                      }}
                    />
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-xl font-semibold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                          {edu.degree}
                        </CardTitle>
                        <Badge className="w-fit bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-black">
                          {edu.type}
                        </Badge>
                      </div>
                      <div className="text-teal-100">
                        <p className="font-medium text-lg">{edu.institution}</p>
                        <p className="text-sm text-teal-200/80">{edu.period}</p>
                        {edu.gpa && (
                          <p className="text-sm text-teal-300 font-medium">GPA: {edu.gpa}</p>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-teal-100 leading-relaxed">
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
  );
};

export default Experience;