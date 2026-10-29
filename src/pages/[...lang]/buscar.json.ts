import type { APIRoute } from 'astro';
import { pathsIdioma, type Lang } from '../../i18n/ui';
import { armarIndice } from '../../lib/indice';

// Genera /buscar.json, /en/buscar.json y /pt/buscar.json al construir el sitio.
// El buscador lo descarga recién cuando alguien toca el campo.
export const getStaticPaths = pathsIdioma;

export const GET: APIRoute = async ({ props }) =>
  new Response(JSON.stringify(await armarIndice((props as { lang: Lang }).lang)), {
    headers: { 'Content-Type': 'application/json' },
  });
