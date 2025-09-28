import express from "express";
import AuthControllerApi from "../auth.api.controller.js";
//import {redirectIfLoggedIn} from "../../middlewares/auth.middleware.js"

const router = express.Router();
router.post("/api/auth/signin", AuthControllerApi.login);
router.get('/api/auth/signin', (req, res) => {
  res.send('hello world')
})


export default router;
