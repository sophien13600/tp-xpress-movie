import express from "express";
import AuthController from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/inscription", (req, res) => {
    res.render("register");
  });
router.post("/inscription", AuthController.addUser);

router.get("/connexion", (req, res) => {
    res.render("login");
  });

router.post("/connexion", AuthController.login);
router.get("/logout", AuthController.logout);

export default router;