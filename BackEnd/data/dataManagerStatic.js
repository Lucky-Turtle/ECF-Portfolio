import fs from 'fs';
import * as crypto from 'crypto';

const projectsPath = "./data/projectsList.json"

class DataManagerStatic {
    static projectsList = [];
    //genère un id virtuellement unique
    static uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.webcrypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    //lis le fichier a la position indiqué
    static readFile (){
       
        this.projectsList = JSON.parse(fs.readFileSync(projectsPath, "utf8"))
    }
    //ecris le fichier a la position indiqué
    static writeFile (){
       
       fs.writeFileSync(projectsPath, JSON.stringify(this.projectsList))
    }
}

 export default DataManagerStatic;