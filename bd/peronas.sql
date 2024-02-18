CREATE DATABASE destino;
CREATE DATABASE origen;

USE origen;
-- Crear la base de datos 'origen'


-- Usar la base de datos 'origen'


-- Crear la tabla 'persona' en la base de datos 'origen'
CREATE TABLE persona (
    nombre VARCHAR(255),
    edad INT,
    apellido VARCHAR(255),
    telefono VARCHAR(20)
);
INSERT INTO persona (nombre, edad, apellido, telefono) VALUES
('Juan', 30, 'Perez', '1234567890'),
('María', 25, 'López', '0987654321'),
('Pedro', 40, 'González', '1112223333'),
('Ana', 35, 'Martínez', '4445556666'),
('Carlos', 28, 'Sánchez', '7778889999');

-- Crear la base de datos 'destino'


-- Usar la base de datos 'destino'
USE destino;

-- Crear la tabla 'persona' en la base de datos 'destino'
CREATE TABLE persona (
    nombre VARCHAR(255),
    telefono VARCHAR(20)
);
 