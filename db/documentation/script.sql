DROP DATABASE IF EXISTS ih_final_project;

CREATE DATABASE ih_final_project;

USE ih_final_project;

CREATE TABLE restaurantes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre varchar(255) NOT NULL,
    rate varchar(255),
    resenas varchar(255),
    precio varchar(16),
    labels varchar(255),
    descripcion varchar(1000),
    direccion varchar(1000) NOT NULL,
    url varchar(1000),
    numero varchar(16),
	x varchar(16),
	y varchar(16)
);

CREATE TABLE credenciales_usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username varchar(255),
    email varchar(255),
    password varchar(255)
);


CREATE TABLE usuarios(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	genero char,
	telefono varchar(9),
	nombre varchar(255),
	apellido varchar(255),
	fecha_nacimiento DATETIME,
	id_credenciales INTEGER,
	
	FOREIGN KEY (id_credenciales) REFERENCES credenciales_usuarios (id)
);

CREATE TABLE preferencias_restaurantes(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	precio varchar(255),
	tipo_comida varchar(255),
	tipo_velada varchar(255),
	id_usuario INTEGER,
	
	FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

CREATE TABLE preferencias_generales(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	id_preferencias INTEGER,
	id_restaurante INTEGER,
	
	FOREIGN KEY (id_preferencias) REFERENCES preferencias_restaurantes (id),
	FOREIGN KEY (id_restaurante) REFERENCES restaurantes (id)
);



CREATE TABLE eventos(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	tipo varchar(255)
);

CREATE TABLE activity_tracking(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	fecha DATETIME,
	id_usuario INTEGER,
	id_evento INTEGER,
	
	FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
	FOREIGN KEY (id_evento) REFERENCES eventos (id)
);

CREATE TABLE restaurantes_visitados(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	rate INTEGER,
	guardado BOOLEAN,
	id_usuario INTEGER,
	id_restaurante,

	FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
	FOREIGN KEY (id_restaurante) REFERENCES restaurantes (id)
);