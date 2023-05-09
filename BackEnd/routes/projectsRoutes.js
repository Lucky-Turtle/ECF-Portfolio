
import projectsController from "../controller/projectsController.js";
import ProjectsController from "../controller/projectsController.js";

export const projectsRoutes = (app) => {
    app.get('/projects/all', ProjectsController.findAll);//route de l'url pour récupérer tout les projets
    app.get('/projects/findById/:id', ProjectsController.findById);//route de l'url pour récupérer un projet par id
    app.post('/projects/create', projectsController.create);//route de l'url pour creer un projet
    app.delete('/projects/delete/:id', projectsController.delete);//route de l'url pour supprimer un projet
    app.put('/projects/update/:id', projectsController.update);//route de l'url pour modifier un projet
}