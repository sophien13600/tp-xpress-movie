# 📖 Dictionnaire de données – Xpress Movie

Ce document décrit la structure de la base de données `xpress_movie`.

---

## Table **users** (Utilisateurs)
| Champ     | Type         | Null | Clé       | Description |
|-----------|-------------|------|-----------|-------------|
| id        | INT (AI)     | Non  | PK        | Identifiant unique de l’utilisateur |
| nom       | VARCHAR(100) | Non  |           | Nom de famille de l’utilisateur |
| prenom    | VARCHAR(100) | Non  |           | Prénom de l’utilisateur |
| email     | VARCHAR(255) | Non  | UNIQUE    | Adresse email unique de l’utilisateur |
| password  | VARCHAR(100) | Non  |           | Mot de passe hashé de l’utilisateur |
| role      | VARCHAR(75)  | Non  |           | Rôle de l’utilisateur (`admin` ou `abonne`) |

---

## Table **films** (Films)
| Champ       | Type          | Null | Clé | Description |
|-------------|--------------|------|-----|-------------|
| id          | INT (AI)      | Non  | PK  | Identifiant unique du film |
| titre       | VARCHAR(255)  | Non  |     | Titre du film (unique) |
| image       | VARCHAR(255)  | Non  |     | Chemin de l’affiche du film |
| description | TEXT          | Non  |     | Résumé ou description du film |
| dateSortie  | DATETIME      | Non  |     | Date de sortie du film |
| genre       | VARCHAR(100)  | Non  |     | Genre du film (Action, SF, etc.) |

---

## Table **favoris** (Films favoris par abonné)
| Champ     | Type      | Null | Clé | Description |
|-----------|----------|------|-----|-------------|
| id        | INT (AI) | Non  | PK  | Identifiant unique du favori |
| dateAjout | DATETIME | Non  |     | Date et heure d’ajout du film en favori |
| id_user   | INT      | Oui  | FK  | Référence vers `users.id` |
| id_film   | INT      | Oui  | FK  | Référence vers `films.id` |

---
