// Datos de los tres ejes temáticos, en un solo lugar para reutilizarlos.
export const EJES = {
  g: { nombre: 'Género, violencia y derechos', corto: 'Género y derechos' },
  e: { nombre: 'Emociones y pensamiento', corto: 'Emociones y pensamiento' },
  h: { nombre: 'Habilidades y bienestar', corto: 'Habilidades y bienestar' },
} as const;

export type Eje = keyof typeof EJES;
