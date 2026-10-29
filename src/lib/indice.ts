import { getCollection, render } from 'astro:content';
import { UI, prefijo, type Lang } from '../i18n/ui';

// Una entrada del índice de búsqueda.
// t = título que se muestra, c = contexto (de dónde viene), u = enlace,
// x = texto extra donde buscar, w = peso (cuánto "vale" que coincida acá).
export type Entrada = { t: string; c: string; u: string; x?: string; w: number };

// Pasa el markdown a texto plano: sin etiquetas HTML ni símbolos de formato.
const textoPlano = (md: string) =>
  md
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s*[-+]\s+/gm, '') // viñetas de las listas
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#*_>|`~]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

// Se arma una sola vez, al construir el sitio (no en el navegador).
export async function armarIndice(lang: Lang): Promise<Entrada[]> {
  const t = UI[lang];
  const base = prefijo(lang);
  const temas = await getCollection('temas', (e) => e.id.startsWith(`${lang}/`));
  const indice: Entrada[] = [];

  // 1. Recursos destacados (gráficos y videos): pesan más porque son accesos directos.
  for (const [, titulo, texto, ruta] of t.destacados.items) {
    indice.push({ t: titulo, c: t.destacados.titulo, u: `${base}${ruta}`, x: texto, w: 4 });
  }

  for (const tema of temas) {
    const url = `${base}/temas/${tema.id.split('/')[1]}/`;
    const { headings } = await render(tema);
    // 2. El tema en sí: título, descripción y autores.
    indice.push({ t: tema.data.title, c: t.ejes[tema.data.eje], u: url, x: `${tema.data.descripcion} ${tema.data.autores}`, w: 3 });
    // 3. Cada subtítulo del tema, con enlace directo a esa parte.
    for (const h of headings.filter((h) => h.depth <= 3)) {
      indice.push({ t: h.text, c: tema.data.title, u: `${url}#${h.slug}`, w: 2 });
    }
    // 4. Todo el texto del tema, para lo que no aparece en ningún título.
    indice.push({ t: tema.data.title, c: t.ejes[tema.data.eje], u: url, x: textoPlano(tema.body ?? ''), w: 1 });
  }
  return indice;
}
