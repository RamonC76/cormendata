# Consulting Website

Landing page de consultoría (React + Vite), separada del portafolio personal.
Mismo stack que `portafolioweb-frontend`: React + Vite, pensado para
desplegarse en GitHub Pages y consumir el `microservicio-api` existente
en Azure para el chat de IA y el formulario de contacto.

## Convenciones

- Contenido visible (textos, labels): **español**.
- Nombres de archivos, componentes, props, variables y clases CSS: **inglés**.

## Estructura

```
src/
  components/   Componentes de UI (uno por sección)
  config/       api.js — URL base del backend, vía variable de entorno
  data/         Contenido de texto en español, separado de la UI
  styles/       CSS por componente + tokens.css (paleta y tipografía)
```

## URL del backend (desarrollo vs. producción)

La URL del `microservicio-api` NUNCA se hardcodea en el código — se lee
de la variable de entorno `VITE_API_BASE_URL` a través de
`src/config/api.js`, así que no hay que tocar nada al pasar de
desarrollo a producción:

- **`.env`** (no se versiona, cada quien tiene el suyo): usado por
  `npm run dev`. Cópialo desde `.env.example` y apunta a tu backend
  local (ej. `http://localhost:5000`, el puerto real que use tu
  `microservicio-api` al correrlo con `dotnet run`).
- **`.env.production`** (sí se versiona, no tiene secretos): usado por
  `npm run build`. Ya apunta al host real del microservicio en Azure —
  ajústalo si cambia.

Cualquier componente que llame al backend (el formulario de contacto,
y más adelante el chat) importa `apiUrl` de `src/config/api.js` en vez
de escribir la URL directamente:

```js
import { apiUrl } from "../config/api.js";
fetch(apiUrl("/api/contact"), { ... });
```

## Pendientes antes de producción

- Reemplazar `[Nombre de la Empresa]` en `App.jsx` y `Footer.jsx`.
- Reemplazar `CONTACT_EMAIL` y `WHATSAPP_NUMBER` en `ContactSection.jsx`.
- Confirmar el host real en `.env.production` (`VITE_API_BASE_URL`).
- Habilitar CORS en `microservicio-api` para el dominio de GitHub Pages
  donde quede publicado este sitio (frontend y backend viven en
  dominios distintos).
- Conectar el demo de chat de `UseCaseSection.jsx` al endpoint real
  `/api/chat` (por ahora muestra una conversación de ejemplo estática).
- Ajustar `base` en `vite.config.js` al nombre real del repo si se
  despliega en GitHub Pages.

## Desarrollo local

```bash
npm install
cp .env.example .env   # solo la primera vez; ajusta la URL si tu backend usa otro puerto
npm run dev
```

## Deploy a GitHub Pages

```bash
npm run build   # usa .env.production automáticamente
npm run deploy
```
