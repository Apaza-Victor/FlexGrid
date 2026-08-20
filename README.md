# FlexGrid - Guia Interactiva de CSS Flexbox & Grid

Sitio web educativo interactivo para aprender CSS Flexbox y Grid desde cero. Incluye playgrounds en tiempo real, patrones de layout, conceptos fundamentales y mas de 90 recursos gratuitos.

## Estructura del Proyecto

```
FlexGrid/
├── index.html                  # Landing page principal
├── assets/
│   ├── css/
│   │   └── style.css           # Estilos compartidos + responsive
│   └── js/
│       ├── theme.js            # Toggle dark/light con localStorage
│       ├── playground.js       # Interactividad flexbox & grid
│       ├── three-hero.js       # Background 3D con Three.js
│       ├── babylon-scene.js    # Escena 3D interactiva con Babylon.js
│       └── animations.js       # Animaciones de entrada con anime.js
├── pages/
│   ├── flexbox.html            # Playground interactivo de Flexbox
│   ├── grid.html               # Playground interactivo de CSS Grid
│   ├── patrones.html           # 10 patrones de layout reales
│   ├── conceptos.html          # Fundamentos de CSS
│   └── recursos.html           # +90 enlaces organizados en 8 categorias
└── README.md
```

## Paginas

| Pagina | Descripcion |
|--------|-------------|
| **Inicio** | Hero con Three.js, acceso rapido a todas las secciones |
| **Flexbox** | Playground con propiedades del container y de cada item seleccionable |
| **Grid** | Playground con grid-auto-flow, grid-auto-rows, grid-template-areas |
| **Patrones** | 10 layouts reales con demo visual + codigo (Holy Grail, sidebar, cards, etc.) |
| **Conceptos** | Box Model, display, position, especificidad, unidades, selectores, media queries, variables |
| **Recursos** | +90 enlaces: documentacion, juegos, herramientas, cursos, desafios, diseno, referencias |

## Tecnologias

- **HTML5** - Semantico y accesible
- **CSS3** - Variables, Grid, Flexbox, glassmorphism, gradientes
- **JavaScript ES6+** - Vanilla, sin frameworks
- **Bootstrap 5.3.3** - Grid system y utilidades basicas
- **Bootstrap Icons** - Iconografia
- **Google Fonts** - Inter (UI) + JetBrains Mono (codigo)
- **Three.js** - Background 3D del hero
- **Babylon.js** - Escena 3D interactiva en recursos
- **anime.js** - Animaciones de entrada staggered

## Caracteristicas

- Tema dark/light con persistencia en localStorage
- Responsive desde 360px hasta 4K
- Playground interactivo con cambios en tiempo real
- Codigo copiable con un click
- Animaciones de entrada suaves
- Background 3D interactivo
- Navbar responsive con hamburger menu en mobile

## Como Usar

1. Abre `index.html` en tu navegador
2. Navega por las secciones usando la barra de navegacion
3. En Flexbox/Grid: modifica propiedades y ve los cambios al instante
4. Haz click en los items del playground para editarlos individualmente
5. Copia el codigo generado con el boton "Copiar"

## Responsive

| Breakpoint | Comportamiento |
|------------|----------------|
| `> 768px` | Layout completo, navbar horizontal |
| `<= 768px` | Navbar hamburger, cards apiladas |
| `<= 480px` | Tipografia reducida, playground compacto |
| `<= 380px` | Layout minimo optimizado para pantallas pequenas |

## Licencia

Proyecto educativo de uso libre. Modifica, experimenta y aprende.
