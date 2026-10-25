---
name: "Clinimed Odontologia"
description: "Um sistema de cuidado luminoso, humano e integral."
colors:
  paper: "#f7f7f4"
  ink: "#082d23"
  charcoal: "#3e4a4b"
  clinimed-green: "#08752f"
  lime: "#b7ef32"
  forest-surface: "#073b29"
  sage-surface: "#eef3ea"
  warm-cream: "#f4eddd"
  divider: "#ccd5cf"
typography:
  display:
    fontFamily: "\"Baloo Bhaina 2\", sans-serif"
    fontSize: "clamp(46px, 4.25vw, 72px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  title:
    fontFamily: "\"Baloo Bhaina 2\", sans-serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "normal"
  body:
    fontFamily: "\"Albert Sans\", Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "\"Albert Sans\", Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 750
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  pill: "999px"
  panel: "42px"
  card: "36px"
  soft: "25px"
  circle: "50%"
spacing:
  xs: "12px"
  sm: "18px"
  md: "24px"
  lg: "34px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.clinimed-green}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "58px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "58px"
  button-accent:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "58px"
  glass-navigation:
    backgroundColor: "rgba(248, 249, 245, 0.84)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "76px"
  treatment-row:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    padding: "0 4px"
    height: "73px"
  benefit-card:
    backgroundColor: "rgba(250, 250, 248, 0.72)"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.soft}"
---

# Design System: Clinimed Odontologia

## Overview

**Creative North Star: "Pavilhão Clinimed"**

O sistema visual transforma cuidado odontológico em um pavilhão luminoso, acolhedor e contemporâneo. O off-white cria ar e clareza; o verde Clinimed profundo estrutura confiança; vidro translúcido, madeira clara e luz natural acrescentam presença humana sem perder precisão clínica.

A linguagem combina tipografia arredondada, superfícies amplas e curvas contínuas. O verde-lima aparece raramente como sinal de ação ou ênfase, enquanto profundidade, foco e movimento permanecem discretos, acessíveis e funcionais.

**Key Characteristics:**

- Base off-white luminosa com âncoras em verde profundo.
- Verde-lima raro e intencional.
- Vidro translúcido, madeira clara e luz natural.
- Tipografia sans robusta, arredondada e humana.
- Curvas contínuas, espaço generoso e profundidade ambiental.
- Foco visível em anel duplo e movimento compatível com reduced motion.

## Colors

A paleta equilibra claridade quente e confiança clínica, com o verde-lima reservado para momentos de alta intenção.

### Primary

- **Verde Clinimed Profundo** (`colors.clinimed-green`): conduz ações primárias, estados ativos e sinais inequívocos de marca.
- **Verde Floresta Estrutural** (`colors.forest-surface`): sustenta superfícies imersivas e blocos de maior peso visual.

### Secondary

- **Lima de Sinalização** (`colors.lime`): destaca ações decisivas, pequenos selos e números-chave; sua raridade preserva energia.

### Neutral

- **Papel Luminoso** (`colors.paper`): base principal, clara e levemente aquecida.
- **Tinta Verde** (`colors.ink`): texto de alta prioridade e títulos sobre fundos claros.
- **Carvão Botânico** (`colors.charcoal`): texto corrido e informação secundária.
- **Sálvia de Superfície** (`colors.sage-surface`): alternância tonal suave entre áreas claras.
- **Creme Acolhedor** (`colors.warm-cream`): fundo editorial quente para histórias e relatos.
- **Divisor Mineral** (`colors.divider`): linhas discretas em listas e separações estruturais.

### Named Rules

**The Rare Lime Rule.** Use o verde-lima como pontuação, nunca como preenchimento dominante; ele deve indicar ação, conquista ou informação excepcional.

## Typography

**Display Font:** Baloo Bhaina 2 (com fallback sans-serif)  
**Body Font:** Albert Sans (com fallbacks Arial e sans-serif)

**Character:** Baloo Bhaina 2 dá aos títulos uma voz arredondada, confiante e próxima. Albert Sans mantém leitura, navegação e dados claros, com pesos suficientes para criar hierarquia sem rigidez hospitalar.

### Hierarchy

- **Display** (`typography.display`): títulos de seção e mensagens de maior impacto; preserve as formas compactas e o entreletra negativo.
- **Title** (`typography.title`): títulos internos de cards e conteúdo em destaque.
- **Body** (`typography.body`): explicações e conteúdo corrido; prefira colunas de leitura curtas a blocos extensos.
- **Label** (`typography.label`): numeração, metadados e rótulos operacionais breves.

### Named Rules

**The Rounded Voice Rule.** Use Baloo Bhaina 2 para calor e presença em títulos; mantenha Albert Sans em toda interação e leitura prolongada.

## Layout

O sistema usa contêiner central de até 1380px, com respiro lateral de 48px em telas largas, 24px em layouts compactos e 20px no celular. Seções alternam superfícies amplas em vez de empilhar caixas pequenas, e os espaços verticais aumentam conforme a importância do conteúdo.

