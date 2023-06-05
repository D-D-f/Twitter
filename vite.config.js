import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";
import sassPlugin from "vite-plugin-sass";

export default defineConfig({
  plugins: [reactRefresh(), sassPlugin(), react()],
});
