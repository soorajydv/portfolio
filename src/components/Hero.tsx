
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20 dark:from-blue-900/40 dark:via-purple-900/40 dark:to-teal-900/40" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Your Name</span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up animate-delay-200">
          <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 mb-4 font-light">
            Full Stack Developer
          </p>
        </div>
        
        <div className="animate-fade-in-up animate-delay-400">
          <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            I craft exceptional digital experiences with modern technologies. 
            Passionate about creating scalable applications and beautiful user interfaces.
          </p>
        </div>

        <div className="animate-fade-in-up animate-delay-600 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-medium hover-lift"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white/20 hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium hover-lift"
          >
            Get In Touch
          </Button>
        </div>

        <div className="animate-fade-in-up animate-delay-800 mt-16">
          <a href="#about" className="inline-flex items-center text-foreground/60 hover:text-foreground transition-colors duration-300">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
