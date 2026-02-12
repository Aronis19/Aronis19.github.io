export default defineConfig(({ mode }) => ({
  base: "/Aronis19.github.io/", // 👈 přidej tuto řádku
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
