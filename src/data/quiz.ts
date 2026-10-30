import type { Lang } from '../i18n/ui';
import { basica } from './quiz/es-basica';
import { media } from './quiz/es-media';
import { instruida } from './quiz/es-instruida';

// ── Quiz ────────────────────────────────────────────────────────────────
// Cada pregunta sale de un tema de la guía (campo "t" = nombre del archivo del tema),
// así la explicación puede llevar a "leer más". Nada inventado: todo está en los temas.
//
// p = pregunta · o = opciones · e = explicación · t = tema
// c = posición de la correcta (0 a 3). Si no está, la correcta es la PRIMERA opción
//     (es la convención de los bancos nuevos, en la carpeta quiz/).
// Cada nivel es un banco de preguntas: en cada partida se sortean "cantidad" de ellas
// y se mezclan también las opciones, así casi nunca se repite una partida.

export type Nivel = 'basica' | 'media' | 'instruida';
export type Pregunta = { p: string; o: [string, string, string, string]; c?: number; e: string; t: string };

type QuizIdioma = {
  titulo: string;
  menu: string;
  bajada: string;
  tarjeta: { insignia: string; titulo: string; texto: string; boton: string };
  niveles: Record<Nivel, { nombre: string; texto: string; cantidad: number }>;
  preguntas: Record<Nivel, Pregunta[]>;
  textos: { pregunta: string; de: string; correcto: string; incorrecto: string; leerMas: string; siguiente: string; resultado: string; otraVez: string; otroNivel: string; finales: [string, string, string] };
};

const es: QuizIdioma = {
  titulo: 'Preguntero de autoevaluación',
  menu: 'Autoevaluación',
  bajada: 'Repasá lo que aprendiste. Cada respuesta trae una explicación y el tema donde leer más.',
  // Tarjeta de invitación al final del inicio
  tarjeta: { insignia: '3 niveles', titulo: '¿Cuánto aprendiste?', texto: 'Un preguntero para repasar los temas, con niveles básico, medio e instruido. Cada respuesta trae su explicación.', boton: 'Empezar' },
  niveles: {
    basica: { nombre: 'Básica', texto: '10 preguntas para empezar', cantidad: 10 },
    media: { nombre: 'Media', texto: '15 preguntas para afinar', cantidad: 15 },
    instruida: { nombre: 'Instruida', texto: '20 preguntas con autores, leyes y fechas', cantidad: 20 },
  },
  textos: {
    pregunta: 'Pregunta', de: 'de',
    correcto: '¡Correcto!', incorrecto: 'No es esa.',
    leerMas: 'Leer más', siguiente: 'Siguiente', resultado: 'Ver resultado',
    otraVez: 'Repetir', otroNivel: 'Elegir otro nivel',
    finales: ['Buen comienzo: los temas te esperan para seguir aprendiendo.', '¡Muy bien! Ya tenés una base sólida.', '¡Excelente! Dominás este nivel.'],
  },
  preguntas: {
    basica,
    media,
    instruida,
  },
};

// Por ahora solo en español; inglés y portugués se suman cuando estén aprobadas las preguntas.
export const QUIZ: Partial<Record<Lang, QuizIdioma>> = { es };
