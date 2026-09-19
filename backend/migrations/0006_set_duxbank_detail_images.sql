-- Use the supplied Duxbank campaign images in the requested detail-page order.
UPDATE content
SET data = json_set(data,
      '$.detailImages.hero', '/assets/img/inner-page/Duxbank - Lida Nigeria Brand Identity design and AD campaign Service.jpeg',
      '$.detailImages.main', '/assets/img/inner-page/Duxbank - Lida Nigeria Brand Identity design and AD campaign Service-15.jpeg'
    ),
    updated_at = '2026-09-19T00:00:00.000Z'
WHERE kind = 'projects' AND slug = 'duxbank';
