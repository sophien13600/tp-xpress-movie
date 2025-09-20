# 📌 Documentation des routes – Xpress Movie

Ce document décrit l’ensemble des routes de l’application Express.js sous forme de tableau.

---

## 🟦 Authentification
| URL        | Méthode HTTP | Controller       | Méthode      | Contenu                       | Commentaire |
|------------|--------------|-----------------|--------------|-------------------------------|-------------|
| `/login`   | GET          | authController  | showLogin    | Formulaire de connexion       | Accessible sans authentification |
| `/login`   | POST         | authController  | login        | Vérifie email + password      | Crée une session utilisateur |
| `/register`| GET          | authController  | showRegister | Formulaire d’inscription      | Accessible sans authentification |
| `/register`| POST         | authController  | register     | Création d’un utilisateur     | Mot de passe hashé avec bcrypt |
| `/logout`  | GET          | authController  | logout       | Déconnexion                   | Redirection vers `/login` |

---

## 🟩 Utilisateurs (abonné)
| URL              | Méthode HTTP | Controller       | Méthode        | Contenu                     | Commentaire |
|------------------|--------------|-----------------|----------------|-----------------------------|-------------|
| `/account`       | GET          | userController  | showAccount    | Page gestion du compte      | Affiche infos utilisateur connecté |
| `/account/edit`  | POST         | userController  | editAccount    | Mise à jour des infos       | Vérifie que l’utilisateur est connecté |
| `/account/delete`| POST         | userController  | deleteAccount  | Suppression du compte       | Demande confirmation avant suppression |

---

## 🟥 Films
### Côté abonné
| URL              | Méthode HTTP | Controller       | Méthode        | Contenu                     | Commentaire |
|------------------|--------------|-----------------|----------------|-----------------------------|-------------|
| `/`              | GET          | filmController  | listFilms      | Liste de tous les films     | Page d’accueil |
| `/films/:id`     | GET          | filmController  | getFilm        | Détail d’un film            | Accessible si connecté |
| `/films/search`  | GET          | filmController  | searchFilms    | Résultats de recherche      | Recherche par titre |

### Côté administrateur
| URL                        | Méthode HTTP | Controller       | Méthode          | Contenu                  | Commentaire |
|----------------------------|--------------|-----------------|------------------|--------------------------|-------------|
| `/admin/films`             | GET          | filmController  | adminListFilms   | Liste des films (admin)  | Rôle = ADMIN requis |
| `/admin/films/add`         | GET          | filmController  | showAddFilm      | Formulaire d’ajout       | Rôle = ADMIN requis |
| `/admin/films/add`         | POST         | filmController  | addFilm          | Ajout d’un film          | Vérifie unicité du titre |
| `/admin/films/:id/edit`    | GET          | filmController  | showEditFilm     | Formulaire modification  | Rôle = ADMIN requis |
| `/admin/films/:id/edit`    | POST         | filmController  | editFilm         | Modification d’un film   | Rôle = ADMIN requis |
| `/admin/films/:id/delete`  | POST         | filmController  | deleteFilm       | Suppression d’un film    | Demande confirmation |

---

## 🟨 Favoris (abonné)
| URL                  | Méthode HTTP | Controller        | Méthode          | Contenu                  | Commentaire |
|----------------------|--------------|------------------|------------------|--------------------------|-------------|
| `/favoris`           | GET          | favorisController | listFavoris      | Liste des favoris        | Pour l’utilisateur connecté |
| `/favoris/:id/add`   | POST         | favorisController | addFavori        | Ajout d’un film favori   | Stocke dateAjout |
| `/favoris/:id/delete`| POST         | favorisController | deleteFavori     | Suppression d’un favori  | Message de confirmation |

---

## 🔒 Sécurité et middleware
- Toutes les routes (sauf `/login` et `/register`) nécessitent une **authentification**.
- Vérification du **rôle ADMIN** pour toutes les routes `/admin/*`.
- Mot de passe des utilisateurs stocké en base sous forme **hashée (bcrypt)**.

