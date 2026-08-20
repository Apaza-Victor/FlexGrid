# FlexGrid - Guia Interactiva de CSS Flexbox & Grid

[![GitHub Pages](https://img.shields.io/badge/Demo-Online-brightgreen)](https://apaza-victor.github.io/FlexGrid/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

Sitio web educativo interactivo para aprender CSS Flexbox y Grid desde cero. Incluye playgrounds en tiempo real, patrones de layout, conceptos fundamentales y mas de 80 recursos gratuitos organizados en 8 categorias.

**Demo en vivo:** https://apaza-victor.github.io/FlexGrid/

## Estructura del Proyecto

```
FlexGrid/
├── index.html                  # Landing page principal
├── assets/
│   ├── css/
│   │   └── style.css           # Estilos compartidos + responsive (1250+ lineas)
│   └── js/
│       ├── theme.js            # Toggle dark/light con persistencia localStorage
│       ├── playground.js       # Interactividad flexbox & grid + navbar mobile
│       ├── three-hero.js       # Background 3D con Three.js (geometrias + particulas)
│       ├── babylon-scene.js    # Escena 3D interactiva con Babylon.js
│       └── animations.js       # Animaciones de entrada con anime.js
├── pages/
│   ├── flexbox.html            # Playground interactivo de Flexbox
│   ├── grid.html               # Playground interactivo de CSS Grid
│   ├── patrones.html           # 10 patrones de layout reales
│   ├── conceptos.html          # Fundamentos de CSS
│   └── recursos.html           # 83 enlaces en 8 categorias + escena Babylon.js
└── README.md
```

## Paginas

### Inicio
Landing page con hero a pantalla completa, background 3D con Three.js (geometrias wireframe + particulas que siguen el mouse), y acceso rapido a las 5 secciones.

### Flexbox Playground
Playground interactivo con controles para propiedades del container (`flex-direction`, `justify-content`, `align-items`, `flex-wrap`, `gap`) y propiedades individuales por item (`flex-grow`, `flex-shrink`, `align-self`, `order`). Haz click en cualquier item para editarlo. Incluye seccion deep-dive con explicaciones de flex shorthand, centrado perfecto, y breakpoints practice.

### Grid Playground
Playground interactivo con controles para `grid-template-columns`, `grid-template-rows`, `gap`, `grid-auto-flow`, `grid-auto-rows`, y `grid-template-areas`. Incluye seccion deep-dive con unidades fr, `minmax()`, grid-template-areas visual, y comparacion Grid vs Flexbox.

### Patrones de Layout
10 patrones reales con demo visual interactiva + codigo copiable:
- Holy Grail Layout (Grid)
- Sidebar Fijo + Contenido (Grid)
- Card Grid Responsive (Grid)
- Navbar Flexbox (Flexbox)
- Footer Centrado 3 Columnas (Flexbox)
- Sticky Footer (Grid)
- Centrado Perfecto (Flexbox + Grid)
- Gallery Layout con spans (Grid)
- Pricing Table (Flexbox)
- Breadcrumb (Flexbox)

### Conceptos CSS
8 fundamentos con demos visuales y codigo:
- Box Model (content, padding, border, margin, box-sizing)
- Display (block, inline, inline-block, none)
- Position (static, relative, absolute, fixed, sticky)
- Specificity (jerarquia de especificidad)
- Unidades (px, %, em, rem, vw, vh, fr)
- Selectores (tag, class, id, attr, pseudo-class, pseudo-element)
- Media Queries (mobile-first, breakpoints)
- Variables CSS (:root, --var, theming)

### Recursos
83 enlaces organizados en 8 categorias:
1. **HTML & CSS** - MDN, CSS-Tricks, W3Schools, web.dev, 100 Days CSS
2. **Flexbox & Grid** - Flexbox Froggy, Grid Garden, Flexbox Defense, Grid Critters, guias visuales
3. **Generadores & Playgrounds** - Flexbox Labs, CSS Grid Generator, Layoutit, Every Layout, CodePen
4. **Herramientas CSS Interactivas** - CSS Diner, shadcn/ui, Tailwind Components, Material Design
5. **JavaScript** - MDN, JavaScript.info, Eloquent JS, TypeScript
6. **Practica & Desafios** - Frontend Mentor, freeCodeCamp, Codewars, CSS Battle, JavaScript30
7. **Herramientas de Diseno** - Coolors, Google Fonts, Figma, unDraw, SVG Backgrounds
8. **Referencia Rapida** - Can I Use, DevTools, PageSpeed, Bundlephobia, Responsively

## Tecnologias

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Semantico y accesible |
| CSS3 | Variables, Grid, Flexbox, glassmorphism, gradientes, responsive |
| JavaScript ES6+ | Vanilla, sin frameworks |
| Bootstrap 5.3.3 | Grid system y utilidades basicas |
| Bootstrap Icons | Iconografia |
| Google Fonts | Inter (UI) + JetBrains Mono (codigo) |
| Three.js | Background 3D del hero (geometrias wireframe + particulas) |
| Babylon.js | Escena 3D interactiva en recursos |
| anime.js | Animaciones de entrada staggered |

## Caracteristicas

- **Tema dark/light** con persistencia en localStorage
- **Responsive completo** desde 360px hasta 4K
- **Playground interactivo** con cambios en tiempo real
- **Items seleccionables** en Flexbox (click para editar propiedades individuales)
- **Codigo copiable** con un click
- **Animaciones de entrada** suaves con anime.js
- **Background 3D** interactivo con Three.js
- **Escena 3D** interactiva con Babylon.js en la pagina de recursos
- **Navbar responsive** con hamburger menu en mobile
- **Touch-friendly** con targets minimos para dispositivos touch
- **Scroll horizontal** en bloques de codigo en mobile

## Responsive

| Breakpoint | Comportamiento |
|------------|----------------|
| `> 768px` | Layout completo, navbar horizontal, grids multi-columna |
| `<= 768px` | Navbar hamburger, cards apiladas, playground compacto |
| `<= 480px` | Tipografia reducida, items mas pequenos, padding ajustado |
| `<= 380px` | Layout minimo optimizado para pantallas pequenas |

## Como Usar

1. Visita la [demo en vivo](https://apaza-victor.github.io/FlexGrid/) o abre `index.html` en tu navegador
2. Navega por las secciones usando la barra de navegacion
3. En Flexbox/Grid: modifica propiedades y ve los cambios al instante
4. Haz click en los items del playground para editarlos individualmente
5. Copia el codigo generado con el boton "Copiar"
6. Cambia entre tema dark/light con el icono de la luna

## Instalacion Local

```bash
git clone https://github.com/Apaza-Victor/FlexGrid.git
cd FlexGrid
# Abrir index.html en tu navegador
# O usar un servidor local:
npx serve .
```

## Licencia

Proyecto educativo de uso libre. Modifica, experimenta y aprende.
