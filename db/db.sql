DROP TABLE IF EXISTS board_column;
DROP TABLE IF EXISTS board_det;
DROP TABLE IF EXISTS boards;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username varchar(100),
	PASSWORD varchar(100)
);

CREATE TABLE boards (
	id SERIAL PRIMARY KEY,
	id_user int,
	name varchar,
	CONSTRAINT fk_user
		FOREIGN KEY(id_user)
			REFERENCES users(id)
);

CREATE TABLE board_column (
	id SERIAL PRIMARY KEY,
	name varchar(255)
);

CREATE TABLE board_det (
	id SERIAL PRIMARY KEY,
	id_board int,
	id_board_column int,
	name varchar(255),
	description TEXT,
	CONSTRAINT fk_board
		FOREIGN KEY(id_board)
			REFERENCES boards(id),
	CONSTRAINT fk_board_column
		FOREIGN KEY(id_board_column)
			REFERENCES board_column(id)
);
