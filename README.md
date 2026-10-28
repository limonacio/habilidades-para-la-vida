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
  content/temas/es/   ← un archivo .md por tema, en español (original)
  content/temas/en/   ← los mismos temas en inglés (mismo nombre de archivo)
  content/temas/pt/   ← los mismos temas en portugués de Brasil
  content.config.ts   ← qué campos lleva cada tema (frontmatter)
  i18n/ui.ts          ← textos de la interfaz en los 3 idiomas y ayudas de rutas
  layouts/Base.astro  ← header con menú hamburguesa (modo + idioma) y footer
  components/         ← piezas reutilizables (recuadro de ayuda)
  pages/[...lang]/    ← una carpeta para los 3 idiomas: "/" (es), "/en/", "/pt/"
    index.astro           → inicio
    acerca.astro          → /acerca/
    temas/[slug].astro    → /temas/<nombre-del-tema>/
  styles/global.css   ← colores y estilos generales
public/               ← archivos que se sirven tal cual (favicon)
```

## Agregar o editar un tema

1. Creá o editá un archivo en `src/content/temas/es/` y su traducción con el mismo nombre en `en/` y `pt/`.
2. Completá el encabezado (`title`, `eje`, `orden`, `descripcion`, `autores`, `lectura`, `fecha`, `fuentes`).
3. Escribí el contenido en Markdown usando `##` para las secciones (arman el índice lateral).

Regla de la guía: **nada es inventado**. Cada idea va con su autor o norma en `fuentes`.

## Licencia

Contenido bajo [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es).
