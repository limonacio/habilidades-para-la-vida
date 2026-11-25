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
- **Nunca subir las carpetas `HABILIDADES PARA LA VIDA - MATERIAL/` ni `MATERIAL NUEVO - HABILIDADES PARA LA VIDA/`** (material de estudio privado) ni `bitacora/` (planillas de trabajo). Las tres están en `.gitignore`.
- Del material no se toman nombres de personas, mails ni el recursero.
- Licencia del contenido: CC BY-SA 4.0.
- Temas de violencia: tono cuidadoso; el recuadro de ayuda (`Ayuda144`) aparece en el eje de género.
- Idiomas: por ahora se trabaja **primero en español**. Las traducciones a `en` y `pt` se hacen cuando el autor aprueba el español. Las leyes traducidas llevan aviso de traducción no oficial.

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

## Quiz (`/autoevaluacion/`)

- Bancos en `src/data/quiz/` (un archivo por idioma y nivel: `es-basica.ts`, `es-media.ts`, `es-instruida.ts`). Cada partida sortea 10, 15 o 20 preguntas del banco y mezcla las opciones.
- Convención: la **primera opción es siempre la correcta** (en pantalla se mezclan). Cada pregunta lleva explicación (`e`) y tema (`t`, el nombre del archivo del tema) para el "Leer más".
- Al construir el sitio se avisa si la correcta es bastante más larga que las demás.
- Campo opcional `f`: la frase del tema donde está la respuesta, copiada tal como se ve en la página. El "Leer más" abre el tema en la misma pestaña, justo en esa frase y resaltada (`#:~:text=`); el botón "Volver a la autoevaluación" del tema retoma la partida. El build avisa si la frase ya no está en el tema o si su inicio se repite.
- El color del resaltado lo elige quien lee en el autoevaluativo y queda en `localStorage` (`marcador` y `marcador-color`).
- Cuando se suma un tema nuevo a la guía, se agregan unas 6 preguntas de ese tema en cada nivel.

### Reglas de redacción de preguntas

1. El enunciado se entiende solo: nada de "ese", "estas" o "el ejemplo de…" sin contexto, y con el agente explícito (quién hace qué).
2. Enunciado + opción deben formar una frase correcta (leerlo en voz alta; evitar "a" + "El…" = "a el").
3. Nada de preguntas de sí/no ni de opciones espejo (más/menos). Mejor preguntar el porqué, el alcance o un caso concreto.
4. Los distractores son plausibles: conceptos reales de la guía del mismo tipo que la correcta (otra fase, otro inciso, otro autor, otro nivel vecino, un tipo de violencia en lugar de una modalidad) o errores comunes que la gente cree de verdad. Sin relleno absurdo ni opciones "moralmente malas" que se descartan con sentido común.
5. Mezclar la valencia: la correcta no puede ser la única opción "buena" o la única "mala".
6. Los absolutos ("solo", "siempre", "nunca") no se concentran en los distractores.
7. Las cuatro opciones con la misma estructura y largo parecido; la correcta no repite palabras clave del enunciado. Las negaciones van en MAYÚSCULAS, o mejor se reformula en positivo.
8. La explicación dice por qué la correcta es correcta y de dónde salen los distractores fuertes.
9. Encuadre: no individualizar lo que la guía presenta como social, no culpar a las víctimas, respetar la terminología de la guía (tipos ≠ modalidades de la Ley 26.485; femicidio, travesticidio, transfemicidio; "estilo" de personalidad).

## Formato de los temas (desde noviembre de 2026)

Cada tema en español sigue esta estructura:

1. **Recuadro "En pocas palabras"** al principio, de 4 a 6 puntos, con lo esencial en negrita:
   ```html
   <aside class="resumen">
   <p class="resumen-titulo">En pocas palabras</p>
   <ul>
   <li>…<b>…</b>…</li>
   </ul>
   </aside>
   ```
2. **Desarrollo** para quien lee por primera vez: secciones `##` con ejemplos cotidianos, basado en el material y completado o corregido con fuentes publicadas u oficiales.
3. **Una "Idea clave"** (`> **Idea clave**`) que no repita el recuadro.
4. En temas de violencia: dónde pedir ayuda (144, 911, 102; 135 para riesgo suicida) y el aviso de que las técnicas de pareja o negociación no aplican cuando hay violencia.

Proceso: se guarda la versión anterior en `MATERIAL NUEVO…/_texto_extraido/<tema>.ANTES.md`, se reescribe, lo revisan tres agentes (sociología, psicología y lingüística), se corrige, se compila y se pasa el ACP.

## Agentes y división del trabajo

Para no pisarse, cada agente toca sus archivos. Si necesita cambiar algo de otro, lo propone y lo coordina el autor.

| Agente | Se ocupa de | Archivos |
|---|---|---|
| Contenido | Temas, fuentes, banco de preguntas, traducciones | `src/content/`, `src/data/quiz/`, `PLAN.md` |
| Diseño | Aspecto visual, portada, tarjetas, tipografía, imagen para redes | `src/styles/`, `src/layouts/`, `src/components/`, `src/pages/` (solo el marcado y los estilos), `public/` |
| Revisores (sociología, psicología, lingüística) | Revisan los textos y devuelven una lista de cambios; no editan | — |

Cada agente trabaja solo en este repositorio y sobre la rama `main`, sin commits propios: el autor hace el commit con el ACP que le pasa el agente.

## Bitácora

La carpeta `bitacora/` (no se sube al repo) guarda planillas de trabajo para el autor:

- `Bitacora banco de preguntas.xlsx`: las 426 preguntas, una hoja por nivel, con columnas "Acción" y "Tu comentario" para pedir cambios. La columna "Estado" marca las preguntas ya reescritas con el criterio nuevo.

## Avisos técnicos

- Nunca usar `pkill -f` ni `pgrep -f`: matan la propia terminal.
- Para editar archivos con scripts, leer el archivo y reemplazar (por ejemplo, Python con `assert texto in s`), nunca reescribirlo a mano desde una salida de consola, que puede venir cortada.
- La ruta en la computadora del autor es `C:\dev\habilidades-para-la-vida` (Windows).

