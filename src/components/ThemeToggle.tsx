
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="relative h-12 w-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg shadow-purple-500/25"
      >
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === "dark" ? 180 : 0,
            scale: theme === "dark" ? 0 : 1 
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Sun className="h-6 w-6 text-yellow-400" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === "dark" ? 0 : -180,
            scale: theme === "dark" ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Moon className="h-6 w-6 text-blue-300" />
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
