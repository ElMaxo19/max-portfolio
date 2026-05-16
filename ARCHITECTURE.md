# Minimalist Portfolio - Screaming Architecture

Este proyecto sigue el patrón de **Screaming Architecture**, donde la estructura del código refleja claramente el propósito y características del proyecto.

## Estructura de Carpetas

```
/vercel/share/v0-project/
├── app/                           # Rutas y configuración de Next.js
│   ├── layout.tsx                # Layout raíz con ThemeProvider
│   ├── page.tsx                  # Página principal
│   └── globals.css               # Estilos globales
│
├── features/                      # Features divididas por dominio
│   ├── about/                    # Feature: Sección About
│   │   ├── components/
│   │   │   └── about-section.tsx
│   │   └── index.ts
│   │
│   ├── resume/                   # Feature: Sección Resume
│   │   ├── components/
│   │   │   └── resume-section.tsx
│   │   └── index.ts
│   │
│   ├── portfolio/                # Feature: Sección Portfolio
│   │   ├── components/
│   │   │   └── portfolio-section.tsx
│   │   └── index.ts
│   │
│   ├── blog/                     # Feature: Sección Blog
│   │   ├── components/
│   │   │   └── blog-section.tsx
│   │   └── index.ts
│   │
│   ├── contact/                  # Feature: Sección Contact
│   │   ├── components/
│   │   │   └── contact-section.tsx
│   │   └── index.ts
│   │
│   └── shared/                   # Componentes compartidos entre features
│       ├── components/
│       │   ├── profile-sidebar.tsx
│       │   ├── theme-toggle.tsx
│       │   ├── theme-provider.tsx
│       │   └── index.ts
│       └── index.ts
│
├── components/
│   ├── ui/                       # Componentes de shadcn/ui (no mover)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   └── (componentes específicos si es necesario)
│
├── lib/
│   ├── utils.ts                 # Funciones utilitarias (cn, etc.)
│   └── portfolio-data.ts        # Datos del portfolio
│
├── public/                       # Assets estáticos
│   ├── images/
│   └── ...
│
├── hooks/                        # React hooks personalizados
│   └── use-mobile.tsx
│
└── (archivos de configuración)
```

## Ventajas de Screaming Architecture

1. **Claridad**: La estructura expresa el propósito del proyecto a simple vista
2. **Escalabilidad**: Fácil agregar nuevas features sin afectar las existentes
3. **Mantenibilidad**: Cada feature es independiente y modular
4. **Reutilización**: Los componentes compartidos están en `shared/`
5. **Testabilidad**: Cada feature puede testearse de forma aislada

## Imports en la aplicación

Todos los imports ahora apuntan a las features:

```typescript
// Antes
import { AboutSection } from '@/components/about-section'

// Después
import { AboutSection } from '@/features/about'
import { ResumeSection } from '@/features/resume'
import { ContactSection } from '@/features/contact'
import { ProfileSidebar, ThemeToggle } from '@/features/shared'
```

## Agregar una nueva feature

1. Crear una carpeta en `features/nombre-feature`
2. Dentro, crear `components/` con los componentes específicos
3. Crear `index.ts` exportando los componentes
4. Importar en `app/page.tsx` como necesario

Ejemplo:
```typescript
// features/testimonials/components/testimonials-section.tsx
export function TestimonialsSection() { ... }

// features/testimonials/index.ts
export { TestimonialsSection } from './components/testimonials-section'

// app/page.tsx
import { TestimonialsSection } from '@/features/testimonials'
```
