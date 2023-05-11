import DataManagerStatic from "../data/dataManagerStatic.js";
import Projects from "../models/projectsModel.js";


class ProjectsController {
  
//recupere tout les projets stocké et les renvois 
    findAll(req, res) {
        try {
            let result = DataManagerStatic.projectsList;
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
//recupere un projet via son id et le renvoi 
    findById(req, res) {
        try {
            let result = DataManagerStatic.projectsList.find(x => x.id === req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    //cree un projet (titre, description, image) et le renvoi 
    create(req,res) {
        try {
             let id = DataManagerStatic.uuidv4();
             let project = new Projects(id, req.body.titre, req.body.description, req.body.imgSrc);
        DataManagerStatic.projectsList.push(project);
           DataManagerStatic.writeFile();
           res.json(project)
        } catch (error) {
                res.status(500).json(error);
        }
       
    }
    // supprime un projet via son id et affiche un message donnant l'id su projet supprimé 
    delete(req, res) {
        try {
            DataManagerStatic.projectsList = DataManagerStatic.projectsList.filter(x => x.id != req.params.id);
            DataManagerStatic.writeFile();
            res.json(`Projet supprimé ! ${req.params.id}`);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    // permet de modifier les données d'un projet en utilisant l'id
    update(req, res) {
        try {
            let index = DataManagerStatic.projectsList.findIndex(x => x.id === req.params.id);
            DataManagerStatic.projectsList[index].titre = req.body.titre;
            DataManagerStatic.projectsList[index].description = req.body.description;
            DataManagerStatic.projectsList[index].imgSrc = req.body.imgSrc;
            DataManagerStatic.writeFile();
            res.json(DataManagerStatic.projectsList[index]);
        } catch (error) {
            res.status(500).json(error);
        }
     }

   
    
}

export default new ProjectsController();