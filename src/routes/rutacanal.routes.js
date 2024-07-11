import {Router} from "express"

const rutacanal = Router();
rutacanal.get("/", (req, res) => {
    res.json({"aplication": "Youtube"})
})
rutacanal.get("/canal", (req, res) => {
    res.json({
        "msg": "hola mundo",
        "user": "Jhoan",
        "aplication": "Youtube",
        "type": "Backend"
    })
});

export default rutacanal;