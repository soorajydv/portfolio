
export function Footer() {
  return (
    <footer className="bg-background/50 border-t border-border/50 py-12 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Portfolio</h3>
            <p className="text-foreground/70">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-foreground/60">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
