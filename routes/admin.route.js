import express from "express";
import FilmsController from "../controllers/films.controller.js";
const router = express.Router();


router.get("/", FilmsController.showAdminFilms, (req, res) => {
    return res.render("index");
  });

  router.get("/admin/add-film", FilmsController.showAddFilmForm);
export default router;
