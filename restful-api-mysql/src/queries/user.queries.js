exports.CREATE_USER_TABLE = `CREATE TABLE IF NOT EXISTS user(
  user_id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL UNIQUE,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  PRIMARY KEY (user_id)
)`;

exports.GET_ME_BY_USER_ID = (userId) =>
`SELECT user_id, username, email FROM user WHERE user_id = ${userId}`; // don't return the password

exports.GET_ME_BY_USERNAME = (username) =>
`SELECT user_id, username, email FROM user WHERE username = ${username}`; // don't return the password

exports.GET_ME_BY_USER_ID_WITH_PASSWORD = (userId) =>
`SELECT * FROM user WHERE user_id = ${userId}`;

exports.GET_ME_BY_USERNAME_WITH_PASSWORD = (username) =>
`SELECT * FROM user WHERE username = ${username}`;

exports.INSERT_NEW_USER = (username, email, password) =>
`INSERT INTO user (username, email, password) VALUES (${username}, ${email}, ${password})`;

exports.UPDATE_USER = (username, email, password, userId) =>
`UPDATE user SET username = ${username}, email = ${email}, password = ${password} WHERE user_id = ${userId}`;