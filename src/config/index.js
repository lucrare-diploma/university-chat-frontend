// Poți încărca valori din .env, sau să le definești direct
const BACKEND_URL = import.meta.env.APP_BACKEND_URL || 'http://localhost:10000';

// Alte setări globale
export const APP_NAME = 'University Chat';
export const THEME_COLORS = {
  primary: '#1976d2',
  secondary: '#9c27b0'
};
