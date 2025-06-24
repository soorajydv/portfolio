
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Float } from "@react-three/drei";

function AnimatedCube() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial color="#06b6d4" />
      </Box>
    </Float>
  );
}

const About = () => {
  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "Next.js", "Tailwind CSS",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "GraphQL"
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedCube />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
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
              <div className="prose prose-lg text-white/90">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg leading-relaxed mb-6"
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
                  className="text-lg leading-relaxed"
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
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg border border-cyan-500/30 rounded-full text-sm font-medium text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 cursor-default"
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
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-500 max-w-md">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl"
                  >
                    YN
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Full Stack Developer
                  </h3>
                  <p className="text-white/70 mb-4">
                    Building the future, one line of code at a time
                  </p>
                  <div className="flex justify-center space-x-4 text-sm text-white/60">
                    <span>📍 Your Location</span>
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
