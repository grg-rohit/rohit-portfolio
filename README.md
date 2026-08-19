# Rohit's Portfolio

Personal portfolio site, built with React, TypeScript, and Tailwind. Has a small three.js atom animation in the Stack section that took way longer to get right than I'd like to admit.

## Stack

- React 19 + Vite
- Tailwind CSS
- react-three-fiber / drei / three.js for the 3D bits
- lucide-react / react-icons for icons

Build for production with `npm run build`, preview the build with `npm run preview`.

## Structure

- `src/sections` – the actual page sections (Hero, About, Stack, Experience, Projects, Contact)
- `src/components` – shared UI pieces
- `src/components/atom` – the orbiting-electron animation used in Stack
- `src/lib` – small hooks/utilities (scroll spotlight, reduced motion, in-view detection)
