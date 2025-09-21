import connection from "../config/db.config.js";

const findAll = async () => {
  const SELECT = "SELECT * FROM films";

  try {
    const resultat = await connection.query(SELECT);
    //console.log("Résultat de la requête films :", resultat);
    return resultat[0];
  } catch (error) {
    //console.error("Erreur lors de la récupération des films :", error);
    return [];
  }
};

const createFilm = async (film) => {
  const INSERT = `
    INSERT INTO films (titre, image, description, dateSortie, genre) 
    VALUES (?, ?, ?, ?, ?)
  `;

  try {
    const resultat = await connection.query(INSERT, [
      film.titre,
      film.image,
      film.description,
      film.dateSortie,
      film.genre,
    ]);
    film.id = resultat[0].insertId;
    return film;
  } catch (error) {
    console.error("Erreur lors de la création du film :", error);
    return null;
  }
};

const remove = async (id) => {
  const DELETE = "DELETE FROM films WHERE id = ?";

  try {
    await connection.query(DELETE, [id]);
    return true;
  } catch (error) {
    console.error("Erreur lors de la suppression du film :", error);
    return false;
  }
};

export default { findAll, createFilm, remove };
