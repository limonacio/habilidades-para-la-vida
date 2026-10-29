# Habilidades para la Vida — Plan de frontend

Estado: **publicada** en https://tallerhabilidades.vercel.app — Etapa 1 casi completa (ver Hoja de ruta). Las reglas de trabajo para agentes están en `AGENTS.md`.

## 1. Stack
- **Astro** (sitio de contenido, genera HTML estático, casi sin JavaScript).
- Estilos con **CSS propio** (variables de color + estilos por componente de Astro). Se decidió no usar Tailwind en v1 para mantener el proyecto simple; se puede sumar después.
- **Islas de React** solo para los ejercicios interactivos.
- Contenido en **Markdown** (una "content collection" con un archivo `.md` por tema).
- Deploy: Vercel, conectado a GitHub (cada push a main se publica solo).

## 2. Mapa del sitio
```
/                      Inicio: presentación + buscador + tarjetas por eje
/temas/[slug]          Página de cada tema (16)
/ejercicios            Índice de ejercicios interactivos
/ejercicios/[slug]     Cada ejercicio (3 en v1)
/acerca                Qué es la guía, autoría, bibliografía y aviso
```

## 3. Ejes y temas
| Eje | Color | Temas |
|---|---|---|
| Género, violencia y derechos | violeta | Modelo ecológico (2), Femicidio (3), Micromachismos (4), Legislación (6), Patriarcado y género (21), Diversidad sexual, Violencia de género (pptx) |
| Emociones y pensamiento | terracota | Ira (9), Cerebro y emociones (12), Abordaje emocional IFS (13), Pensamientos automáticos (14), Pensar correctamente (15), Personalidad (22) |
| Habilidades y bienestar | verde salvia | Habilidades interpersonales (11), Límites y negociación, Relajación avanzada (23) |

## 4. Wireframe — Inicio
```
┌─────────────────────────────────────────────────────────┐
│ [logo] Habilidades para la Vida   Temas Ejercicios Acerca  ☀/☾ │
├─────────────────────────────────────────────────────────┤
│  HERO                                                   │
│  Título + bajada (qué es y para quién es la guía)       │
│  [ Buscar un tema...                          🔍 ]       │
│  [Todos] [Género] [Emociones] [Habilidades]  ← filtros  │
├─────────────────────────────────────────────────────────┤
│  EJE: Género, violencia y derechos                      │
│  ┌────────┐ ┌────────┐ ┌────────┐                       │
│  │título  │ │título  │ │título  │  ← tarjetas: título,  │
│  │autor   │ │autor   │ │autor   │    autor, 1 línea,    │
│  │resumen │ │resumen │ │resumen │    tiempo de lectura  │
│  └────────┘ └────────┘ └────────┘                       │
│  EJE: Emociones y pensamiento   (ídem)                  │
│  EJE: Habilidades y bienestar   (ídem)                  │
├─────────────────────────────────────────────────────────┤
│  BANDA EJERCICIOS: 3 tarjetas grandes con ícono         │
├─────────────────────────────────────────────────────────┤
│  RECUADRO DE AYUDA: Línea 144 (24 h, gratuita)          │
├─────────────────────────────────────────────────────────┤
│  FOOTER: bibliografía · aviso · ← volver a limonacio    │
└─────────────────────────────────────────────────────────┘
```

## 5. Wireframe — Página de tema
```
┌─────────────────────────────────────────────────────────┐
│ header                                                  │
├─────────────────────────────────────────────────────────┤
│ Inicio › Emociones › Pensamientos automáticos           │
│ [chip eje] Pensamientos automáticos                      │
│ bajada · 6 min de lectura                               │
├──────────────┬──────────────────────────────────────────┤
│ EN ESTA      │ ## Qué son                               │
│ PÁGINA       │ texto...                                 │
│ (índice      │ ┌ Idea clave ─────────────────┐          │
│  fijo al     │ │ cita destacada              │          │
│  scrollear)  │ └─────────────────────────────┘          │
│              │ ## Características                       │
│              │ ┌ Fuentes de este tema ─────────────┐    │
│              │ └───────────────────────────────────┘    │
│              │ [→ Probá el ejercicio relacionado]       │
├──────────────┴──────────────────────────────────────────┤
│ ← Tema anterior            Tema siguiente →             │
│ (recuadro de ayuda en temas de violencia)               │
└─────────────────────────────────────────────────────────┘
En celular: el índice lateral pasa a un desplegable arriba.
```