As composições podem usar duas colunas em telas largas, mas passam a uma coluna quando conteúdo, imagem ou alvos de toque perderiam conforto. Os pontos implementados de adaptação ficam em 767px, 1100px e 1279px; navegação e densidade respondem antes que a leitura fique comprimida.

**The Breathing Room Rule.** Preserve margens generosas ao redor de títulos, imagens e ações; densidade clínica não deve parecer pressa visual.

## Elevation & Depth

A profundidade é híbrida: superfícies permanecem majoritariamente planas e ganham dimensão por contraste tonal, fotografia e luz. Vidro translúcido usa blur, contorno claro e sombra ambiental; ações e painéis elevados recebem sombras verdes difusas, nunca sombras pretas duras.

### Shadow Vocabulary

- **Vidro Flutuante** (`0 14px 38px rgba(33, 61, 44, .14), inset 0 1px 0 #fff`): navegação e superfícies translúcidas.
- **Ação Verde** (`0 10px 25px rgba(5, 101, 45, .22), inset 0 1px 0 rgba(255, 255, 255, .25)`): botões primários em repouso.
- **Painel Profundo** (`0 34px 90px rgba(18, 54, 38, .16)`): cards de conteúdo com maior presença.

### Named Rules

**The Ambient Depth Rule.** Profundidade deve parecer luz natural atravessando material, não uma pilha de cartões flutuantes.

## Shapes

Pílulas completas organizam navegação e ações; círculos abrigam ícones, selos e controles compactos. Cards usam cantos generosos entre 25px e 42px, enquanto superfícies maiores podem receber curvas contínuas e recortes assimétricos suaves. Bordas são finas e de baixo contraste, usadas para definir material em vez de formar grades pesadas.

**The Continuous Curve Rule.** Curvas devem conduzir o olhar e conectar superfícies; evite misturar cantos duros com raios decorativos sem função.

## Components

### Buttons

- **Shape:** cápsula tátil (`rounded.pill`) com altura de toque confortável.
- **Primary:** verde Clinimed, texto branco e profundidade ambiental; o conteúdo pode combinar ícone, rótulo e seta.
- **Secondary:** transparente com contorno claro sobre superfícies verdes; ganha fundo lima no hover disponível.
- **Accent:** fundo lima e texto verde-escuro para ações conclusivas em blocos profundos.
- **Hover / Focus / Active:** elevação curta de 2px no hover, compressão para 97% no active e foco de anel duplo — 3px branco com halo verde até 6px.

### Cards / Containers

- **Benefit Card:** superfície clara translúcida, raio suave (`rounded.soft`), ícone circular verde-claro e sombra quase imperceptível.
- **Content Panels:** superfícies verdes ou sálvia, raios entre `rounded.card` e `rounded.panel`, conteúdo interno espaçoso e hierarquia tipográfica forte.
- **Border:** branco translúcido sobre vidro; divisores minerais em listas claras.

### Selectable List Rows

- **Style:** linhas de largura total, fundo transparente, numeração pequena, rótulo forte e seta de estado.
- **State:** hover, foco e seleção escurecem o texto; a seta gira para confirmar o item ativo.

### Navigation

- **Desktop:** cápsula de vidro translúcido com blur, contorno branco, marca, links e ação primária.
- **Compact / Mobile:** a navegação completa cede lugar a um controle circular; o menu abre em uma superfície clara ampla, arredondada e com contenção de foco.
- **Active / Focus:** item ativo recebe um traço verde curto; todos os alvos preservam o anel duplo acessível.

### Proof Items

- **Style:** ícone circular sobre verde-claro, título curto e apoio secundário; divisores leves mantêm o conjunto legível sem transformá-lo em cards.

Todo movimento de entrada, troca de conteúdo, menu e hover deve respeitar `prefers-reduced-motion`; nesse modo, remova deslocamentos e reduza transições ao fade essencial.

## Do's and Don'ts

### Do:

- **Do** use o off-white como espaço respirável e o verde profundo como âncora de confiança.
- **Do** reserve o verde-lima para ações e informações realmente excepcionais.
- **Do** combine vidro translúcido com contorno claro, blur e sombra ambiental discreta.
- **Do** preserve o foco de anel duplo em todos os controles e links interativos.
- **Do** reduza deslocamentos e transições quando `prefers-reduced-motion` estiver ativo.

### Don't:

- **Don't** transforme o verde-lima em fundo dominante ou ornamento repetitivo.
- **Don't** comprima conteúdo em grades densas de pequenos cards quando uma superfície ampla resolver melhor.
- **Don't** use sombras pretas duras, cantos rígidos ou contraste frio que elimine a sensação de luz natural.
- **Don't** aplique Baloo Bhaina 2 a parágrafos longos, navegação ou dados operacionais.
- **Don't** remova o foco visível nem dependa apenas de cor para comunicar estado.
