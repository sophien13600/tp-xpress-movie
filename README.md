# Xpress-Movie 🎬

Application web de gestion de films développée avec **Express.js**, **EJS**, **Bootstrap** et **MySQL2**.

Projet réalisé dans le cadre du TP DWWM M2I(Achref El Mouelhi, Aix-en-Provence, 04/09/2025).

---

## 🛠️ Installation

### 1. Prérequis
- [Node.js](https://nodejs.org/) >= 18
- [MySQL](https://dev.mysql.com/downloads/mysql/)
- Git

### 2. Cloner le projet
```bash
git clone https://github.com/sophien13600/express-ejs.git
cd tp-xpress-movie
```

### 3. Installer les dépendances
```bash
npm install
```

### 4. Configurer la base de données
Créer une base `xpress_movie` dans MySQL :

```sql
DROP DATABASE IF EXISTS xpress_movie;
```

```sql
CREATE DATABASE xpress_movie;
```

Créer la table `films` :
```sql
CREATE TABLE films (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titre VARCHAR(255) UNIQUE NOT NULL,
  image VARCHAR(255) NOT NULL,
  description TEXT,
  dateSortie DATETIME,
  genre VARCHAR(100)
);

INSERT INTO films (titre, image, description, dateSortie, genre) VALUES
  ('Inception', '/images/inception.jpg', 'Un voleur infiltre les rêves pour dérober des secrets.', '2010-07-16 00:00:00', 'Science-Fiction'),
  ('The Dark Knight', '/images/dark-knight.jpg', 'Batman affronte le Joker à Gotham.', '2008-07-18 00:00:00', 'Action'),
  ('Interstellar', '/images/interstellar.jpg', 'Exploration spatiale à travers un trou de ver pour sauver l''humanité.', '2014-11-07 00:00:00', 'Science-Fiction'),
  ('Matrix', '/images/matrix.jpg', 'La matrice et Neo', '1999-03-31', 'Action');
```

Créer la table `users` :
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100),
  prenom VARCHAR(100),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(75) NOT NULL
);

-- Exemple admin inséré à la main (mot de passe "admin123" hashé avec bcrypt)
INSERT INTO users (nom, prenom, email, password, role)
VALUES ("Admin", "Root", "admin@xpress.com", "$2a$10$ubYt1te5eu5IDGHJYmeieOjSXfMUav0vsHlKj1nN5ogCdnKebcyPy", "admin");
```

### 5. Configurer l’environnement
Créer un fichier `.env` à la racine :
```env
PORT=3000
DB_NAME=xpress_movie
DB_PORT=
DB_HOST=
DB_USER=
DB_PASSWORD=
```

---

## ▶️ Lancer le projet

### En mode développement (avec hot-reload Nodemon)
```bash
nodemon .
```

Le serveur démarre sur : [http://localhost:3000](http://localhost:3000)

---

## 👤 Comptes de test
- **Admin** :
  - email : `admin@xpress.com`
  - mot de passe : `admin123`
- **Abonné** : à créer via `/inscription`.

---