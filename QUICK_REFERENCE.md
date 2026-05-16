# Quick Reference - Minimalist Portfolio

## 🚀 Inicio rápido

```bash
pnpm install
pnpm dev
# Abre http://localhost:3000
```

## 📁 Dónde está qué

| Necesidad | Dónde | Archivo |
|-----------|-------|---------|
| **Cambiar nombre/email** | Datos | `lib/portfolio-data.ts` |
| **Agregar proyectos** | Datos | `lib/portfolio-data.ts` |
| **Cambiar colores** | Estilos | `app/globals.css` |
| **Editar "About"** | Componente | `features/about/...` |
| **Editar "Resume"** | Componente | `features/resume/...` |
| **Agregar nueva sección** | Nueva feature | `features/nueva/...` |
| **Componentes UI** | Shadn/ui | `components/ui/` |

## ✏️ Ediciones comunes

### Cambiar nombre y email

```typescript
// lib/portfolio-data.ts
export const profileData = {
  name: '🔴 AQUÍ tu nombre',
  title: '🔴 AQUÍ tu profesión',
  email: '🔴 AQUÍ tu email',
  // ...
}
```

### Agregar proyecto

```typescript
// lib/portfolio-data.ts
export const portfolioData = {
  projects: [
    // ... proyectos existentes
    {
      title: '🔴 TU PROYECTO',
      category: 'web development',
      image: '/imagen.png',
      description: '🔴 Descripción',
      tech: ['React', 'Node.js'],
      liveUrl: '🔴 URL',
      githubUrl: '🔴 GitHub',
    },
  ]
}
```

### Cambiar color principal

```css
/* app/globals.css */
@layer base {
  :root {
    --accent: 🔴 AQUÍ_EL_COLOR; /* Cambiar este */
  }
}
```

## 📂 Crear nueva feature

```bash
# 1. Crear carpeta
mkdir -p features/NOMBRE/components

# 2. Crear archivo: features/NOMBRE/components/NOMBRE-section.tsx
export function NOmbreSection() {
  return <div>Contenido</div>
}

# 3. Crear: features/NOMBRE/index.ts
export { NombreSection } from './components/NOMBRE-section'

# 4. Importar en app/page.tsx
import { NombreSection } from '@/features/NOMBRE'

# 5. Usar en JSX
{activeSection === 'NOMBRE' && <NombreSection data={data} />}
```

## 🎨 Cambiar tema

Se cambia automáticamente con el botón en la esquina superior derecha.

## 🌐 Desplegar

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### GitHub + Vercel
```bash
git push origin main  # Vercel se despliega automáticamente
```

## 🐛 Troubleshooting

| Problema | Solución |
|----------|----------|
| Puerto en uso | `pnpm dev -- -p 3001` |
| Módulo no encontrado | `pnpm install` |
| Build falla | `pnpm type-check` |
| Cambios no se ven | F5 para refrescar |

## 📚 Estructura features

```
features/NOMBRE/
├── components/
│   └── NOMBRE-section.tsx     ← Componente principal
└── index.ts                    ← export { NombreSection }
```

## 💻 Archivos clave

```typescript
// app/page.tsx - Componente raíz (NO toques mucho)
// lib/portfolio-data.ts - EDITA AQUÍ los datos
// features/*/components/*.tsx - Componentes (EDITA POR SECCIÓN)
// app/globals.css - Colores y estilos globales
// components/ui/ - shadcn (NO BORRES)
```

## 🔗 Imports

```typescript
// Componentes de features
import { AboutSection } from '@/features/about'

// Componentes compartidos
import { ProfileSidebar, ThemeToggle } from '@/features/shared'

// Datos
import { profileData } from '@/lib/portfolio-data'

// Componentes UI
import { Button } from '@/components/ui/button'
```

## 📝 Notas importantes

- ✅ Edita `lib/portfolio-data.ts` para cambiar contenido
- ✅ Cada feature en `features/NOMBRE` es independiente
- ✅ Los componentes de `components/ui/` NO los toques (shadcn)
- ✅ Los cambios se ven en vivo con HMR
- ✅ Usa TypeScript para seguridad
- ⚠️ No elimines archivos de `components/ui/`
- ⚠️ Respeta la estructura de features

## 🎯 Próximos pasos

1. Lee [SETUP.md](./SETUP.md) para instalación completa
2. Lee [ARCHITECTURE.md](./ARCHITECTURE.md) para entender la estructura
3. Empieza a editar `lib/portfolio-data.ts`
4. Personaliza los colores en `app/globals.css`
5. Agrega tus proyectos
6. ¡Despliega!

## 📞 Necesitas ayuda?

- 📖 Lee los archivos `.md` en la raíz
- 🔍 Busca en las carpetas de `features/`
- 💬 Los comentarios en el código también ayudan

---

**¡Listo para customizar! Diviértete desarrollando. 🚀**
