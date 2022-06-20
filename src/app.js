//!Importamos express
import express from 'express';
//!Importamos el modulo path - para trabajar con directorios
import { dirname, join } from 'path';
//!Importamo el modulo url para la constante de __dirname
import { fileURLToPath } from 'url';
//!Importamos el modulo Router desde el archivo de enrutamiento
import router from './routes/routes.js';
//! Importamos el middlewares body-parse
import bodyParser from 'body-parser';

//TODO: Inicializamos express con "app"
const app = express();
//TODO: Creamos constante para la ruta absoluta del proyecto (vistas)
const __dirname = dirname(fileURLToPath(import.meta.url));

//!Setting (set)
//TODO: Se utiliza set para establece variable de entorno del puerto, si no tiene utiliza el puerto 3000
app.set('port', process.env.PORT || 3000);

//TODO: Utilizamos (views) para establecer el directorio de las vistas y con __dirname indicamos el directorio absoluto
//?__dirname varible de entorno y join concatena el directorio raiz con la carpeta indicada (views)
app.set('views', join(__dirname, 'views'));

//TODO: Con (View Engine) indicamos que vamos a utilizar como motor de plantilla (ejs)
//? No es necesario import el modulo (ejs) ya que viene con express
app.set('view engine', 'ejs');

//!Middlewares (use)
//TODO: Utilizamos app, con objebto solicitado por el navegador (req), objeto de respuesta del servidor (res) y (next) para continuar al realizarlo
app.use((req, res, next) => {
  //? Por consola mostramos la ruta solicitada y el metodo
  console.log(
    `La ruta solicitada es: ${req.url} -El metodo utilizado: ${req.method}`
  );
  next();
});

//TODO: Utilizamos body-parse
//?- Utilizamos el metodo (json) sirve para entender la informacion que envia el navegador -- objeto solicitado (req)
app.use(bodyParser.json());
//? Utilizamo el metodo (urlencoded) para formularios ya que se envia informacion atravez de la URL
app.use(bodyParser.urlencoded({ extended: false }));

//!Routes
//TODO: atravez de express utilizamos el modulo importado, todas las rutas se agregaran al archivo /src/routes.js
app.use(router);

//!Static files
//TODO: Atravez de metodo de express (static), indicamos el directorio de public
app.use(express.static(join(__dirname, 'public')));

//!Start the server

//TODO: El servidor obtiene el puerto que se establecio
//?Funcion flecha => responde con un mensaje se concatena con el puerto establecido (app.set)
app.listen(app.get('port'), () =>
  console.log('Server is listen on port ', app.get('port'))
);
