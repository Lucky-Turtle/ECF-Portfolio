
import projectsController from "../controller/projectsController.js";
import ProjectsController from "../controller/projectsController.js";

export const projectsRoutes = (app) => {
    app.get('/projects/all', ProjectsController.findAll);
    app.get('/projects/findById/:id', ProjectsController.findById);
    app.post('/projects/create', projectsController.create);
    app.delete('/projects/delete/:id', projectsController.delete);
    app.put('/projects/update/:id', projectsController.update);
}