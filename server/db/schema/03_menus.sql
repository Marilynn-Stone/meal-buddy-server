DROP TABLE IF EXISTS menus CASCADE;

CREATE TABLE menus (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);