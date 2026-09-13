# Website content backend

Team members, projects, services and blogs live in the `CONTENT_DB` D1 binding. The frontend loads the published records from `GET /api/site-data`; it has no bundled fallback for these collections. Existing content is imported once by the checked-in migrations (6 team members, 4 projects, 10 services, 3 blogs). Deleting a seeded record does not recreate it.

## Local development

1. Run `npm install` in `backend`.
2. Keep your existing local authentication secrets in `.dev.vars`.
3. Run `npm run db:migrate` to create and seed the local database.
4. Run `npm run dev` for the Worker on port 8787.
5. Start `admin` with `npm run dev` (5174), and `client` with `npm run dev` (3000). Both proxy `/api` to the Worker by default.

In admin, the **Website content** section has separate editors for Team members, Projects, Services, and Blogs. New records start as drafts. Select Published and save to show them on the site; changing back to Draft hides them. Lower display-order numbers appear first, and the homepage features the first four published projects. Blog posts appear under the site's existing `/insights` URLs. Team records are public profiles, separate from administrator login accounts.

Editors support image URLs, existing frontend `/assets/` paths, direct uploads, and the media library. Uploaded files use public `/api/media/:key` URLs. Content is plain text; paragraphs are separated by blank lines. Slug changes change the public URL. Concurrent edits are protected with record versions; reload if another editor has changed the record. Saving a published record updates it immediately; there is no separate revision queue.

The public frontend refreshes on navigation, window focus, and once a minute while visible. Reloading also reads the latest data. Drafts are excluded from the public response, including detail pages and navigation links.

## Production setup

The code is ready locally; production resources have not been created or deployed by this change.

1. Run `npx wrangler d1 create lida-content` and replace the all-zero `database_id` in the top-level `[[d1_databases]]` block in `wrangler.toml` with the returned ID. Keep the local development binding separate.
2. Apply migrations using `npx wrangler d1 migrations apply CONTENT_DB --remote` before deploying the Worker. Migrations include the initial content and run only once.
3. Complete the existing KV, R2 and authentication-secret configuration, and list the actual frontend/admin origins in `ALLOWED_ORIGINS`.
4. If frontend/admin are hosted separately from the API, set **both** builds' `VITE_API_BASE_URL` to the deployed Worker origin (without `/api`). Set admin `VITE_SITE_URL` to the public frontend origin. Alternatively, route `/api` to the Worker on both domains.
5. Build the frontend and admin, then deploy through your usual process.

## API

Authenticated collection routes: `/api/admin/content/team`, `/projects`, `/services`, `/blogs` (each under `/api/admin/content`).

- `GET` collection: `{ items }`, including drafts and published records.
- `GET /:id`: `{ item }`.
- `POST` collection: create from the form fields plus `status` and `sortOrder`.
- `PUT /:id`: update with all fields plus the current `version`.
- `DELETE /:id?version=N`: delete only if the record version matches.

Validation returns 422; duplicate slugs or conflicting versions return 409. Authenticated routes require the existing admin Bearer token. Public reads return 503 when storage is unavailable, rather than returning stale hardcoded records.

## Verification

Run `npm run test:content` from `admin` for end-to-end tests using a real local Worker, D1 and R2 plus both Vite apps. The test server applies migrations to an isolated database in `.wrangler/content-tests`, uses a local-only test signing key, and never connects to remote resources. Tests verify public publishing, edits, drafts, deletion, validation, conflicts, media upload, empty lists and API failures. Microsoft Edge must be installed for the checked-in browser configuration.
