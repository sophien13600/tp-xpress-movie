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
    const id  = req.params.id;

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



export default { showAdminFilms, showAddFilmForm, addFilm, deleteFilm };
