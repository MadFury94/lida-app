-- Match Duxbank's project hero title to the approved split styling.
UPDATE content
SET data = json_set(data,
      '$.detailDescription.title',
      'Positioning A New Banking Brand For A Confident Market Entry'
    ),
    updated_at = '2026-09-19T00:00:00.000Z'
WHERE kind = 'projects' AND slug = 'duxbank';
