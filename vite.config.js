import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig, loadEnv } from "vite";

dotenv.config();

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    build: {
      outDir: "dist",
      sourcemap: true
    },
    plugins: [react()],
    server: {
      host: true,
      port: 3001
    }
  });
};
