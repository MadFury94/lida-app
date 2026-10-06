CREATE TABLE content (
  id TEXT PRIMARY KEY,
  kind TEXT NOT NULL CHECK (kind IN ('team', 'projects', 'services', 'blogs')),
  slug TEXT NOT NULL,
  data TEXT NOT NULL CHECK (json_valid(data)),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  sort_order INTEGER NOT NULL DEFAULT 0,
  version INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(kind, slug)
);
CREATE INDEX content_public_order ON content(status, sort_order);
CREATE INDEX content_kind_order ON content(kind, sort_order);
