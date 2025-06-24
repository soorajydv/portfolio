import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/", // Use "/my-app/" for subdirectory deployment
  build: {
    outDir: "dist", // Output directory for build
    sourcemap: false, // Disable sourcemaps for production
    minify: "esbuild", // Use esbuild for minification (fast and efficient)
    assetsDir: "assets", // Default assets directory
    rollupOptions: {
      output: {
        // Ensure consistent chunk naming for cache busting
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash][extname]`,
      },
    },
  },
}));