# Source Lift — Landing Page

Site institucional da Source Lift, especialistas em peças para empilhadeiras.

**Stack:** React 19 + Vite 8 + CSS puro (sem Tailwind, sem libs de UI)

---

## 🚀 Deploy rápido (GitHub + Vercel)

### 1. Sobe pro GitHub

```bash
git init
git add .
git commit -m "feat: source lift landing page"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/sourcelift.git
git push -u origin main
```

### 2. Vercel

1. Acesse [vercel.com](https://vercel.com) → **Add New Project**
2. Importe o repositório `sourcelift`
3. Framework: **Vite** (detectado automático)
4. Clique **Deploy** — pronto ✅

O `vercel.json` já está configurado. Nenhuma variável de ambiente necessária.

---

## 🔧 Desenvolvimento local

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`

---

## ⚠️ Antes de publicar

**Confirme o número do WhatsApp** no arquivo `src/App.jsx`:

```js
const WA_NUMBER = '5511985922711' // ← linha ~50, ajuste aqui
```

Formato: `55` + DDD + número (sem espaços, traços ou parênteses).

---

## 📁 Estrutura

```
sourcelift/
├── public/
│   └── favicon.svg          # Favicon com logo Source Lift
├── src/
│   ├── App.jsx              # Componente principal (tudo aqui)
│   ├── index.css            # Estilos globais
│   └── main.jsx             # Entry point React
├── index.html               # HTML base com OG tags
├── vite.config.js
├── vercel.json
└── package.json
```