## 6. Ejercicios interactivos (v1)
1. **Respiración diafragmática** (Nro. 23): círculo que se expande/contrae marcando inspirar–exhalar, con temporizador.
2. **Escala del enojo** (Nro. 9): deslizador 1–10 que muestra en qué fase del ciclo de agresión estás y qué hacer.
3. **Diario de pensamientos** (Nro. 14): tabla hora / emoción / situación / pensamiento / % antes–después. Se guarda solo en el navegador de quien lo usa (nada se envía a ningún servidor) y se puede borrar.

Para v2: test de mitos irracionales (Nro. 15) e iceberg de la violencia interactivo.

## 7. Estilo visual (paleta cálida)
| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| fondo | #FAF6F0 (crema) | #1C1A1F | fondo general |
| superficie | #FFFFFF | #26232A | tarjetas |
| texto | #2E2A26 | #EDE8E1 | texto principal |
| violeta | #6B4E9B | #B39DDB | eje Género |
| terracota | #B85C38 | #E59A78 | eje Emociones |
| salvia | #5E7F5B | #9CC29A | eje Habilidades |

- Tipografía: **Fraunces** (títulos, cálida) + **Atkinson Hyperlegible** (texto, muy legible).
- Bordes redondeados, sombras suaves, mucho aire entre bloques.
- Accesibilidad: contraste AA, navegable con teclado, respeta "reducir movimiento".

## 8. Contenido y aclaraciones
- Fuente de trabajo: el Word "Resumen por capítulos" (16 temas + anexo legal).
- El sitio se presenta como una **guía de divulgación** sobre habilidades para la vida, género y emociones. No se menciona ningún curso ni institución, y no usa logos ni identidad de organismos oficiales.
- Cada tema cita a sus **autores y fuentes de referencia** (Bronfenbrenner, Heise, Bonino, Ellis, Schwartz, MacLean, Terry Real, leyes argentinas, CEDAW, Belém do Pará, etc.).
- Los textos se reescriben con palabras propias; las citas textuales van marcadas como tales.
- Lo que el material original no completa se omite o se completa desde fuentes oficiales citadas. No se inventa.
- **Regla principal: nada es inventado.** Toda idea, modelo o dato va atribuido a su autor o norma; la guía organiza y explica, no crea teoría.
- **Licencia:** CC BY-SA 4.0 (se puede copiar, compartir y adaptar citando la fuente y con la misma licencia). Va en el footer y en /acerca.
- Sin numeración de clases ("Nro. 14", etc.): los temas se nombran solo por título.
- Página /acerca: qué es la guía, quién la hizo (Limonacio), bibliografía y aviso de que no reemplaza la consulta profesional.

## 9. Blog híbrido y comentarios (propuesta, a confirmar)
### Blog híbrido
- El inicio sigue siendo la guía ordenada por ejes (lo principal).
- Cada tema es también una entrada con fecha y etiquetas.
- Sección /blog: lista cronológica + RSS. Permite sumar entradas nuevas (reflexiones, notas terapéuticas, ejercicios).

### Comentarios — sistema propio (Astro + Vercel + Supabase)
**Quien comenta**
- Nombre de pila u "Anónimo". Sin cuenta, sin email.
- Al publicar recibe un "token de edición" guardado en su navegador: con él puede editar o borrar su comentario.
- Limitación: si borra los datos del navegador o cambia de dispositivo, pierde esa posibilidad.
- Aviso visible: no compartir datos que identifiquen a nadie.

**Moderación (Limonacio)**
- Panel /admin con login (solo vos): ver, editar, ocultar y borrar comentarios.
- Filtro de palabras: lista editable desde el panel. Un comentario con palabras de la lista no se publica directo: queda "en revisión".
- Decidido: publicación instantánea. Solo lo que active el filtro queda en revisión.

**Seguridad y privacidad**
- Escapar todo el texto (prevención de XSS), límite de largo.
- Anti-spam: campo trampa (honeypot) + límite de comentarios por minuto.
- No guardar IP en claro (solo un hash temporal para el límite de envíos). Datos mínimos (Ley 25.326).
- Reglas de acceso en la base (RLS): el público solo lee comentarios aprobados.

**Costo:** planes gratuitos de Vercel y Supabase alcanzan para este volumen.
**Cuándo:** fase 2, después de publicar la guía.

## 10. Hoja de ruta

