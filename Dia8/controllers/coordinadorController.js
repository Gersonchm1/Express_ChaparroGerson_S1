import { conectar } from "../models/db.js";
import { generarToken } from "../middlewares/auth.js";

export async function crearCoordinador(req, res) {
    try {
        const { nombre, apellido, contrasena } = req.body;
        const { collection } = await conectar("coordinador");
        const uCoordinador = await collection.find().toArray();

        const nuevoCoordinador = {
            idCoordinador: (uCoordinador.at(-1)?.idCoordinador ?? -1) + 1,
            nombre,
            apellido,
            contrasena
        };

        await collection.insertOne(nuevoCoordinador);

        const token = generarToken({ idCoordinador: nuevoCoordinador.idCoordinador });
        res.json({ msg: "coordinador creado", token });
        
    } catch (err) {
        console.log(err);
        res.send("error en insertar coordinador");
    }
}

// Ver información de los coordinadores
export async function verMiInfo(req, res) {
    try {
        const { idCoordinador } = req.user;
        const { collection } = await conectar("coordinador");
        const coordinador = await collection.findOne({ idCoordinador: Number(idCoordinador) });
        res.json(coordinador);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
