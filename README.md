<div align="center">
<h1>🌟 THE FRONTLIGHT</h1>
<p><strong>A Modern Project Showcase Portfolio</strong></p>
<p>Built with React, Vite, GSAP & Tailwind CSS</p>
</div>

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Development](#development)
- [Building & Deployment](#building--deployment)

---

## ✨ Features

- **3D Carousel Gallery** - Smooth animated project showcase with parallax effects
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **GSAP Animations** - High-performance animations for smooth interactions
- **Custom Cursor** - Interactive mouse cursor with magnetic effects
- **Smooth Scrolling** - Wheel-based navigation through projects
- **Local Image Optimization** - All project images load locally
- **Modern UI** - Clean, minimalist design with custom design system

---

## 🛠 Tech Stack

- **React 19** - UI framework
- **Vite 6.4** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **GSAP 3** - Advanced animations
- **TypeScript** - Type-safe development
- **Lucide React** - Icon library
- **Motion** - Animation utilities

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. **Clone/Navigate to the project:**
   ```bash
   cd "path/to/project"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at:
   - Local: `http://localhost:3000/`
   - Network: `http://192.168.1.65:3000/`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation header
│   ├── Gallery.tsx         # 3D carousel gallery
│   ├── Footer.tsx          # Footer component
│   ├── CustomCursor.tsx    # Interactive cursor
│   ├── MagneticButton.tsx  # Magnetic button effect
│   └── GhostGrid.tsx       # Background grid animation
├── App.tsx                 # Main app component
├── data.ts                 # Projects data & types
├── main.tsx                # Entry point
└── index.css               # Global styles
img/
├── terra-earth.png
├── ShopMeta.png
├── multi-ai-sdk.png
├── neon_rush_game.png
├── ReflexCircuit.png
├── dependra-shop.png
├── my-portfilo.png
├── search-sorting.png
├── ui-ux.png
└── to-do-list.png
```

---

## 🧩 Components

### **Navbar**
- Fixed header with branding
- Displays "PROJECT SHOWCASE" title
- Semi-transparent backdrop with blur effect

### **Gallery**
- Main 3D carousel component
- Wheel scroll navigation
- Smooth animations with GSAP
- Project cards with:
  - Project image
  - Type/category label
  - Title
  - GitHub & Live links

### **CustomCursor**
- Interactive mouse cursor
- Follows mouse movement
- Scales on hover

### **MagneticButton**
- Buttons with magnetic effects
- Smooth hover animations
- Uses Framer Motion

### **GhostGrid**
- Background animated grid
- Adds visual interest to the page

### **Footer**
- Contact information
- Social links
- Copyright information

---

## 📝 Adding Projects

Edit `src/data.ts` to add new projects:

```typescript
{
  id: '11',
  title: 'Your Project Name',
  type: 'PROJECT TYPE',
  github: 'https://github.com/username/repo',
  live: 'https://project-url.com',
  image: '/img/your-image.png'
}
```

**Image Requirements:**
- Place image in `img/` folder
- Use PNG or JPG format
- Recommended: 1920x1080px or higher

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run clean` | Remove dist folder |
| `npm run lint` | Check TypeScript types |

### Development Workflow

1. Start dev server: `npm run dev`
2. Edit files in `src/` - hot reload enabled
3. Changes auto-reflect in browser
4. Check console for any errors

---

## 🏗 Building & Deployment

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Deploy

The built app can be deployed to:
- **Vercel** - Zero-config deployment
- **Netlify** - Drag & drop or Git integration
- **GitHub Pages** - Static hosting
- **Any static host** - Just upload the `dist/` folder

---

## 🎨 Customization

### Colors & Styling
- Edit Tailwind config in `tailwind.config.js`
- Custom colors use CSS variables
- Modify `src/index.css` for global styles

### Animations
- GSAP animations in `Gallery.tsx`
- Customize animation timing & easing
- Refer to [GSAP Documentation](https://gsap.com/docs)

### Layout
- Tailwind utility classes for responsive design
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`

---

## 🐛 Troubleshooting

**Issue:** Images not loading
- ✅ Ensure images are in `img/` folder
- ✅ Check image paths in `data.ts` (should be `/img/filename`)
- ✅ Clear browser cache

**Issue:** Animations lagging
- ✅ Check hardware acceleration
- ✅ Reduce animation complexity
- ✅ Close other browser tabs

---

## 📄 License

This project is open source and available under the MIT License.

---

<div align="center">
<p>Made with ❤️ by <strong>Adarsh</strong></p>
</div>
