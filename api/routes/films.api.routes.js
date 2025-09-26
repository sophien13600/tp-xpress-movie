import express from "express";
import FilmsApi from "../films.api.controller.js";
//import {redirectIfLoggedIn} from "../../middlewares/auth.middleware.js"

const router = express.Router();
router.get("/api/films/", FilmsApi.showAdminFilms);
router.post("/api/films/", FilmsApi.addFilm);
router.put("/api/films/", FilmsApi.updateFilm);
router.delete("/api/films/", FilmsApi.deleteFilm);

// router.get('/api/films/', (req, res) => {
//   res.send('hello world')
// })


export default router;
