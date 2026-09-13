# Lida Admin

The admin UI adapts the theme, button, card, and layout patterns from [Sat Naing's shadcn-admin](https://github.com/satnaing/shadcn-admin). The upstream MIT notice is in `licenses/shadcn-admin-LICENSE`.

Run `npm install` and `npm run dev` from this directory. The admin normally runs at http://localhost:5174. Existing authentication, dashboard, media, and settings APIs are retained.

Run `npm run build` for a production build. Run `npx playwright test` for browser integration checks using installed Microsoft Edge. Tests mock the backend and cover navigation, themes, settings submission, mobile media controls, and dashboard failures. Live backend operation requires the existing API to be running; production API URLs still need the project's actual backend hostname.

The Users page remains a placeholder because user management has no existing integration. This adaptation keeps Lida's React Router routes rather than adopting the upstream demo's routes or demo data.

Website content is now managed under Team members, Projects, Services, and Blogs. See [backend setup](../backend/README.md) for local database initialization, publishing behavior, and production configuration. Run `npm run test:content` for integration tests against the real local backend.
