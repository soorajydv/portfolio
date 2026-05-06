import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Cellapp",
      location: "Kathmandu, Nepal",
      period: "03/2025 - Current",
      description: "Designing and deploying scalable backend supporting real-time audio/video/chat and wallet-based payments (eSewa, Khalti, Stripe, PayPal). Delivered containerized production setup using Docker.",
      achievements: [
        "Real-time audio/video/chat using Socket.io and WebRTC",
        "Wallet-based payment integration",
        "Docker containerization for reliable deployment"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "WebRTC", "Docker", "Stripe"]
    },
    {
      title: "Backend Developer",
      company: "Vroom Nepal Pvt. Ltd",
      location: "Kathmandu, Nepal",
      period: "11/2024 - 02/2025",
      description: "Implemented JWT authentication, RBAC, and admin dashboard. Built core modules for ride booking, inquiry management, and invoice generation.",
      achievements: [
        "JWT authentication and RBAC",
        "Real-time Socket.io communication",
        "Ride booking and invoice modules"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT"]
    },
    {
      title: "Freelancing",
      company: "Self Employed",
      location: "Remote",
      period: "09/2022 - Currently",
      description: "Building scalable backend systems and APIs for various client projects.",
      achievements: [
        "Astrology API Platform with subscription plans",
        "Interactive Map System for seed bank locations",
        "End-to-end Docker deployment"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "Redis"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 pb-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-24 left-16 w-36 h-36 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-10 dark:opacity-20 animate-pulse" />
        <div className="absolute bottom-16 right-20 w-32 h-32 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-3xl opacity-15 dark:opacity-25 animate-pulse" style={{ animationDelay: '1.2s' }} />
      </div>

      <div className="relative z-10 section-padding mt-[3rem]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300">
              Professional journey
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.period}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 w-7 h-7 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-white dark:border-slate-900 flex items-center justify-center">
                    <Briefcase className="w-3 h-3 text-white" />
                  </div>

                  <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700">
                    <CardHeader className="pb-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                            {exp.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1 text-slate-600 dark:text-slate-400">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-500">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-400 mb-3">
                        {exp.description}
                      </p>
                      <ul className="space-y-1 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                            <span className="text-cyan-500 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
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
        </div>
      </div>
    </div>
  );
};

export default Experience;