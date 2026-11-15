// API base URL
// - `npm run dev`   -> local backend (http://localhost:8000/api)
// - `npm run build` -> production backend on Render
// Override either by setting VITE_API_URL in frontend/.env
const PRODUCTION_API = 'https://consultancy-prime-4.onrender.com/api';
const LOCAL_API = 'http://localhost:8000/api';

export const API_BASE_URL =
  import.meta.env.VITE_API_URL || (import.meta.env.PROD ? PRODUCTION_API : LOCAL_API);
