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



export default { showAdminFilms, showAddFilmForm };
