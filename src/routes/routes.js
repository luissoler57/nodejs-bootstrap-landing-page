//!Importamos el modulo Router de express
import { Router } from 'express';
//!Importamos los modulos desde src/controllers/controller.js
import {
  routeHome,
  routeProjects,
  routeContact,
  routeAbout,
} from '../controllers/controllers.js';

//TODO: Inicializamos el metodo router de express
//? Router devuelve un objeto de javascripts para almacenar las rutas
const router = Router();

//TODO: Creamos ruta para la pagina principal con el modulo importado desde los controladores
router.get('/', routeHome);
//TODO: Creamos ruta para la pagina projects
router.get('/Projects', routeProjects);

//TODO: Creamos ruta para la pagina contact
router.get('/Contact', routeContact);

//TODO: Creamos ruta para la pagina About
router.get('/About', routeAbout);

//TODO: Exportamos el modulo creado router
export default router;
