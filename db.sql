-- ===========================================
-- SCRIPT DE CRÉATION DE LA BASE DE DONNÉES
-- Application Xpress Movie
-- ===========================================

DROP DATABASE IF EXISTS xpress_movie;

-- Création de la base de données
CREATE DATABASE xpress_movie;

USE xpress_movie;

-- ===========================================
-- TABLE DES UTILISATEURS
-- ===========================================

-- Création de la table users
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(75) NOT NULL,
    role VARCHAR(75) NOT NULL
);

-- ===========================================
-- TABLE DES FILMS
-- ===========================================

-- Création de la table films
CREATE TABLE films (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    dateSortie DATETIME NOT NULL,
    genre VARCHAR(100) NOT NULL
);

-- ===========================================
-- TABLE DES FAVORIS
-- ===========================================

-- Création de la table favoris 
CREATE TABLE favoris (
    id INT PRIMARY KEY AUTO_INCREMENT,
    dateAjout DATETIME NOT NULL,
    id_user INT,
    id_film INT, 
    CONSTRAINT fk_users_id FOREIGN KEY (id_user) REFERENCES users (id),
    CONSTRAINT fk_films_id FOREIGN KEY (id_film) REFERENCES films (id)
);

-- ===========================================
-- DONNÉES DE TEST
-- ===========================================

-- Insertion de films d'exemple pour tester l'application
INSERT INTO films (titre, image, description, dateSortie, genre) VALUES
  ('Inception', '/images/inception.jpg', 'Un voleur infiltre les rêves pour dérober des secrets.', '2010-07-16 00:00:00', 'Science-Fiction'),
  ('The Dark Knight', '/images/dark-knight.jpg', 'Batman affronte le Joker à Gotham.', '2008-07-18 00:00:00', 'Action'),
  ('Interstellar', '/images/interstellar.jpg', 'Exploration spatiale à travers un trou de ver pour sauver l''humanité.', '2014-11-07 00:00:00', 'Science-Fiction'),
  ("Matrix", "/images/matrix.jpg", "La matrice et Neo", "1999-03-31", "Action");
  INSERT INTO users (nom, prenom, email, password, role)
VALUES ("Admin", "Root", "admin@xpress.com", "$2a$10$ubYt1te5eu5IDGHJYmeieOjSXfMUav0vsHlKj1nN5ogCdnKebcyPy", "admin");


SELECT * FROM users WHERE email='admin@xpress.com';