import express from "express";
import "dotenv/config";
import session from "express-session";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
//import auth from 'basic-auth'
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

// Permet de récupérer les données POST dans req.body
app.use(express.urlencoded());
app.use(express.json());
//Création de la session
app.use(
  session({
    secret: "express-ejs",
    resave: false,
    saveUninitialized: false,
  })
);
app.use((req, res, next) => {
  // Rendre l'utilisateur connecté disponible dans tous les templates via res.locals
  res.locals.user = req.session.user || null;
  console.log("Utilisateur actuel dans la session :", res.locals.user);
  next();
});

// Configuration d'EJS comme moteur de templates
app.set("view engine", "ejs");
// Définition du dossier contenant les templates EJS
app.set("views", import.meta.dirname + "/templates");

// configuration des routes
app.use("/", authRoutes);
app.use("/", adminRoutes);

app.get(["/"], (req, res) => {
  return res.render("index");
});

app.use(express.static(path.join(process.cwd(), "public")));

app.all("/*splat", (req, res) => {
  res.status(404).end("Page introuvable");
});

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur : http://localhost:${PORT}`);
});
