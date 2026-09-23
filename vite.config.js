import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ajusta "base" al nombre de tu repo si lo publicas en GitHub Pages
// (igual que en portafolioweb-frontend), por ejemplo:
// base: "/consulting-website/",
export default defineConfig({
    plugins: [react()],
    base: "/trewik/",
    server: {
        watch: {
            // Ignora la carpeta de índice de Visual Studio: si el editor la
            // tiene abierta al mismo tiempo, el watcher de Vite puede chocar
            // con un archivo bloqueado (EBUSY: resource busy or locked).
            ignored: ["**/.vs/**"],
        },
    },
});