-- Keep the seeded project records aligned with the named project artwork used
-- by the static fallback. Admin edits can replace these values afterwards.
UPDATE content
SET data = json_set(data,
  '$.thumb', CASE slug
    WHEN 'duxbank' THEN '/assets/img/inner-page/Duxbank - Lida Nigeria Brand Identity design and AD campaign Service-15.jpeg'
    WHEN 'calpak-nigeria' THEN '/assets/img/inner-page/calpak.jpeg'
    WHEN 'nuts-and-bolts' THEN '/assets/img/inner-page/nuts.jpeg'
    WHEN 'growthill-africa' THEN '/assets/img/inner-page/growthhill.jpeg'
    ELSE json_extract(data, '$.thumb')
  END,
  '$.image', CASE slug
    WHEN 'duxbank' THEN '/assets/img/inner-page/Duxbank - Lida Nigeria Brand Identity design and AD campaign Service-15.jpeg'
    WHEN 'calpak-nigeria' THEN '/assets/img/inner-page/calpak.jpeg'
    WHEN 'nuts-and-bolts' THEN '/assets/img/inner-page/nuts.jpeg'
    WHEN 'growthill-africa' THEN '/assets/img/inner-page/growthhill.jpeg'
    ELSE json_extract(data, '$.image')
  END,
  '$.detailImages.hero', CASE slug
    WHEN 'duxbank' THEN '/assets/img/inner-page/Duxbank - Lida Nigeria Brand Identity design and AD campaign Service-15.jpeg'
    WHEN 'calpak-nigeria' THEN '/assets/img/inner-page/calpak.jpeg'
    WHEN 'nuts-and-bolts' THEN '/assets/img/inner-page/nuts.jpeg'
    WHEN 'growthill-africa' THEN '/assets/img/inner-page/growthhill.jpeg'
    ELSE json_extract(data, '$.detailImages.hero')
  END,
  '$.detailImages.main', CASE slug
    WHEN 'duxbank' THEN '/assets/img/inner-page/Duxbank - Lida Nigeria Brand Identity design and AD campaign Service-15.jpeg'
    WHEN 'calpak-nigeria' THEN '/assets/img/inner-page/calpak.jpeg'
    WHEN 'nuts-and-bolts' THEN '/assets/img/inner-page/nuts.jpeg'
    WHEN 'growthill-africa' THEN '/assets/img/inner-page/growthhill.jpeg'
    ELSE json_extract(data, '$.detailImages.main')
  END
), updated_at = '2026-09-19T00:00:00.000Z'
WHERE kind = 'projects'
  AND slug IN ('duxbank', 'calpak-nigeria', 'nuts-and-bolts', 'growthill-africa');
