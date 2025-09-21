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

export default { findAll };