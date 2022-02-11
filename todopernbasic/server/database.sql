CREATE DATABASE todopernbasic;

CREATE TABLE todos (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

-- INSERT INTO todos (description) VALUES ('Clean the bedroom in morning');