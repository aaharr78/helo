CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    userName VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users
    );