import express from "express";
import AuthController from "../controllers/auth.controller.js";
import {redirectIfLoggedIn} from "../middlewares/auth.middleware.js"

const router = express.Router();

router.get("/inscription", redirectIfLoggedIn, (req, res) => {
    res.render("register");
  });
router.post("/inscription", AuthController.addUser);

router.get("/connexion", redirectIfLoggedIn, (req, res) => {
    res.render("login");
  });

router.post("/connexion", AuthController.login);
router.get("/logout", AuthController.logout);

export default router;