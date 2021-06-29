--Query usada para la creacion de la base de datos
CREATE DATABASE dbusers;

--Usa base de datos
USE dbusers;

--Creacion de tabla
CREATE TABLE users (
    ID INT(20) NOT NULL AUTO_INCREMENT,
    NAME VARCHAR(100) NOT NULL,
    COUNTRY VARCHAR(100) NOT NULL,
    CREATED_AT TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,    
    PRIMARY KEY(ID)

);

--Realizar una insercion
INSERT INTO USERS(NAME,COUNTRY)
VALUES 
("Carlos Rocha","Mexico"),
("Obed Rocha","Mexico");