import AuthRepository from "../repositories/auth.repository.js";

const addUser = async (req, res, next) => {
  // Vérification que des données ont été envoyées
  if (req.body) {
    // Tentative d'enregistrement de l'utilisateur via le repository
    const user = await AuthRepository.register(req.body);

    if (user) {
      // Si l'enregistrement réussit, redirection vers la page de connexion
      res.redirect("/connexion");
    } else {
      // Si l'enregistrement échoue, retour à la page d'inscription
      res.redirect("/inscription");
    }
  }
};

const login = async (req, res, next) => {
  // Vérification des identifiants via le repository
  const user = await AuthRepository.checkUser(
    req.body.email,
    req.body.password
  );

  // Affichage des données reçues pour le débogage
  console.log("Données de connexion reçues :", req.body);

  if (user) {
    // Si l'utilisateur est trouvé et le mot de passe correct
    console.log("Session après connexion :", req.session);

    // Stockage des informations utilisateur dans la session
    req.session.user = {
      id: user.id,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      role: user.role,
    };

    // Redirection vers la page d'accueil après connexion réussie
    res.redirect("/");
  } else {
    // Si les identifiants sont incorrects
    res.send("Identifiants incorrects - Connexion échouée");
  }
};
const logout = (req, res) => {
  // Destruction de la session utilisateur
  req.session.destroy(() => {
    // Redirection vers la page d'accueil après déconnexion
    res.redirect("/");
  });
};
export default {
  addUser,
  login,
  logout,
};
