// Textos de la interfaz en los tres idiomas.
// Para agregar un texto: sumá la misma clave en es, en y pt.
export const LOCALES = ['es', 'en', 'pt'] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LANG: Lang = 'es';

export const NOMBRES_IDIOMA: Record<Lang, string> = { es: 'Español', en: 'English', pt: 'Português' };
export const HTML_LANG: Record<Lang, string> = { es: 'es-AR', en: 'en', pt: 'pt-BR' };

export type Eje = 'g' | 'e' | 'h';

export const UI = {
  es: {
    sitio: 'Habilidades para la Vida',
    descripcion: 'Guía abierta sobre emociones, vínculos, género y derechos, con las fuentes de cada idea.',
    saltar: 'Saltar al contenido',
    nav: { temas: 'Temas', ejercicios: 'Ejercicios', acerca: 'Acerca' },
    menu: { abrir: 'Abrir menú', cerrar: 'Cerrar menú', modo: 'Modo', claro: 'Claro', oscuro: 'Oscuro', idioma: 'Idioma' },
    hero: { titulo: 'Herramientas para vivir y convivir mejor', bajada: 'Una guía abierta sobre emociones, vínculos, género y derechos, explicada en simple y con las fuentes de cada idea.' },
    buscar: { label: 'Buscar un tema', placeholder: 'Buscar un tema…', vacio: 'No hay temas con esa búsqueda.' },
    leer: 'Leer el tema',
    ejes: {
      g: 'Género, violencia y derechos',
      e: 'Emociones y pensamiento',
      h: 'Habilidades y bienestar',
    } as Record<Eje, string>,
    destacados: {
      titulo: 'Recursos destacados',
      items: [
        ['🧊', 'Iceberg de la violencia', 'Lo que se ve y lo que queda oculto bajo la superficie.', '/temas/violencia-de-genero/#iceberg'],
        ['🔄', 'Ciclo de la violencia', 'Las cuatro fases que se repiten en una pareja violenta.', '/temas/ciclo-de-la-violencia/'],
        ['▶️', 'Violencia simbólica en las canciones', 'Un ejemplo en las letras que escuchamos todos los días.', '/temas/violencia-de-genero/#video'],
        ['🎬', 'Acoso en el espacio público', '«Llegué viva»: el miedo cotidiano de volver a casa.', '/temas/violencia-de-genero/#video-acoso'],
      ],
    },
    ejercicios: {
      titulo: 'Ejercicios para practicar',
      bajada: 'Herramientas interactivas. Lo que escribas va a quedar solo en tu navegador.',
      pronto: 'Próximamente.',
      items: [
        ['Respiración guiada', 'Seguí el círculo para respirar con el diafragma.'],
        ['Escala del enojo', 'Ubicá tu enojo del 1 al 10 y mirá qué podés hacer.'],
        ['Diario de pensamientos', 'Registrá situaciones y revisá cuánto creés en cada pensamiento.'],
      ],
    },
    ayuda: {
      titulo: '¿Necesitás ayuda o querés orientar a alguien?',
      texto: 'Línea 144: atención a situaciones de violencia de género en Argentina. Gratuita, las 24 h, en todo el país. En una emergencia, llamá al 911.',
    },
    tema: { inicio: 'Inicio', indice: 'En esta página', fuentes: 'Fuentes de este tema', anterior: 'Anterior', siguiente: 'Siguiente', otros: 'Otros temas', ruta: 'Ruta', verEje: 'Ver todos los temas de esta sección', masEje: 'Más temas de esta sección', traduccion: '' },
    footer: { licencia: 'Contenido bajo licencia', reservados: 'Algunos derechos reservados.', firma: 'Desarrollado por Limonacio' },
    acerca: {
      titulo: 'Acerca de esta guía', meta: 'Qué es esta guía, quién la hizo, bibliografía y licencia.',
      queEs: 'Qué es',
      queEs1: '<b>Habilidades para la Vida</b> es una guía abierta y gratuita que reúne, ordena y explica en lenguaje simple herramientas sobre emociones, vínculos, género y derechos humanos.',
      queEs2: 'Esta guía <b>no crea teoría</b>: organiza y explica ideas de autoras, autores, tratados y leyes. Cada tema indica sus fuentes, y abajo está la bibliografía completa para quien quiera profundizar.',
      aviso: 'Aviso importante',
      aviso1: 'Este contenido es informativo. <b>No reemplaza la consulta con profesionales de la salud mental, el derecho u otras áreas.</b> Si estás atravesando una situación difícil, buscá acompañamiento.',
      licencia: 'Licencia',
      licencia1: 'El contenido está bajo licencia <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.es" rel="license">Creative Commons Atribución-CompartirIgual 4.0 (CC BY-SA 4.0)</a>. Podés copiarlo, compartirlo y adaptarlo, incluso para talleres, siempre que menciones la fuente y compartas lo tuyo con la misma licencia.',
      biblio: 'Bibliografía',
      traduccion: '',
    },
    ccUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.es',
  },
  en: {
    sitio: 'Life Skills',
    descripcion: 'An open guide to emotions, relationships, gender and rights, with the sources behind every idea.',
    saltar: 'Skip to content',
    nav: { temas: 'Topics', ejercicios: 'Exercises', acerca: 'About' },
    menu: { abrir: 'Open menu', cerrar: 'Close menu', modo: 'Theme', claro: 'Light', oscuro: 'Dark', idioma: 'Language' },
    hero: { titulo: 'Tools to live and get along better', bajada: 'An open guide to emotions, relationships, gender and rights, explained simply and with the sources behind every idea.' },
    buscar: { label: 'Search for a topic', placeholder: 'Search for a topic…', vacio: 'No topics match your search.' },
    leer: 'Read the topic',
    ejes: {
      g: 'Gender, violence and rights',
      e: 'Emotions and thinking',
      h: 'Skills and well-being',
    } as Record<Eje, string>,
    destacados: {
      titulo: 'Featured resources',
      items: [
        ['🧊', 'Iceberg of violence', 'What we can see, and what stays hidden below the surface.', '/temas/violencia-de-genero/#iceberg'],
        ['🔄', 'Cycle of violence', 'The four phases that repeat in a violent relationship.', '/temas/ciclo-de-la-violencia/'],
        ['▶️', 'Symbolic violence in songs', 'An example in the lyrics we hear every day.', '/temas/violencia-de-genero/#video'],
        ['🎬', 'Harassment in public spaces', '“Llegué viva”: the everyday fear of getting home.', '/temas/violencia-de-genero/#video-acoso'],
      ],
    },
    ejercicios: {
      titulo: 'Exercises to practice',
      bajada: 'Interactive tools. Whatever you write will stay only in your browser.',
      pronto: 'Coming soon.',
      items: [
        ['Guided breathing', 'Follow the circle to breathe with your diaphragm.'],
        ['Anger meter', 'Rate your anger from 1 to 10 and see what you can do.'],
        ['Thought diary', 'Record situations and review how much you believe each thought.'],
      ],
    },
    ayuda: {
      titulo: 'Do you need help, or want to guide someone?',
      texto: 'In Argentina, Line 144 offers support for gender-based violence: free, 24/7, nationwide. In an emergency, call 911. If you live in another country, contact your local helpline.',
    },
    tema: { inicio: 'Home', indice: 'On this page', fuentes: 'Sources for this topic', anterior: 'Previous', siguiente: 'Next', otros: 'Other topics', ruta: 'Breadcrumb', verEje: 'See all topics in this section', masEje: 'More topics in this section', traduccion: 'Translated from the original Spanish version.' },
    footer: { licencia: 'Content licensed under', reservados: 'Some rights reserved.', firma: 'Developed by Limonacio' },
    acerca: {
      titulo: 'About this guide', meta: 'What this guide is, who made it, bibliography and license.',
      queEs: 'What it is',
      queEs1: '<b>Life Skills</b> is a free, open guide that gathers, organizes and explains in plain language tools about emotions, relationships, gender and human rights.',
      queEs2: 'This guide <b>does not create theory</b>: it organizes and explains ideas from authors, treaties and laws. Each topic lists its sources, and the full bibliography is below for anyone who wants to go deeper.',
      aviso: 'Important notice',
      aviso1: 'This content is for information only. <b>It does not replace consulting mental health, legal or other professionals.</b> If you are going through a difficult situation, please seek support.',
      licencia: 'License',
      licencia1: 'The content is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en" rel="license">Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)</a>. You may copy, share and adapt it, including for workshops, as long as you credit the source and share your work under the same license.',
      biblio: 'Bibliography',
      traduccion: 'The original version of this guide is in Spanish. Most references are works originally published in English or Spanish; titles are listed as they appear in the cited edition.',
    },
    ccUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.en',
  },
  pt: {
    sitio: 'Habilidades para a Vida',
    descripcion: 'Um guia aberto sobre emoções, vínculos, gênero e direitos, com as fontes de cada ideia.',
    saltar: 'Pular para o conteúdo',
    nav: { temas: 'Temas', ejercicios: 'Exercícios', acerca: 'Sobre' },
    menu: { abrir: 'Abrir menu', cerrar: 'Fechar menu', modo: 'Tema', claro: 'Claro', oscuro: 'Escuro', idioma: 'Idioma' },
    hero: { titulo: 'Ferramentas para viver e conviver melhor', bajada: 'Um guia aberto sobre emoções, vínculos, gênero e direitos, explicado de forma simples e com as fontes de cada ideia.' },
    buscar: { label: 'Buscar um tema', placeholder: 'Buscar um tema…', vacio: 'Nenhum tema corresponde à sua busca.' },
    leer: 'Ler o tema',
    ejes: {
      g: 'Gênero, violência e direitos',
      e: 'Emoções e pensamento',
      h: 'Habilidades e bem-estar',
    } as Record<Eje, string>,
    destacados: {
      titulo: 'Recursos em destaque',
      items: [
        ['🧊', 'Iceberg da violência', 'O que se vê e o que fica escondido debaixo da superfície.', '/temas/violencia-de-genero/#iceberg'],
        ['🔄', 'Ciclo da violência', 'As quatro fases que se repetem num relacionamento violento.', '/temas/ciclo-de-la-violencia/'],
        ['▶️', 'Violência simbólica nas canções', 'Um exemplo nas letras que ouvimos todos os dias.', '/temas/violencia-de-genero/#video'],
        ['🎬', 'Assédio no espaço público', '“Llegué viva”: o medo cotidiano de voltar para casa.', '/temas/violencia-de-genero/#video-acoso'],
      ],
    },
    ejercicios: {
      titulo: 'Exercícios para praticar',
      bajada: 'Ferramentas interativas. O que você escrever ficará apenas no seu navegador.',
      pronto: 'Em breve.',
      items: [
        ['Respiração guiada', 'Siga o círculo para respirar com o diafragma.'],
        ['Escala da raiva', 'Avalie sua raiva de 1 a 10 e veja o que você pode fazer.'],
        ['Diário de pensamentos', 'Registre situações e reveja o quanto você acredita em cada pensamento.'],
      ],
    },
    ayuda: {
      titulo: 'Precisa de ajuda ou quer orientar alguém?',
      texto: 'Na Argentina, a Linha 144 atende situações de violência de gênero: gratuita, 24 horas, em todo o país. Em uma emergência, ligue para o 911. No Brasil, ligue para a Central de Atendimento à Mulher (180) ou, em emergência, para o 190.',
    },
    tema: { inicio: 'Início', indice: 'Nesta página', fuentes: 'Fontes deste tema', anterior: 'Anterior', siguiente: 'Próximo', otros: 'Outros temas', ruta: 'Caminho', verEje: 'Ver todos os temas desta seção', masEje: 'Mais temas desta seção', traduccion: 'Traduzido da versão original em espanhol.' },
    footer: { licencia: 'Conteúdo sob licença', reservados: 'Alguns direitos reservados.', firma: 'Desenvolvido por Limonacio' },
    acerca: {
      titulo: 'Sobre este guia', meta: 'O que é este guia, quem o fez, bibliografia e licença.',
      queEs: 'O que é',
      queEs1: '<b>Habilidades para a Vida</b> é um guia aberto e gratuito que reúne, organiza e explica em linguagem simples ferramentas sobre emoções, vínculos, gênero e direitos humanos.',
      queEs2: 'Este guia <b>não cria teoria</b>: organiza e explica ideias de autoras, autores, tratados e leis. Cada tema indica suas fontes, e abaixo está a bibliografia completa para quem quiser se aprofundar.',
      aviso: 'Aviso importante',
      aviso1: 'Este conteúdo é informativo. <b>Não substitui a consulta com profissionais de saúde mental, do direito ou de outras áreas.</b> Se você está passando por uma situação difícil, procure apoio.',
      licencia: 'Licença',
      licencia1: 'O conteúdo está sob a licença <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br" rel="license">Creative Commons Atribuição-CompartilhaIgual 4.0 (CC BY-SA 4.0)</a>. Você pode copiá-lo, compartilhá-lo e adaptá-lo, inclusive para oficinas, desde que cite a fonte e compartilhe seu trabalho com a mesma licença.',
      biblio: 'Bibliografia',
      traduccion: 'A versão original deste guia é em espanhol. A maioria das referências são obras publicadas originalmente em inglês ou espanhol; os títulos aparecem como na edição citada.',
    },
    ccUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br',
  },
} as const;

/** Prefijo de URL de cada idioma: el español no lleva prefijo. */
export const prefijo = (lang: Lang) => (lang === DEFAULT_LANG ? '' : `/${lang}`);

/** Saca el prefijo de idioma de una ruta: "/en/temas/x/" → "/temas/x/". */
export function rutaSinIdioma(path: string) {
  const m = path.match(/^\/(en|pt)(\/.*)?$/);
  return m ? m[2] || '/' : path;
}

/** Para getStaticPaths: un parámetro "lang" por idioma (undefined = español, sin prefijo). */
export const pathsIdioma = () => LOCALES.map((l) => ({ params: { lang: l === DEFAULT_LANG ? undefined : l }, props: { lang: l } }));
