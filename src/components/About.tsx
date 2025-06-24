
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "Next.js", "Tailwind CSS",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "GraphQL"
  ];

  return (
    <section id="about" className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-foreground/80 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience 
                in creating web applications that solve real-world problems. My journey 
                started with curiosity about how websites work, and it has evolved into 
                a deep passion for crafting exceptional digital experiences.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I specialize in modern JavaScript frameworks, cloud technologies, and 
                building scalable applications. When I'm not coding, you can find me 
                exploring new technologies, contributing to open-source projects, or 
                sharing knowledge with the developer community.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-foreground/80 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="glass-card hover-lift max-w-md">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                  YN
                </div>
                <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
                <p className="text-foreground/70 mb-4">
                  Building the future, one line of code at a time
                </p>
                <div className="flex justify-center space-x-4 text-sm text-foreground/60">
                  <span>📍 Your Location</span>
                  <span>💼 Available for work</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
