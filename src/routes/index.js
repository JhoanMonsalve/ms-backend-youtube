import {Router} from "express"
import rutacanal from "./rutacanal.routes.js";

const ruta = Router();

ruta.use("/", rutacanal);

export default ruta;