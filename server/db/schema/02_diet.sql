DROP TABLE IF EXISTS diet CASCADE;

CREATE TABLE diet (
 id SERIAL PRIMARY KEY NOT NULL,
 user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
 caloric_target INTEGER NOT NULL DEFAULT 2000,
 dietary_category VARCHAR(255) NOT NULL,
 gluten BOOLEAN NOT NULL DEFAULT FALSE,
 lactose BOOLEAN NOT NULL DEFAULT FALSE,
 peanut BOOLEAN NOT NULL DEFAULT FALSE,
 fish BOOLEAN NOT NULL DEFAULT FALSE,
 egg BOOLEAN NOT NULL DEFAULT FALSE,
 shellsfish BOOLEAN NOT NULL DEFAULT FALSE,
 tree_nuts BOOLEAN NOT NULL DEFAULT FALSE,
 soy BOOLEAN NOT NULL DEFAULT FALSE,
 sesame BOOLEAN NOT NULL DEFAULT FALSE
);