### Etapa 1 — La guía (prioridad)
- [x] 1.1 Crear la carpeta del proyecto
- [x] 1.2 Plan y wireframes (este archivo)
- [x] 1.3 Maqueta visual aprobada
- [x] 1.4 Crear el proyecto Astro + repo en GitHub (limonacio/habilidades-para-la-vida)
- [x] 1.5 Layout base: header, footer, modo claro/oscuro, tipografías, colores
- [x] 1.6 Pasar los 16 temas a Markdown, reescritos y con autores y fuentes
- [x] 1.7 Página de inicio: ejes en tablero 2x2, temas plegables y buscador simple
- [x] 1.8 Plantilla de tema: índice lateral, fuentes, anterior/siguiente
- [x] 1.9 Página /acerca: qué es la guía, autoría, bibliografía, licencia y aviso
- [x] 1.10 Recuadro de ayuda (Línea 144)
- [x] 1.11 Revisión de contenido: "Idea clave" en los 16 temas, ortografía (hunspell es_AR) y verificación de citas y datos
  - Pendiente menor: confirmar con los libros que el contenido de Límites (Messages), Relajación (Davis y cols.) y los ejercicios de Cerebro/Habilidades (McKay, Wood y Brantley) coincide con esas obras
- [x] 1.12 Deploy en Vercel → https://tallerhabilidades.vercel.app (principal; habilidades-para-la-vida.vercel.app redirige)
- [x] 1.14 Menú hamburguesa (modo e idioma) y traducción completa al inglés y al portugués de Brasil (leyes con aviso de traducción no oficial)
- [x] 1.15 Nuevo tema "El ciclo de la violencia" (Walker), gráfico del iceberg (Amnistía Internacional), video de violencia simbólica y "Recursos destacados" en el inicio
- [x] 1.13 Enlazar desde el portfolio (limonacio.com, sección Lab)
- [x] 1.17 Volver a la sección desde un tema (etiqueta de color, tema resaltado) y lista de temas del mismo eje
- [x] 1.18 Video «Llegué viva» (Colectivas Deseantes) sobre acoso en el espacio público, en Violencia de género
- [x] 1.19 Más espacio entre secciones (que no quede abarrotado)
- [x] 1.20 Buscador inteligente: índice /buscar.json armado al construir, resultados debajo del campo con enlace directo, busca por palabras (sin tildes ni palabras vacías) en destacados, títulos, subtítulos y texto
- [x] 1.21 Destacados sin artículo ("Iceberg de la violencia", "Ciclo de la violencia") y al final en el celular
- [x] 1.22 Logo en SVG con contorno fino que sigue el color del texto (claro/oscuro); favicon igual
- [x] 1.23 Ruta de navegación invisible (BreadcrumbList en JSON-LD, solo para buscadores)
- [x] 1.25 Quiz /quiz/ con tres niveles (Básica, Media, Instruida): 100 preguntas por nivel, partidas sorteadas, revisión sociológica, psicológica y lingüística, control automático de largo de opciones. Falta: traducir al inglés y portugués; sumar preguntas de los 6 temas nuevos
- [ ] 1.16 Tema "Relajación I": el PDF llegó vacío (0 bytes), falta volver a copiarlo
- [ ] 1.24 Pasada de simplificación general (propuesta: que el sitio no quede recargado)

### Etapa 2 — Ejercicios interactivos
- [ ] 2.1 Respiración guiada
- [ ] 2.2 Escala del enojo
- [ ] 2.3 Diario de pensamientos (se guarda solo en el navegador)

### Etapa 3 — Blog híbrido
- [ ] 3.1 Fechas y etiquetas en cada tema
- [ ] 3.2 Sección /blog con lista cronológica y páginas por etiqueta
- [ ] 3.3 RSS
- [ ] 3.4 Primera entrada nueva (a definir)

**Material guardado para el blog** (disparadores de reflexión):
- Cortometraje: https://www.youtube.com/watch?v=rS1_Bej32Og — título y créditos a confirmar

### Etapa 4 — Comentarios y conexiones
- [ ] 4.1 Cuenta y base de datos en Supabase (la crea Limonacio)
- [ ] 4.2 Tablas, reglas de acceso (RLS) y API de comentarios
- [ ] 4.3 Formulario: nombre de pila o anónimo, publicación instantánea
- [ ] 4.4 Editar y borrar el propio comentario (token en el navegador)
- [ ] 4.5 Filtro de palabras: lo filtrado queda "en revisión" y su autor lo ve como pendiente
- [ ] 4.6 Panel /admin con login: editar, ocultar, borrar, gestionar la lista de palabras
- [ ] 4.7 Anti-spam y seguridad: escape de texto, honeypot, límite de envíos
- [ ] 4.8 Notificaciones por email con Resend (a definir)
- [ ] 4.9 Pruebas de seguridad y deploy

### Pendientes de decisión
- ¿Aprobación previa en los temas de violencia?
- ¿Avisos por email? ¿A quién y cuándo?
- ~~Dominio o subdominio final~~ → resuelto: tallerhabilidades.vercel.app
