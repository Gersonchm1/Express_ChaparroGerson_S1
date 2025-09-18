import{MongoClient} from "mongodb";
import 'dotenv/config';

const client = new MongoClient(process.env.MONGO_URI);

export async function conectar(coleccion) {
    try{
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        const collection =db.collection(coleccion);
        return {db,collection};
    }
    catch(error){
        console.error("error de conexion ala bbdd",error);
    }
    
}