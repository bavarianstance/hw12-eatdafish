### Schema

CREATE DATABASE IF NOT EXISTS fish_db;
USE fish_db;

CREATE TABLE fish
(
	id int NOT NULL AUTO_INCREMENT,
	fish_name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
