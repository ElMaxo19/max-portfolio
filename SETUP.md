# Guía de Instalación - Minimalist Portfolio

## Requisitos previos

Asegúrate de tener instalados:
- **Node.js 18+** (recomendado 20 LTS)
- **pnpm** (recomendado) o **npm** o **yarn**

Verifica tus versiones:
```bash
node --version
pnpm --version  # o npm --version
```

## Método 1: Descargar desde v0 y usar localmente

### Paso 1: Descargar el proyecto
1. En v0.app, haz clic en los tres puntos (⋯) en la esquina superior derecha
2. Selecciona "Download ZIP"
3. Extrae el archivo en tu carpeta de desarrollo

### Paso 2: Abrir en tu IDE

#### VSCode (recomendado)
```bash
cd ruta/a/proyecto
code .
```

#### Otros IDEs
- Abre tu IDE preferido (WebStorm, Vim, Sublime, etc.)
- Abre la carpeta del proyecto

### Paso 3: Instalar dependencias

```bash
# Con pnpm (recomendado)
pnpm install

# O con npm
npm install

# O con yarn
yarn install
```

### Paso 4: Ejecutar el servidor de desarrollo

```bash
# Con pnpm
pnpm dev

# O con npm
npm run dev

# O con yarn
yarn dev
```

El servidor estará disponible en `http://localhost:3000`

## Método 2: Usar el comando shadcn CLI (Recomendado)

Si tienes el CLI de shadcn instalado, puedes hacer:

```bash
# Instalar globalmente si no lo tienes
npm install -g shadcn-ui

# Crear/instalar el proyecto
npx shadcn@latest init -d

# O si ya descargaste el ZIP, dentro de la carpeta:
pnpm install
```

## Método 3: Clonar desde GitHub (Si el repo está disponible)

```bash
git clone https://github.com/tu-usuario/minimalist-portfolio.git
cd minimalist-portfolio
pnpm install
pnpm dev
```

## Estructura del proyecto en tu IDE

```
minimalist-portfolio/
├── app/
│   ├── layout.tsx         ← Configuración raíz
│   ├── page.tsx           ← Página principal (no toques mucho aquí)
│   └── globals.css
├── features/              ← TU ZONA DE TRABAJO
│   ├── about/
│   ├── resume/
│   ├── portfolio/
│   ├── blog/
│   ├── contact/
│   └── shared/            ← Componentes compartidos
├── components/ui/         ← shadcn/ui (no borres)
├── lib/
│   └── portfolio-data.ts  ← Edita aquí los datos
├── public/                ← Imágenes
└── package.json
```

## Cómo editar el contenido

### Editar datos (Lo más fácil)
```typescript
// lib/portfolio-data.ts
export const profileData = {
  name: 'Tu nombre',  // ← Cambia aquí
  title: 'Tu profesión',
  // ...
}
```

### Editar una sección (Más control)
```typescript
// features/about/components/about-section.tsx
export function AboutSection({ data = aboutData }: AboutSectionProps) {
  // Modifica el JSX aquí
  return (...)
}
```

### Agregar una nueva feature
```bash
# 1. Crea la carpeta
mkdir -p features/mi-feature/components

# 2. Crea el componente
# features/mi-feature/components/mi-feature-section.tsx

# 3. Crea el index
# features/mi-feature/index.ts
export { MiFeatureSection } from './components/mi-feature-section'

# 4. Importa en app/page.tsx
import { MiFeatureSection } from '@/features/mi-feature'
```

## Comandos útiles

```bash
# Desarrollo
pnpm dev              # Inicia servidor local

# Build
pnpm build            # Prepara para producción
pnpm start            # Ejecuta build en producción

# Calidad de código
pnpm lint             # Ejecuta ESLint
pnpm type-check       # Verifica tipos TypeScript

# shadcn/ui
pnpm exec shadcn add <component>  # Agregar componente UI
```

## Troubleshooting

### "Puerto 3000 en uso"
```bash
# Usa un puerto diferente
pnpm dev -- -p 3001
```

### "Module not found"
```bash
# Limpia la caché
rm -rf .next node_modules/.pnpm
pnpm install
```

### "Build falla"
```bash
# Verifica tipos
pnpm type-check

# Ver errores completos
pnpm build --verbose
```

## Editor recomendado (VSCode)

### Extensiones recomendadas
1. **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
2. **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
3. **TypeScript Vue Plugin** - vue.volar
4. **Prettier - Code formatter** - esbenp.prettier-vscode

### Configuración recomendada (.vscode/settings.json)
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Desplegar a Producción

### Opción 1: Vercel (Recomendado)
```bash
# Instala Vercel CLI
npm i -g vercel

# Despliega
vercel
```

### Opción 2: Git + GitHub Pages / Netlify
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

## Preguntas frecuentes

**P: ¿Cómo cambio los colores?**
R: Edita `app/globals.css` - Las variables CSS están en la parte superior.

**P: ¿Cómo agrego más proyectos?**
R: Edita el array `projects` en `lib/portfolio-data.ts`

**P: ¿Cómo cambio las imágenes?**
R: Sube las imágenes a `public/` y actualiza los paths en `portfolio-data.ts`

**P: ¿Necesito Vercel para desplegar?**
R: No, puedes usar GitHub Pages, Netlify, o cualquier hosting que soporte Node.js

---

¡Listo! Ahora tienes todo configurado para trabajar localmente. Happy coding! 🚀
