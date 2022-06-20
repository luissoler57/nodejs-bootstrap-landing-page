//!Guardamos en una constante la funcionalidad del enrutamiento
//TODO: Controlador de ruta para el (Home)
const routeHome = (req, res) => {
  res.render('home', {
    title: 'My WebStore',
  });
};

//TODO: Controlador de ruta para el (Project)
const routeProjects = (req, res) => {
  res.render('Projects', {
    title: 'List of projects',
  });
};

//TODO: Controlador de ruta para el (Contact)
const routeContact = (req, res) => {
  res.render('contact', {
    title: 'Page the contact',
  });
};

//TODO: Controlador de ruta para el (Home)
const routeAbout = (req, res) => {
  res.render('about', {
    title: 'About me',
  });
};

//!Exportamos la constantes anterior
export { routeHome, routeProjects, routeContact, routeAbout };
