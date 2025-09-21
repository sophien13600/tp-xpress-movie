import express from "express";
import FilmsController from "../controllers/films.controller.js";
const router = express.Router();

router.get("/", FilmsController.showAdminFilms, (req, res) => {
  return res.render("index");
});

router.get("/admin/add-film", FilmsController.showAddFilmForm);
router.post("/admin/add-film", FilmsController.addFilm);
router.post("/admin/delete-film/:id", FilmsController.deleteFilm);
router.get("/admin/edit-film/:id", FilmsController.showEditFilmForm);

export default router;
