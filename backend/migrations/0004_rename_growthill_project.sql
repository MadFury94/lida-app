-- The industrial B2B project is Growthill Africa. Keep its database identity
-- and all displayed project artwork aligned with the public fallback record.
UPDATE content
SET slug = 'growthill-africa',
    data = json_set(data,
      '$.slug', 'growthill-africa',
      '$.client', 'Growthill Africa',
      '$.thumb', '/assets/img/inner-page/growthhill.jpeg',
      '$.image', '/assets/img/inner-page/growthhill.jpeg',
      '$.detailImages.hero', '/assets/img/inner-page/growthhill.jpeg',
      '$.detailImages.main', '/assets/img/inner-page/growthhill.jpeg',
      '$.projectInfo.client', 'Growthill Africa',
      '$.detailDescription.title', 'Growthill Africa B2B Digital Strategy'
    ),
    updated_at = '2026-09-19T00:00:00.000Z'
WHERE kind = 'projects' AND slug = 'manitowoc-savvytech';
