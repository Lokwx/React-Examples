#!/bin/bash

read -p "Project name: " project

npm create vite@latest "$project" -- --template react
cd "$project" || exit 1

npm install
npm install tailwindcss @tailwindcss/vite

cat > vite.config.js <<'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
EOF

cat > src/index.css <<'EOF'
@import "tailwindcss";
EOF

cat > src/App.jsx <<'EOF'
export default function App() {
  return (
    <div className="min-h-screen bg-red-700 text-white text-5xl p-10">
      Tailwind works
    </div>
  )
}
EOF

npm run dev