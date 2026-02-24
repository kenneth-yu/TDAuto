import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    reactRouter(),
    tailwindcss(),
    tsconfigPaths(),
    imagetools(),
    // Netlify plugin only for Netlify deployments (enables serverless build)
    ...(process.env.NETLIFY ? [netlifyPlugin()] : []),
  ],
});
