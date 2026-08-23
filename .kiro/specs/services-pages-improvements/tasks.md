# Services Pages — Improvements

## Tasks

- [x] 1. Remove sidebar from ServiceDetail — replace with full-width layout
  - Removed the col-lg-8 / col-lg-4 sidebar split from ServiceDetail.jsx
  - Removed the unused `otherServices` variable
  - Removed the service-sidebar CSS block from index.css
  - Content now occupies the full container width
  - Prev/next service navigation kept at the bottom

- [x] 2. Add breadcrumb trail to ServiceDetail hero — matching the green-marked screenshot
  - Breadcrumb "Home / Services / [Service Name]" now sits inside the `.title-area` block above the h1
  - All breadcrumb items use `<Link>` from react-router-dom

- [x] 3. Fix accordion toggle on Services page — expand stays open, no collapse on same click
  - Changed onClick from toggle to `setOpenService(i)` — same item click does nothing
  - Initialised `useState(0)` so first service is open on page load

- [x] 4. Fix counter animation on Services page stats section
  - `<span className="count">` contains only the numeric value
  - Suffix rendered as adjacent text node after the span
  - counterUp called in useEffect on mount

- [x] 5. Add blue gradient background to Services page breadcrumb hero section
  - Added `.services-hero-gradient` CSS class with radial-gradient overlay
  - Applied to breadcrumb-wrapper on Services.jsx
  - Applied to services-details-section on ServiceDetail.jsx

- [x] 6. Add `rr_title_anim` text animation to Services page breadcrumb h1
  - `rr_title_anim` added to the `<h1>` in Services.jsx breadcrumb
  - `wa_title_spilt_1` confirmed on the `<h2 className="title">` in breadcrumb-items

- [x] 7. Update services page tagline copy
  - h1 now reads: "Brand, Marketing, and Creative Services That Drive Business Growth."

- [x] 8. Add service number badges to the Services accordion list
  - `<span className="number">{s.number}</span>` renders before the h3 title in each row
  - Icon switches between fa-plus (closed) and fa-xmark (open) matching visual state
