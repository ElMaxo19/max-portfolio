# 🚀 Guía de Instalación - Minimalist Portfolio

## Paso 1: Descargar el Proyecto

### Opción A: Descargar desde v0.app (Recomendado)
1. En la esquina superior derecha del editor v0, haz clic en los **tres puntos (⋮)**
2. Selecciona **"Download ZIP"**
3. Descomprime el archivo en tu computadora

### Opción B: Clonar desde GitHub (si está conectado a un repositorio)
```bash
git clone <tu-url-del-repositorio>
cd minimalist-portfolio
```

---

## Paso 2: Instalar Dependencias

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
pnpm install
```

> **Nota:** Si no tienes `pnpm` instalado, instálalo globalmente:
> ```bash
> npm install -g pnpm
> ```

---

## Paso 3: Abrir en tu IDE

### Con Visual Studio Code
```bash
code .
```

### Con WebStorm
```bash
webstorm .
```

### Con Cursor
```bash
cursor .
```

O abre la carpeta manualmente desde tu IDE favorito.

---

## Paso 4: Ejecutar el Servidor de Desarrollo

En la terminal dentro del proyecto, ejecuta:

```bash
pnpm dev
```

Verás algo como:
```
  ▲ Next.js 15.x.x
  - Local:        http://localhost:3000
  - Environments: .env.local
```

Abre `http://localhost:3000` en tu navegador.

---

## Paso 5: Empezar a Editar

### Estructura del Proyecto

```
project/
├── app/
│   ├── layout.tsx           (Estructura principal)
│   ├── page.tsx             (Página de inicio)
│   ├── globals.css          (Estilos globales)
│   └── favicon.ico
│
├── features/                (Screaming Architecture)
│   ├── about/
│   │   ├── components/
│   │   │   └── about-section.tsx
│   │   └── index.ts
│   │
│   ├── resume/
│   │   ├── components/
│   │   │   └── resume-section.tsx
│   │   └── index.ts
│   │
│   ├── portfolio/
│   │   ├── components/
│   │   │   └── portfolio-section.tsx
│   │   └── index.ts
│   │
│   ├── blog/
│   │   ├── components/
│   │   │   └── blog-section.tsx
│   │   └── index.ts
│   │
│   ├── contact/
│   │   ├── components/
│   │   │   └── contact-section.tsx
│   │   └── index.ts
│   │
│   └── shared/
│       ├── components/
│       │   ├── profile-sidebar.tsx
│       │   ├── theme-toggle.tsx
│       │   ├── theme-provider.tsx
│       │   └── index.ts
│       └── index.ts
│
├── components/
│   └── ui/                  (Componentes de shadcn/ui)
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
│
├── lib/
│   ├── portfolio-data.ts    (Datos del portfolio)
│   └── utils.ts
│
├── public/
│   ├── images/             (Imágenes de proyectos)
│   └── ...
│
├── node_modules/
├── .env.local              (Variables de entorno - crear si es necesario)
├── package.json
├── tsconfig.json
├── next.config.mjs
└── tailwind.config.ts
```

---

## Cambios Comunes

### Modificar datos del portfolio
Edita `/vercel/share/v0-project/lib/portfolio-data.ts`

### Agregar un nuevo proyecto
1. Edita `lib/portfolio-data.ts` y agrega a `portfolioData`
2. Agrega una imagen en `public/`
3. Los cambios se verán automáticamente en el navegador (Hot Reload)

### Cambiar colores/temas
- Edita `app/globals.css` para los tokens de diseño
- O usa el **Design Mode** en v0.app (botón Settings → Design)

### Agregar una nueva sección (feature)
1. Crea una nueva carpeta: `features/tu-feature/`
2. Agrega la estructura:
   ```
   features/tu-feature/
   ├── components/
   │   └── tu-feature-section.tsx
   └── index.ts
   ```
3. Exporta desde `index.ts`:
   ```typescript
   export { TuFeatureSection } from './components/tu-feature-section'
   ```
4. Importa en `app/page.tsx`

---

## Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Compila para producción |
| `pnpm start` | Ejecuta la versión compilada |
| `pnpm lint` | Ejecuta el linter |
| `pnpm type-check` | Verifica tipos TypeScript |

---

## Desplegar a Producción

### En Vercel (Recomendado)
1. Sube tu proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Haz clic en "New Project"
4. Selecciona tu repositorio
5. Haz clic en "Deploy"

### En otros hosting
```bash
pnpm build
pnpm start
```

---

## Solución de Problemas

### Puerto 3000 ya está en uso
```bash
# Mata el proceso
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# O usa otro puerto
pnpm dev -- -p 3001
```

### Errores de módulos
```bash
# Limpia node_modules e instala de nuevo
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Hot Reload no funciona
1. Reinicia el servidor: `Ctrl+C` y luego `pnpm dev`
2. Actualiza el navegador: `F5` o `Ctrl+Shift+R` (limpia cache)

---

## Recursos

- 📖 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [shadcn/ui](https://ui.shadcn.com)
- 🌊 [Tailwind CSS](https://tailwindcss.com)
- 📝 [ARCHITECTURE.md](./ARCHITECTURE.md) - Detalles de la arquitectura
- ⚡ [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) - Referencia rápida
- 🎯 [ARCHITECTURE_DIAGRAM.md](./ARCHITECTURE_DIAGRAM.md) - Diagrama visual

---

**¡Listo! Ahora puedes modificar tu portfolio como quieras.** 🎉
