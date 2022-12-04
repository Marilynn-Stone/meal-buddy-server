DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  cellphone_number VARCHAR(20),
  spoonacular_username VARCHAR(255) DEFAULT NULL,
  spoonacular_hash VARCHAR(255) DEFAULT NULL
);