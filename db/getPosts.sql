SELECT p.*, u.userName as author
FROM posts p
JOIN users u ON p.author_id = u.id