import Server from './classes/server';
import { router } from './routes/router';
import bodyParser = require('body-parser');
import cors from 'cors';



const server = new Server();

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
});

//BodyParser
server.app.use( bodyParser.urlencoded({ extended: true}));
server.app.use( bodyParser.json());

//CORS
/*Con esta configuracion cualquier persona puede llamar estos servicios*/
server.app.use ( cors({ origin: true, credentials: true}))

//Rutas de servicios
server.app.use('/', router);