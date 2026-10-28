# Habilidades para la Vida

Guía abierta sobre emociones, vínculos, género y derechos. Hecha con [Astro](https://astro.build).

## Cómo correrla en tu computadora

Necesitás Node.js 22.12 o superior.

```bash
npm install      # instala las dependencias (solo la primera vez)
npm run dev      # abre el sitio en http://localhost:4321 y se recarga al guardar
npm run build    # genera la versión final en la carpeta dist/
npm run preview  # muestra esa versión final localmente
```

## Estructura

```
src/
  content/temas/      ← un archivo .md por tema (el contenido)
  content.config.ts   ← qué campos lleva cada tema (frontmatter)
  ejes.ts             ← nombres de los 3 ejes
  layouts/Base.astro  ← header, footer y modo claro/oscuro
  components/         ← piezas reutilizables (recuadro Línea 144)
  pages/              ← cada archivo es una página (rutas)
    index.astro           → /
    acerca.astro          → /acerca/
    temas/[slug].astro    → /temas/<nombre-del-tema>/
  styles/global.css   ← colores y estilos generales
public/               ← archivos que se sirven tal cual (favicon)
```

## Agregar o editar un tema

1. Creá o editá un archivo en `src/content/temas/`.
2. Completá el encabezado (`title`, `eje`, `orden`, `descripcion`, `autores`, `lectura`, `fecha`, `fuentes`).
3. Escribí el contenido en Markdown usando `##` para las secciones (arman el índice lateral).

Regla de la guía: **nada es inventado**. Cada idea va con su autor o norma en `fuentes`.

## Licencia

Contenido bajo [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es).
