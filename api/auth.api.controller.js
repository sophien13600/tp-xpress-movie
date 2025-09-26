import AuthRepository from "../repositories/auth.repository.js";

const login = async (req, res, next) => {
  // Vérification des identifiants via le repository
  const user = await AuthRepository.checkUser(
    //console.log(req.body),
    req.body.email,
    req.body.password
  );

  console.log("Données de connexion reçues :", req.body);
  console.log("user", user);
  
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

  login,
  logout,
};
