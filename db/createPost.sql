INSERT INTO posts(author_id, title, img, content)
VALUES ( ${author_id}, ${title}, ${img}, ${content})
RETURNING *;