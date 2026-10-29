# AGENTS.md — Cómo trabajar en este proyecto

Instrucciones para cualquier agente de IA (Claude, Codex, Copilot…) o persona que colabore.
Leé esto antes de tocar nada. La hoja de ruta y los pendientes están en `PLAN.md`.

## Qué es

"Habilidades para la Vida": guía abierta sobre emociones, vínculos, género y derechos.
Sitio estático en Astro, en español (original), inglés y portugués de Brasil.
Publicado en https://tallerhabilidades.vercel.app (Vercel publica solo cada push a `main`).
Autor: Limonacio, desarrollador trainee — explicá las decisiones como un senior a un trainee.

## Reglas de trabajo

1. **Proponer antes de cambiar.** Si el autor muestra una captura o comenta algo, primero se propone; se edita recién con un "sí", "dale" o "hacelo". No cambiar cosas por cada cosa que muestre.
2. **Nunca hacer commit ni push sin aprobación.** Cuando el autor aprueba, pasarle el bloque listo para copiar, siempre con la ruta de la carpeta primero:
   ```
   cd C:\dev\habilidades-para-la-vida
   git add <archivos>
   git commit -m "Mensaje en español"
   git push
   ```
   Ojo: los corchetes de `[...lang]` confunden a `git add`; usar `git add src` o la carpeta.
3. **Simple, no barroco.** No sumar descripciones, créditos, adornos ni funciones que no se pidieron. Menos es más.
4. **Si no podés leer algo** (un video, un link bloqueado), decilo de entrada. No inventar títulos ni contenidos.
5. **Probar antes de entregar**: `npm run build` sin errores y revisar en celular y escritorio, modo claro y oscuro.

## Reglas de contenido

- **Nada inventado.** Cada idea va con su autor, obra o ley en `fuentes`. Las citas a autores prevalecen.
- **No presentar el sitio como resumen o material de un curso.** Es una guía propia, con fuentes.
- **Nunca subir la carpeta `HABILIDADES PARA LA VIDA - MATERIAL/`** (material de estudio privado; está en `.gitignore`).
- Licencia del contenido: CC BY-SA 4.0.
- Temas de violencia: tono cuidadoso; el recuadro de ayuda (`Ayuda144`) aparece en el eje de género.
- Todo cambio de texto va en los tres idiomas (`es`, `en`, `pt`). Las leyes traducidas llevan aviso de traducción no oficial.

## Estructura

```
src/
  content/temas/{es,en,pt}/  ← un .md por tema, mismo nombre de archivo en los 3 idiomas
  content.config.ts          ← campos del frontmatter (title, eje g/e/h, orden, descripcion, autores, fecha, fuentes)
  i18n/ui.ts                 ← textos de la interfaz en 3 idiomas, destacados y ayudas de rutas
  lib/indice.ts              ← arma el índice del buscador
  layouts/Base.astro         ← header (logo SVG, menú hamburguesa con modo e idioma), footer, Open Graph
  components/Ayuda144.astro  ← recuadro de ayuda (Línea 144)
  pages/[...lang]/           ← "/" (es), "/en/", "/pt/"
    index.astro              → inicio: buscador, ejes en tablero, ejercicios, destacados
    temas/[slug].astro       → página de tema
    acerca.astro             → /acerca/
    buscar.json.ts           → /buscar.json (índice del buscador)
  styles/global.css          ← colores (variables), modo oscuro, gráficos (iceberg, ciclo), tarjetas de video
public/                      ← favicon, imágenes de vista previa (og.jpg, og-en.jpg, og-pt.jpg)
```

Ejes: `g` = Género, violencia y derechos (violeta) · `e` = Emociones y pensamiento (terracota) · `h` = Habilidades y bienestar (salvia).

## Comandos

```
npm install       # la primera vez
npm run dev       # http://localhost:4321
npm run build     # versión final en dist/
```

Requiere Node.js 22.12 o superior. Astro 6 (Astro 7 pide un Node más nuevo).

## Agregar un tema

1. Crear `src/content/temas/es/<nombre>.md` y sus traducciones con el mismo nombre en `en/` y `pt/`.
2. Completar el frontmatter; `orden` define la posición (admite decimales, por ejemplo 2.5).
3. Usar `##` para las secciones: arman el índice lateral y entran al buscador.
4. Si el frontmatter lleva comillas dentro de un texto, usar comillas tipográficas “ ” para no romper el YAML.
5. Agregar las obras nuevas en `fuentes` y marcar el avance en `PLAN.md`.
