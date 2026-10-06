# Solutions Media Admin

The admin restores the Lida workspace layout with Solutions Media branding: responsive sidebar, page search, light/dark themes, sign-in, media library, dashboard, and content editors. The UI uses the shadcn-admin patterns covered by `licenses/shadcn-admin-LICENSE`.

## Run locally

First follow [backend setup](../backend/README.md). In separate terminals:

```powershell
cd backend
npm run dev
```

```powershell
cd admin
npm run dev
```

```powershell
cd client
npm run dev
```

Open http://localhost:5174 and sign in as `admin`. The generated local password is in `backend/.dev.vars.dev` (comment near the top). The website runs at http://localhost:3000. The local Vite proxies send `/api` to port 8787.

## What works

- Create, edit, reorder, publish, unpublish, and delete team members, projects, services, and articles.
- Upload images/PDFs, browse the media library, and select images in the content editors.
- View uploaded-file counts, total storage, and recent uploads on the dashboard.
- Save upload size/type settings; the backend enforces them on subsequent uploads.
- View the configured administrator account. This remains a **single-admin** workspace; multi-user account creation and roles are not implemented.

Published records are authoritative. Unpublishing or deleting the last record leaves an empty public collection; it does not resurrect the seed content. Website data refreshes on navigation, window focus, and every minute.

## Checks

```powershell
npm run build
npm run lint
npm test
npm run test:content
```

The UI suite checks navigation, themes, settings submission, and mobile layout. The integration suite starts an isolated local D1/R2 backend and the real admin and website, then tests sign-in, publishing, media, validation, and settings. Tests use installed Microsoft Edge in headless mode. Test credentials are local fixtures, never production credentials.

## Production

Production URLs:

- Admin: https://solutionsmedia-admin.pages.dev
- Website: https://solutionmediadigital.com
- API: https://solutions-media-backend.onochieazukaeme.workers.dev

`admin.solutionmediadigital.com` is registered as a Pages custom domain and awaits external DNS verification. At the domain's DNS provider, add a CNAME named `admin` pointing to `solutionsmedia-admin.pages.dev`. The Pages address works while DNS and the custom-domain certificate are pending.

The admin Pages project uses the `solutions-media` production branch and direct uploads, matching Lida's hosting arrangement. `admin/.env.production.local` supplies the API and website URLs. Production credentials are in the ignored `backend/.wrangler/solutions-media-production/admin-credentials.json`; never commit that file.

Build with `npm run build`, then from `backend` deploy with:

```powershell
node node_modules/wrangler/bin/wrangler.js pages deploy ../admin/dist --project-name solutionsmedia-admin --branch solutions-media --commit-dirty=true
```

From `admin`, `node scripts/verify-production.mjs` checks the live login, dashboard, temporary unpublished draft creation/deletion, website API integration, and logout. It removes its verification draft and saves a dashboard screenshot in `test-output/`.
