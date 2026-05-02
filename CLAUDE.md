# Kayara Lua — Documentação do Projeto

## Visão Geral

Site de uma página (one-page scroll) para **Kayara Lua**, terapeuta corporal.
Hospedagem: **Hostinger** (site estático).
Stack: **Astro 6 + Tailwind CSS v4**.

---

## Comandos Essenciais

```bash
npm run dev      # servidor local em localhost:4321
npm run build    # gera a pasta dist/ para deploy
npm run preview  # pré-visualiza o build antes do deploy
```

**Deploy na Hostinger:** fazer upload do conteúdo de `dist/` para o `public_html`.

---

## Estrutura de Arquivos

```
src/
├── config/
│   └── content.ts              ← ÚNICO arquivo de conteúdo — edite aqui
├── styles/
│   └── global.css              ← tokens de cor/fonte (Tailwind @theme)
├── layouts/
│   └── Layout.astro            ← HTML base, Google Fonts, <head>
├── components/
│   ├── Nav.astro               ← menu fixo com scroll behavior
│   ├── HeroSection.astro       ← seção #inicio
│   ├── AboutSection.astro      ← seção #sobre
│   ├── ServicesSection.astro   ← seção #servicos
│   ├── TestimonialsSection.astro ← seção #depoimentos
│   └── ContactSection.astro   ← seção #contato
└── pages/
    └── index.astro             ← monta todos os componentes em ordem
public/
    favicon.svg / favicon.ico
```

---

## Como Editar Conteúdo

**Todo o conteúdo do site fica em `src/config/content.ts`.**
Cada campo tem um comentário indicando o que trocar. Os blocos são:

| Exportação        | Seção do site          | O que contém                                  |
|-------------------|------------------------|-----------------------------------------------|
| `site`            | Global                 | Nome do site, descrição SEO                   |
| `nav`             | Menu superior          | Labels e hrefs dos links                      |
| `hero`            | #inicio                | Nome, tagline, imagem de fundo                |
| `about`           | #sobre                 | Bio, foto, itens de background/formação       |
| `services`        | #servicos              | Cards de atendimento, collage, etapas         |
| `testimonials`    | #depoimentos           | 3 depoimentos (quote, texto, autor, papel)    |
| `contact`         | #contato               | Headline, redes sociais, telefone             |

### Trocar imagens

Substitua as URLs `placehold.co` por:
- **URL externa:** `https://...`
- **Arquivo local:** coloque a imagem em `public/images/` e use `/images/nome.jpg`

---

## Design System

### Paleta de Cores

Definida em `src/styles/global.css` dentro do bloco `@theme`:

| Token Tailwind  | Variável CSS          | Hex        | Usado em                        |
|-----------------|-----------------------|------------|---------------------------------|
| `bg-cream`      | `--color-cream`       | `#F5F0E8`  | Fundo padrão (sobre, serviços)  |
| `bg-forest`     | `--color-forest`      | `#2C3B28`  | Seção Depoimentos               |
| `bg-terra`      | `--color-terra`       | `#8B3A1E`  | Seção Contato + collage         |

Para mudar uma cor, edite apenas o valor em `global.css` — todos os componentes atualizam automaticamente.

### Tipografia

| Token Tailwind  | Fonte                              | Uso                    |
|-----------------|------------------------------------|------------------------|
| `font-serif`    | Cormorant Garamond (Google Fonts)  | Títulos e destaques    |
| `font-body`     | Inter (Google Fonts)               | Corpo de texto         |

Para trocar as fontes, edite o link do Google Fonts em `src/layouts/Layout.astro` e os valores `--font-*` em `global.css`.

---

## Estrutura dos Componentes

### Nav.astro
- Fixo no topo (`position: fixed`)
- Transparente com texto branco sobre o hero
- Muda para fundo `cream` + texto escuro ao rolar 80px
- Menu hambúrguer em mobile
- **Para adicionar um link:** adicione um item ao array `nav.links` em `content.ts`

### HeroSection.astro (`#inicio`)
- `height: 100vh`, imagem de fundo com `object-cover`
- Gradiente escuro no rodapé para legibilidade do texto
- Nome em `font-serif` tamanho grande, tagline em `uppercase tracking-widest`

### AboutSection.astro (`#sobre`)
- Grid 2 colunas: texto (bio) à esquerda, foto à direita
- Título "Sobre mim" com estilo oval: `border border-current rounded-[50px]`
- Abaixo: seção "Background" com 3 cards em grid, cada um com ícone SVG circular

### ServicesSection.astro (`#servicos`)
- **Bloco 1:** título "Atendimentos" com SVG ondulado, 3 cards de serviço, link "Agende aqui"
- **Bloco 2:** collage 2 colunas (1 imagem grande + 2 empilhadas), fundo terracota
- **Bloco 3:** "Como cada sessão funciona" — grid 3×2 de cards com imagem + categoria + título
- Para adicionar/remover etapas: edite `services.how.items` em `content.ts`

### TestimonialsSection.astro (`#depoimentos`)
- Fundo `bg-forest`, texto branco
- 3 colunas: quote em itálico → linha divisória → texto completo → autor
- Linha decorativa abaixo do título via `<div>` com `bg-white/40`

### ContactSection.astro (`#contato`)
- Fundo `bg-terra`, texto branco
- Headline com a palavra configurada em `contact.highlightWord` envolta em oval SVG
  - A palavra deve aparecer exatamente no `contact.headline`
- Grid 2 colunas: headline + redes | telefone com ícone circular
- Ícones SVG inline para Facebook, Instagram, TikTok

---

## Como Adicionar uma Nova Seção

1. **Crie o componente** em `src/components/NomeDaSecao.astro`
2. **Adicione o conteúdo** em `src/config/content.ts` (nova exportação)
3. **Importe e use** em `src/pages/index.astro`
4. **Adicione o link** no array `nav.links` em `content.ts` com o `href` correspondente ao `id` da seção

Template mínimo de componente:

```astro
---
import { minhaExportacao } from '../config/content';
---

<section id="minha-secao" class="bg-cream">
  <div class="max-w-6xl mx-auto px-8 py-24">
    <!-- conteúdo -->
  </div>
</section>
```

---

## Branch Atual

- Branch de desenvolvimento: `dev/v2/terraforming`
- Branch principal: `main`

---

## Contexto do Projeto

- Design de referência em `referência/` (5 screenshots: Home, About, Projects, Testimonials, Contact)
- Site é um portfolio/apresentação de serviços de terapia corporal
- Todos os textos e dados são placeholders — o cliente substituirá o conteúdo real
- Não há backend; formulário de contato deve apontar para WhatsApp, Calendly ou serviço externo
