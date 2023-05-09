import express from 'express';
import cors from 'cors';
import {projectsRoutes} from "./routes/projectsRoutes.js";
import DataManagerStatic from "./data/dataManagerStatic.js";
const app = express();//creer le serveur express js
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

DataManagerStatic.readFile();//charge la liste de projet dans la mémoire de l'application (liste static)
projectsRoutes(app);//dit a l'application d'utiliser les routes definies
