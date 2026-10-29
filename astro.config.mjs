// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Obligatorio para Open Graph: las etiquetas og: piden URLs ABSOLUTAS, y
  // Astro las arma con new URL(..., Astro.site). Sin esto, el preview al
  // compartir queda sin imagen.
  site: 'https://habilidades-para-la-vida.vercel.app',
});
