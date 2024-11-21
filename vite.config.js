import { defineConfig } from "vite";
export default defineConfig({
  base: "",
  build: {
    rollupOptions: {
      input: [
        "./index.html",
        "./about.html",
        "./start.html",
        "./login.html",
        "./account.html",
        "./projects.html",
        "./help.html",
        "./signup.html",
        "./welcome.html",
        "./template1.html",
        "./temp2.html",
      ],
    },
  },
});