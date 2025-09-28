import connection from "../config/db.config.js";
import bcrypt from "bcrypt";

const register = async (user) => {
  const INSERT =
    "INSERT INTO users (nom, prenom, email, password, role) VALUES (?, ?, ?, ?, ?)";

  // Configuration du hachage du mot de passe (10 tours de hachage)
  const saltRounds = 10;
  const password = await bcrypt.hash(user.password, saltRounds);

  try {
    const resultat = await connection.query(INSERT, [
      user.nom,
      user.prenom,
      user.email,
      password, // Mot de passe haché
      user.role,
    ]);

    // Ajout de l'ID généré automatiquement à l'objet utilisateur
    user.id = resultat[0].insertId;
    return user;
  } catch (error) {
    // En cas d'erreur (ex: email déjà existant), retour de null
    console.log("Erreur lors de l'enregistrement :", error);
    return null;
  }
};

const checkUser = async (email, password) => {
  // Requête SQL pour récupérer l'utilisateur par son email
  const SELECT = "SELECT * FROM users WHERE email=?";

  try {
    const resultat = await connection.query(SELECT, [email]);
    const user = resultat[0][0];
//console.log('repo', resultat);

    if (!user) {
      return null;
    }

    // Comparaison du mot de passe saisi avec le mot de passe haché en base
    const compare = await bcrypt.compare(password, user.password);

    // Vérification du résultat de la comparaison
    if (!compare) {
      // Mot de passe incorrect
      return null;
    }

    return user;
  } catch (error) {
    console.log("Erreur lors de la vérification des identifiants :", error);
    return null;
  }
};

export default {
  register,
  checkUser,
};
