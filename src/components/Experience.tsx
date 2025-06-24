
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance.",
      technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
      type: "Full-time"
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with design teams to create exceptional user experiences. Improved application performance by 40% through optimization techniques.",
      technologies: ["React", "Vue.js", "Sass", "JavaScript", "Firebase"],
      type: "Full-time"
    },
    {
      title: "Web Developer Intern",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Assisted in building company website and internal tools. Gained experience in full-stack development and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      type: "Internship"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2016 - 2020",
      description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
      type: "Education"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy",
      period: "2019",
      description: "Intensive program covering modern web development technologies and best practices.",
      type: "Certification"
    }
  ];

  return (
    <section id="experience" className="py-20 section-padding bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Experience & Education
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={exp.title} 
                  className="glass-card hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-lg font-semibold">
                        {exp.title}
                      </CardTitle>
                      <Badge variant="outline" className="w-fit border-blue-500/20 text-blue-400">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="text-foreground/70">
                      <p className="font-medium">{exp.company}</p>
                      <p className="text-sm">{exp.period}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Education & Certifications
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={edu.degree} 
                  className="glass-card hover-lift"
                  style={{ animationDelay: `${(index + experiences.length) * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-lg font-semibold">
                        {edu.degree}
                      </CardTitle>
                      <Badge variant="outline" className="w-fit border-teal-500/20 text-teal-400">
                        {edu.type}
                      </Badge>
                    </div>
                    <div className="text-foreground/70">
                      <p className="font-medium">{edu.institution}</p>
                      <p className="text-sm">{edu.period}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
