import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada tema es un archivo .md en src/content/temas.
// El "schema" valida el encabezado (frontmatter) de cada archivo:
// si falta un campo o tiene un tipo incorrecto, el build avisa con un error.
const temas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/temas' }),
  schema: z.object({
    title: z.string(),
    eje: z.enum(['g', 'e', 'h']), // g = Género y derechos · e = Emociones · h = Habilidades
    orden: z.number(),
    descripcion: z.string(),
    autores: z.string(),
    lectura: z.number(), // minutos de lectura
    fecha: z.coerce.date(),
    fuentes: z.array(z.string()),
  }),
});

export const collections = { temas };
