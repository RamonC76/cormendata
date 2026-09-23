// URL base del microservicio backend (mismo microservicio-api que usa el
// portafolio para el chatbot). Se resuelve con la variable de entorno
// VITE_API_BASE_URL, así que no hay que tocar código al pasar de
// desarrollo a producción — solo el valor en .env / .env.production
// (o la variable configurada en el proveedor de hosting).
//
// - En desarrollo (npm run dev): Vite carga .env.development / .env,
//   normalmente apuntando a tu backend local (ej. http://localhost:5000).
// - En producción (npm run build): Vite carga .env.production, apuntando
//   al microservicio real en Azure.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export function apiUrl(path) {
  return `${API_BASE_URL}${path}`;
}
