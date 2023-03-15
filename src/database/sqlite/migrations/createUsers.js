const createUsers = `
  CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    avatar VARCHAR NULL,
    is_admin BIT DEFAULT 0 NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

const createAdmin = `
  INSERT INTO users (id, name, email, password, is_admin) VALUES (1, 'admin', 'admin@email.com', '123456', 1);
`;

module.exports = { createUsers, createAdmin };
