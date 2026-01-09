# AYA - Warm & Empathetic Social Aid Website

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue 3">
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
</p>

## 🌟 Descripción

**AYA** (Ayuda Y Acompañamiento) es una plataforma web diseñada para proporcionar apoyo psicológico personalizado y compañía a personas que lo necesitan. El sitio web presenta una interfaz cálida y empática que invita a los usuarios a buscar ayuda y a unirse como voluntarios.

Nuestro lema es: **"One help at a time"** - Una ayuda a la vez.

## ✨ Características Principales

- 🎨 **Diseño Moderno y Empático**: Interfaz limpia con paleta de colores verdes claros y cálidos
- 📱 **Totalmente Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- 🌓 **Modo Oscuro**: Soporte completo para dark mode
- ⚡ **Rendimiento Optimizado**: Construido con Vite para tiempos de carga ultrarrápidos
- 🎯 **Accesibilidad**: Diseñado pensando en la accesibilidad y usabilidad
- 🎭 **Animaciones Suaves**: Transiciones y efectos hover cuidadosamente diseñados

## 🎯 Secciones del Sitio

### 🏠 Hero Section
- Presentación principal con mensaje inspirador
- Botones de acción (Get Support Now / Become a Volunteer)
- Prueba social con contador de voluntarios activos
- Imagen principal con efectos visuales sutiles

### 💚 Mission Statement
- Declaración de misión centrada y poderosa
- Mensaje sobre la importancia de la conexión humana

### 👥 Who We Help
Tres categorías principales de ayuda:
- **Youth & Adolescents**: Apoyo para jóvenes navegando desafíos
- **People in Distress**: Soporte emocional inmediato
- **Elderly Companionship**: Compañía para adultos mayores

### 🔄 How It Works
Proceso simplificado en 3 pasos:
1. **Reach Out** - Contacta nuestra línea segura 24/7
2. **Get Matched** - Emparejamiento con voluntario especializado
3. **Heal Together** - Comienza tu camino hacia la recuperación

### 🆘 Emergency Crisis Section
- Información destacada de hotline 24/7
- Botón de chat en línea inmediato
- Sección visualmente prominente para situaciones de crisis

### 📧 Footer
- Información de la organización
- Enlaces de navegación
- Newsletter para mantener contacto
- Redes sociales

## 🛠️ Tecnologías Utilizadas

### Frontend
- **[Vue 3](https://vuejs.org/)** - Framework JavaScript progresivo
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool ultrarrápido
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Material Symbols](https://fonts.google.com/icons)** - Iconos modernos y consistentes

### Fuentes
- **[Inter](https://fonts.google.com/specimen/Inter)** - Tipografía principal (Display)

## 🎨 Paleta de Colores

El sitio utiliza una paleta de **verdes claros y cálidos** para transmitir calma, esperanza y crecimiento:

### Verde Principal (Primary)
- **Primary**: `green-400` (#4ade80) - Verde claro vibrante
- **Variaciones**: Del `green-50` (muy claro) al `green-950` (muy oscuro)

### Colores de Texto
- **Oscuro**: `gray-900` - Para textos principales
- **Medio**: `green-700` - Texto secundario con tono verde cálido
- **Claro**: `green-300` - Texto en modo oscuro

### Fondos
- **Light Mode**: `green-50` / `white`
- **Dark Mode**: `green-950` / `green-900`

## 📁 Estructura del Proyecto

```
aya-web-site/
├── src/
│   ├── components/
│   │   ├── Header.vue           # Navegación principal
│   │   ├── HeroSection.vue      # Sección hero
│   │   ├── MissionStatement.vue # Declaración de misión
│   │   ├── WhoWeHelp.vue        # Tarjetas de ayuda
│   │   ├── HowItWorks.vue       # Proceso en 3 pasos
│   │   ├── CrisisSection.vue    # Sección de emergencia
│   │   └── Footer.vue           # Pie de página
│   ├── App.vue                  # Componente principal
│   ├── main.ts                  # Punto de entrada
│   └── style.css                # Estilos globales (Tailwind)
├── index.html                   # HTML principal
├── tailwind.config.js           # Configuración de Tailwind
├── postcss.config.js            # Configuración de PostCSS
└── package.json                 # Dependencias del proyecto
```

## 🚀 Instalación y Uso

### Prerequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd aya-web-site
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173` (o el puerto que Vite asigne)

### Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Preview de Producción

```bash
npm run preview
```

## 🎯 Características Técnicas

### Componentes Vue
- Todos los componentes usan `<script setup>` de Vue 3
- TypeScript para type safety
- Composables reutilizables (preparado para expansión)

### Estilos
- **Tailwind CSS** con configuración personalizada
- Clases semánticas en lugar de valores hexadecimales
- Variables CSS para temas
- Soporte completo de dark mode

### Optimizaciones
- Lazy loading de imágenes
- Code splitting automático con Vite
- CSS purging en producción
- Minificación de assets

## 🌟 Componentes Destacados

### Header
- Navegación sticky con backdrop blur
- Logo personalizado con SVG
- Botones CTA destacados
- Responsive con menú oculto en móviles

### HeroSection
- Layout en grid responsivo
- Efectos de blur decorativos
- Imágenes optimizadas con aspect ratio
- Social proof integrado

### WhoWeHelp
- Tarjetas con hover effects
- Iconos Material Symbols
- Animaciones suaves en hover
- Grid responsivo (3 columnas → 1 columna en móvil)

### HowItWorks
- Línea punteada conectando pasos
- Números circulares destacados
- Layout adaptable (horizontal → vertical en móvil)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está bajo derechos reservados.

## 💚 Misión

> "Restoring hope through human connection and professional empathy."

Creemos en el poder de la confianza y la fuerza de ser escuchados. Nuestra misión es proporcionar un espacio seguro y confidencial para que cada individuo encuentre el apoyo que necesita.

---

**AYA Foundation** - © 2024 Todos los derechos reservados

*Dedicados al bienestar mental y la conexión social. Cada voz merece ser escuchada, cada alma merece compañía.*
