# Flujo de la Aplicación - Minimalist Portfolio

## Diagrama de componentes

```
┌─────────────────────────────────────────────────────────────────┐
│                         app/layout.tsx                           │
│              ThemeProvider + Children + Analytics               │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
                   ┌──────────────────┐
                   │  app/page.tsx    │
                   │  (Home Component)│
                   └────────┬─────────┘
                            │
           ┌────────────────┼────────────────┐
           │                │                │
           ▼                ▼                ▼
    ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
    │   Sidebar    │ │ NavButtons   │ │ ThemeToggle  │
    │              │ │              │ │              │
    │ ProfileSide  │ │ Navigation   │ │ Dark/Light   │
    │ bar (shared) │ │              │ │              │
    └──────────────┘ └──────────────┘ └──────────────┘
           │                │                │
           │                │ (onClick)      │
           │                ▼                │
           │     ┌────────────────────┐     │
           │     │ activeSection      │     │
           │     │ State Management   │     │
           │     └────────────────────┘     │
           │                │                │
           │    ┌───────────┼────────────────┼───────────┐
           │    │           │                │           │
           ▼    ▼           ▼                ▼           ▼
    ┌────────────────────────────────────────────────────────┐
    │  renderSection(activeSection)                          │
    │  ├─ 'about'      → AboutSection                        │
    │  ├─ 'resume'     → ResumeSection                       │
    │  ├─ 'portfolio'  → PortfolioSection                    │
    │  ├─ 'blog'       → BlogSection                         │
    │  └─ 'contact'    → ContactSection                      │
    └────────────────────────────────────────────────────────┘
```

## Flujo de datos (Data Flow)

```
lib/portfolio-data.ts
│
├─ profileData ────────────► ProfileSidebar (features/shared)
├─ aboutData ──────────────► AboutSection (features/about)
├─ resumeData ─────────────► ResumeSection (features/resume)
├─ portfolioData ──────────► PortfolioSection (features/portfolio)
├─ blogData ───────────────► BlogSection (features/blog)
└─ contactData ────────────► ContactSection (features/contact)
```

## Estructura de Features

```
features/
│
├── about/
│   ├── components/
│   │   └── about-section.tsx
│   │       ├─ Services (Qué hace)
│   │       ├─ Testimonials (Testimonios)
│   │       └─ Clients (Clientes)
│   └── index.ts (Exporta: AboutSection)
│
├── resume/
│   ├── components/
│   │   └── resume-section.tsx
│   │       ├─ Education (Educación)
│   │       ├─ Experience (Experiencia)
│   │       └─ Skills (Habilidades)
│   └── index.ts (Exporta: ResumeSection)
│
├── portfolio/
│   ├── components/
│   │   └── portfolio-section.tsx
│   │       ├─ Filter buttons (Filtros)
│   │       └─ Project cards (Proyectos)
│   └── index.ts (Exporta: PortfolioSection)
│
├── blog/
│   ├── components/
│   │   └── blog-section.tsx
│   │       └─ Blog posts (Posts del blog)
│   └── index.ts (Exporta: BlogSection)
│
├── contact/
│   ├── components/
│   │   └── contact-section.tsx
│   │       ├─ Mapa (Ubicación)
│   │       ├─ Info (Contacto)
│   │       └─ Form (Formulario)
│   └── index.ts (Exporta: ContactSection)
│
└── shared/
    ├── components/
    │   ├── profile-sidebar.tsx (Avatar + Info + Social)
    │   ├── theme-toggle.tsx (Light/Dark mode)
    │   ├── theme-provider.tsx (Wrapper para temas)
    │   └── index.ts (Exporta todos)
    └── index.ts (Re-exporta de components/)
```

## Cómo se integran los imports

```typescript
// En app/page.tsx:

// Paso 1: Importar desde features
import { AboutSection } from '@/features/about'
import { ResumeSection } from '@/features/resume'
import { PortfolioSection } from '@/features/portfolio'
import { BlogSection } from '@/features/blog'
import { ContactSection } from '@/features/contact'
import { ProfileSidebar, ThemeToggle } from '@/features/shared'

// Paso 2: Importar datos
import { 
  profileData,
  aboutData,
  resumeData,
  portfolioData,
  blogData,
  contactData 
} from '@/lib/portfolio-data'

// Paso 3: Usar los datos
<AboutSection data={aboutData} />
<ResumeSection data={resumeData} />
// ...
```

## Ventajas de esta estructura

| Aspecto | Beneficio |
|---------|-----------|
| **Separación** | Cada feature es independiente y modular |
| **Escalabilidad** | Agregar nuevas features es simple |
| **Mantenimiento** | Cambios en una feature no afectan otras |
| **Testing** | Cada feature puede ser testeada aisladamente |
| **Legibilidad** | La estructura expresa claramente el propósito |
| **Reutilización** | Los componentes shared están centralizados |

## Cómo agregar una nueva feature

### Paso 1: Crear estructura
```bash
mkdir -p features/nueva-feature/components
```

### Paso 2: Crear componente
```typescript
// features/nueva-feature/components/nueva-feature-section.tsx
export function NuevaFeatureSection() {
  return <div>Mi nueva feature</div>
}
```

### Paso 3: Exportar desde index
```typescript
// features/nueva-feature/index.ts
export { NuevaFeatureSection } from './components/nueva-feature-section'
```

### Paso 4: Usar en page.tsx
```typescript
// app/page.tsx
import { NuevaFeatureSection } from '@/features/nueva-feature'

// En el JSX:
{activeSection === 'nueva-feature' && <NuevaFeatureSection data={nuevaFeatureData} />}
```

## Mejores prácticas

1. **Mantén las features independientes** - Evita imports cruzados
2. **Usa shared para lo común** - ProfileSidebar, Loaders, etc.
3. **Agrupa componentes relacionados** - Dentro de su feature
4. **Exporta desde index.ts** - Para imports limpios
5. **Documenta las features complejas** - Con comentarios y README
6. **Usa TypeScript** - Para type-safety

---

Esta arquitectura es escalable, mantenible y lista para crecer. ¡Adelante! 🚀
