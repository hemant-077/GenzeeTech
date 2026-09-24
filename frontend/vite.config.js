import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  define: {
    "process.env": {}, // ✅ Fix for "process is not defined"
  },

  server: {
    host: true, // ✅ Allow access from external IPs/domains
    allowedHosts: [
      "genzeetech.com",
      "www.genzeetech.com",
    ],
  },
});
