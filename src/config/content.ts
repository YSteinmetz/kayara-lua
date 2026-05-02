// ============================================================
// KAYARA LUA — CONTEÚDO DO SITE
// Edite este arquivo para atualizar todos os textos e dados.
// Cada campo tem um comentário indicando o que trocar.
// ============================================================

export const site = {
  name: "Kayara Lua",
  // Aparece na aba do navegador e no SEO
  description: "Terapeuta corporal e facilitadora de bem-estar",
};

export const nav = {
  links: [
    { label: "Início",      href: "#inicio" },
    { label: "Sobre",       href: "#sobre" },
    { label: "Serviços",    href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato",     href: "#contato" },
  ],
};

// ─── SEÇÃO: INÍCIO (Hero) ───────────────────────────────────
export const hero = {
  name: "Kayara Lua",
  tagline: "Bem-vinda",
  // Troque pela URL ou caminho da sua foto principal (ex: "/images/hero.jpg")
  image: "/images/hero.jpg",
  imageAlt: "Kayara Lua",
};

// ─── SEÇÃO: SOBRE ───────────────────────────────────────────
export const about = {
  title: "Sobre mim",
  // Troque pelo seu texto de apresentação
  bio: "Exploradora do corpo desde 2013 quando comecei minha graduação em Educação Física. Em 2019 recebi um chamado para atuar com espiritualidade, unindo os campos espiritual e corporal. Comecei a trabalhar nessa jornada de te guiar para um corpo mais presente e te fazer sentir confortável em casa novamente.",
  // Troque pela URL ou caminho da sua foto (ex: "/images/sobre.jpg")
  photo: "/images/about_photo.jpg",
  photoAlt: "Kayara Lua",

  backgroundTitle: "Background",
  background: [
    {
      // Troque pelo nome da instituição/curso
      institution: "Nome da Instituição",
      // Troque pela distinção, certificação ou cargo
      distinction: "Certificação ou Distinção",
      period: "Mês Ano – Mês Ano",
    },
    {
      institution: "Nome da Instituição",
      distinction: "Certificação ou Distinção",
      period: "Mês Ano – Mês Ano",
    },
    {
      institution: "Nome da Instituição",
      distinction: "Certificação ou Distinção",
      period: "Mês Ano – Mês Ano",
    },
  ],
};

// ─── SEÇÃO: SERVIÇOS ────────────────────────────────────────
export const services = {
  title: "Atendimentos",
  // Troque pelo link de agendamento (WhatsApp, Calendly, etc.)
  bookingHref: "#contato",
  bookingLabel: "Agende aqui",

  items: [
    {
      title: "Terapia Corporal",
      mode: "Online ou Presencial",
      // Troque pela URL ou caminho da imagem do serviço
      image: "/images/terapia_corporal.jpg",
      imageAlt: "Terapia Corporal",
    },
    {
      title: "Massagem Relaxante",
      mode: "Presencial",
      image: "/images/massagem_relaxante.jpg",
      imageAlt: "Massagem Relaxante",
    },
    {
      title: "Vivência Sonora",
      mode: "Presencial com cacau",
      image: "/images/vivencia_sonora.jpg",
      imageAlt: "Vivência Sonora",
    },
  ],

  how: {
    title: "Como cada sessão funciona",
    subtitle: "Entenda melhor como cada sessão é conduzida",
    // Imagens do collage decorativo — troque pelas suas fotos
    collage: [
      "/images/collage_1.jpg",
      "/images/collage_2.jpg",
      "/images/collage_3.jpg",
    ],
    // Troque os títulos, imagens e categorias pelos seus serviços/etapas
    items: [
      {
        image: "https://placehold.co/500x380/E8DDD0/5C4A30?text=Etapa+1",
        title: "Acolhimento Inicial",
        category: "Avaliação",
      },
      {
        image: "https://placehold.co/500x380/E0D4C4/5C4A30?text=Etapa+2",
        title: "Diagnóstico Corporal",
        category: "Diagnóstico",
      },
      {
        image: "https://placehold.co/500x380/D8CDB8/5C4A30?text=Etapa+3",
        title: "Aplicação Terapêutica",
        category: "Terapia",
      },
      {
        image: "https://placehold.co/500x380/D0C5AC/5C4A30?text=Etapa+4",
        title: "Integração Corporal",
        category: "Integração",
      },
      {
        image: "https://placehold.co/500x380/C8BDA0/5C4A30?text=Etapa+5",
        title: "Orientações e Cuidados",
        category: "Pós-sessão",
      },
      {
        image: "https://placehold.co/500x380/C0B594/5C4A30?text=Etapa+6",
        title: "Acompanhamento",
        category: "Suporte",
      },
    ],
  },
};

// ─── SEÇÃO: DEPOIMENTOS ─────────────────────────────────────
export const testimonials = {
  title: "Depoimentos",
  items: [
    {
      // Troque pela frase de destaque do depoimento
      quote: "Uma experiência verdadeiramente transformadora",
      // Troque pelo texto completo do depoimento
      body: "A sessão foi além do que eu esperava. Me senti acolhida, presente e conectada com o meu corpo de uma forma que nunca havia experimentado antes. Recomendo muito!",
      // Troque pelo nome do cliente
      author: "Nome da Cliente",
      // Troque pela profissão ou contexto
      role: "Profissão ou contexto",
    },
    {
      quote: "Me trouxe de volta para mim mesma",
      body: "A presença e a sensibilidade durante a sessão foram únicas. Aprendi muito sobre o meu corpo e saí com mais clareza e leveza. Uma jornada incrível.",
      author: "Nome da Cliente",
      role: "Profissão ou contexto",
    },
    {
      quote: "Adicione um terceiro depoimento aqui",
      body: "Impulsione a credibilidade do seu trabalho com depoimentos reais. As pessoas confiam em recomendações de quem já viveu a experiência — substitua por um relato autêntico.",
      author: "Nome da Cliente",
      role: "Profissão ou contexto",
    },
  ],
};

// ─── SEÇÃO: CONTATO ─────────────────────────────────────────
export const contact = {
  // Troque pela sua chamada de ação
  headline: "Entre em contato para criarmos uma experiência de bem-estar juntos.",
  // Palavra que receberá o destaque oval — deve aparecer no headline acima
  highlightWord: "juntos.",

  social: {
    label: "Para ver mais do meu trabalho, visite minhas redes:",
    // Troque pelo seu @ nas redes sociais
    handle: "@kayaralua",
    // Troque pelos links reais das suas redes
    facebook:  "#",
    instagram: "#",
    tiktok:    "#",
  },

  phone: {
    label: "Celular",
    // Troque pelo seu número de contato
    number: "(41) 99999-0000",
  },
};
