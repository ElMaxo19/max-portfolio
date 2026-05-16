# 🎯 Minimalist Portfolio - Screaming Architecture

Un portfolio minimalista construido con **Next.js 16**, **Tailwind CSS** y **Screaming Architecture** para máxima escalabilidad y mantenibilidad.

## ✨ Características

- ✅ **Screaming Architecture** - La estructura grita claramente su propósito
- ✅ **Componentes modulares** - Cada feature es independiente
- ✅ **Componentes de shadcn/ui** - UI profesional y accesible
- ✅ **Tema claro/oscuro** - Cambia entre temas dinámicamente
- ✅ **Responsive** - Funciona perfecto en móvil, tablet y desktop
- ✅ **Totalmente tipado** - TypeScript para seguridad de tipos
- ✅ **Optimizado** - Rápido con Turbopack en desarrollo

## 📁 Estructura del Proyecto

```
minimalist-portfolio/
├── 📂 app/
│   ├── layout.tsx           # Configuración raíz
│   ├── page.tsx             # Página principal
│   └── globals.css          # Estilos globales
│
├── 🎯 features/             # Features (Screaming Architecture)
│   ├── about/               # Sección About
│   ├── resume/              # Sección Resume
│   ├── portfolio/           # Sección Portfolio
│   ├── blog/                # Sección Blog
│   ├── contact/             # Sección Contact
│   └── shared/              # Componentes compartidos
│
├── 🎨 components/
│   └── ui/                  # shadcn/ui components
│
├── 📚 lib/
│   └── portfolio-data.ts    # Datos del portfolio
│
└── 📦 public/               # Assets estáticos
```

## 🚀 Instalación rápida

### Opción 1: Descargar de v0 (Recomendado)

```bash
# 1. Descarga el ZIP desde v0.app
# 2. Extrae el archivo
# 3. Abre en tu IDE preferido
# 4. Ejecuta:

pnpm install
pnpm dev
```

### Opción 2: Clonar con Git

```bash
git clone <repository-url>
cd minimalist-portfolio
pnpm install
pnpm dev
```

El servidor estará en `http://localhost:3000`

## 📖 Documentación

- **[SETUP.md](./SETUP.md)** - Guía completa de instalación
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Explicación de la arquitectura
- **[ARCHITECTURE_DIAGRAM.md](./ARCHITECTURE_DIAGRAM.md)** - Diagramas visuales

## 🎨 Customización

### Cambiar datos del portfolio

Edita `lib/portfolio-data.ts`:

```typescript
export const profileData = {
  name: 'Tu nombre',
  title: 'Tu profesión',
  avatar: '/tu-foto.png',
  // ...
}
```

### Cambiar colores

Edita `app/globals.css` y modifica las variables CSS:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --accent: 0 0% 0%;
    /* ... */
  }
}
```

### Agregar nuevos proyectos

Actualiza el array `projects` en `lib/portfolio-data.ts`

## 🏗️ Por qué Screaming Architecture?

La estructura del proyecto **expresa claramente su propósito**:

```
features/
├── about/          👈 "Este proyecto tiene una sección About"
├── resume/         👈 "Tiene una sección Resume"
├── portfolio/      👈 "Muestra un portfolio"
├── blog/           👈 "Tiene un blog"
├── contact/        👈 "Permite contacto"
└── shared/         👈 "Con componentes compartidos"
```

### Beneficios:

| Aspecto | Beneficio |
|---------|-----------|
| **Escalabilidad** | Agregar features es trivial |
| **Mantenimiento** | Cambios aislados por feature |
| **Testing** | Cada feature se prueba independientemente |
| **Onboarding** | Nuevos desarrolladores entienden rápido |
| **Reutilización** | Componentes compartidos centralizados |

## 📝 Comando útiles

```bash
# Desarrollo
pnpm dev              # Inicia servidor local

# Build
pnpm build            # Prepara para producción
pnpm start            # Ejecuta build en producción

# Calidad
pnpm lint             # ESLint
pnpm type-check       # Verifica tipos TypeScript
```

## 🚀 Desplegar a Producción

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Netlify / GitHub Pages

```bash
pnpm build
# Sube la carpeta .next a tu hosting
```

## 🎯 Cómo agregar una nueva sección

### 1️⃣ Crear la carpeta

```bash
mkdir -p features/mi-seccion/components
```

### 2️⃣ Crear el componente

```typescript
// features/mi-seccion/components/mi-seccion.tsx
export function MiSeccion() {
  return <div>Mi nueva sección</div>
}
```

### 3️⃣ Exportar desde index

```typescript
// features/mi-seccion/index.ts
export { MiSeccion } from './components/mi-seccion'
```

### 4️⃣ Usar en app/page.tsx

```typescript
import { MiSeccion } from '@/features/mi-seccion'

// En el JSX:
{activeSection === 'mi-seccion' && <MiSeccion />}
```

¡Listo! Tu nueva sección está integrada.

## 🎓 Tecnologías

- **Next.js 16** - Framework React con SSR
- **React 19** - Librería UI
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Componentes accesibles
- **Turbopack** - Bundler rápido

## 📄 Licencia

MIT - Libre para usar en proyectos personales y comerciales

## 💡 Tips

- Lee [ARCHITECTURE.md](./ARCHITECTURE.md) para entender la estructura
- Lee [SETUP.md](./SETUP.md) para la guía de instalación completa
- Consulta [ARCHITECTURE_DIAGRAM.md](./ARCHITECTURE_DIAGRAM.md) para ver diagramas
- Usa TypeScript para seguridad de tipos
- Mantén las features independientes

## 🤝 Contribuir

Si encuentras bugs o tienes sugerencias, reporta un issue.

---

**Hecho con ❤️ usando v0.app**

¿Dudas? Consulta la documentación completa en los archivos MD.
