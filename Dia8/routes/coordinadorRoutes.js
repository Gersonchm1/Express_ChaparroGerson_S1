import express from "express";
import { crearCoordinador, verMiInfo } from "../controllers/coordinadorController.js";
import { verificarToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/crearCoordinador", crearCoordinador);
router.get("/verMiInfo" ,verificarToken, verMiInfo);

export default router;