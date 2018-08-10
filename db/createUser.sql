INSERT INTO users ( userName, password, profile_pic)
VALUES ( ${sub}, ${userName}, ${password}, ${profile_pic})
RETURNING *;