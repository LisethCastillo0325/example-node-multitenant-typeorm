import 'reflect-metadata'
import Server from './server/server';
import bodyParser from 'body-parser';
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import ConnectionManager from './connection/connectionManager';

const server = new Server();
const app = server.app

// connection
ConnectionManager.getConnection(true);

// middelwares
app.use(cors())
app.use(morgan('dev'))

// BodyParser
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

// routes
app.use(userRoutes)

// API Route
app.get('/', (req, res, next) => {
    res.json({ body: 'Hello multi-tenant application.' });
});


//llamado a las apis

server.start (() => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`)
})