# Lida Digital — Web App

Monorepo for the Lida Digital client website, admin panel, and backend API.

## Structure

```
lida-app/
├── client/     # Public-facing website (React + Vite + Tailwind)
├── admin/      # Admin dashboard (React + Vite)
└── backend/    # API server (Cloudflare Workers)
```

## Getting Started

### 1. Install dependencies

```bash
cd client && npm install
cd ../admin && npm install
```

### 2. Set up template assets (required — not in git)

The Orixo theme assets are a licensed purchase and are excluded from version control.
Copy the compiled assets from the purchased template into the client public folder:

```bash
# Windows
xcopy /E /I "client\public\themeforest-xASBMjuU-orixo-digital-agency-portfolio-html-template\Main files\assets" "client\public\assets"
```

```bash
# Mac / Linux
cp -r "client/public/themeforest-.../Main files/assets" client/public/assets
```

### 3. Run dev servers

```bash
# Client (port 3000)
cd client && npm run dev

# Admin (port 3001)
cd admin && npm run dev
```

## Site Data

All brand content, colors, services, team, and case studies live in:

```
client/src/store/site.js
```

This is the single source of truth — consumed by React components and will be synced to the Cloudflare Workers API.
