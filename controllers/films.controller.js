import FilmsRepository from "../repositories/films.repository.js";

const showAdminFilms = async (req, res, next) => {
  try {
    const films = await FilmsRepository.findAll();

    // Rendu de la page d'administration des films
    return res.render("index", { films });
  } catch (e) {
    console.error("Erreur lors de la récupération des films pour l'admin :", e);
    return res.render("index", {
      films: [],
      error: "Erreur de base de données",
    });
  }
};

const showAddFilmForm = async (req, res, next) => {
  return res.render("add-films");
};

const addFilm = async (req, res, next) => {
  try {
    const { titre, description, image, dateSortie, genre } = req.body;

    // Création du film
    const newFilm = await FilmsRepository.createFilm({
      titre,
      image,
      description,
      dateSortie,
      genre,
    });

    if (newFilm) {
      req.session.success = "Film créé avec succès";
      return res.redirect("/");
    } else {
      req.session.error = "Erreur lors de la création du film";
      return res.redirect("/admin/add-film");
    }
  } catch (e) {
    console.error("Erreur lors de l'ajout du film :", e);
    req.session.error = "Erreur lors de la création du film";
    return res.redirect("/admin/add-film");
  }
};

const deleteFilm = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Suppression du film
    const success = await FilmsRepository.remove(id);

    if (success) {
      req.session.success = "Film supprimé avec succès";
    } else {
      req.session.error = "Erreur lors de la suppression du film";
    }

    return res.redirect("/");
  } catch (e) {
    console.error("Erreur lors de la suppression du film :", e);
    req.session.error = "Erreur lors de la suppression du film";
    return res.redirect("/");
  }
};

const showEditFilmForm = async (req, res, next) => {
  try {
    const id = req.params.id;
    const film = await FilmsRepository.findById(id);

    if (!film) {
      req.session.error = "Film non trouvé";
      return res.redirect("/");
    }

    res.render("edit-film", {
      film,
      error: req.session.error,
      success: req.session.success,
    });

    // Nettoyer les messages flash
    delete req.session.error;
    delete req.session.success;
  } catch (e) {
    console.error("Erreur lors de la récupération du film :", e);
    req.session.error = "Erreur lors du chargement du film";
    return res.redirect("/admin/films");
  }
};
const updateFilm = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { titre, description, image, dateSortie, genre } = req.body;

    // Validation des données
    if (!titre || !description || !image || !dateSortie || !genre) {
      req.session.error = "Tous les champs sont obligatoires";
      return res.redirect(`/admin/edit-film/${id}`);
    }

    // Mise à jour du film
    const updatedFilm = await FilmsRepository.update(id, {
      titre,
      image,
      description,
      dateSortie,
      genre,
    });

    if (updatedFilm) {
      req.session.success = "Film mis à jour avec succès";
      return res.redirect("/");
    } else {
      req.session.error = "Erreur lors de la mise à jour du film";
      return res.redirect(`/admin/edit-film/${id}`);
    }
  } catch (e) {
    console.error("Erreur lors de la mise à jour du film :", e);
    req.session.error = "Erreur lors de la mise à jour du film";
    return res.redirect(`/admin/edit-film/${req.params.id}`);
  }
};

export default {
  showAdminFilms,
  showAddFilmForm,
  addFilm,
  deleteFilm,
  showEditFilmForm,
  updateFilm,
};
