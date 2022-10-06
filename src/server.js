import express from 'express';
import { Server as serverHttp } from 'http';
import { Server as ServerIO } from 'socket.io';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash'
import morgan from 'morgan';
import('./middlewares/passport.middleware.js');
import { serverConfig } from './configs/server.config.js';
import { __dirname, __dirJoin, numCPUs } from './utils/helper.util.js';

// import  routes
import infoRoute from './routes/info.route.js';

// Server 
const app = express();
const http = new serverHttp(app);
const io = new ServerIO(http);
const PORT = serverConfig.PORT;

// Middlewares
app.use(cookieParser());
app.use(session({
    secret: 'secretKey',
    rolling: true,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000 // tiempo en milisegundos (10 min = 60000 ms * 10)
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(flash());
app.use((req, res,next) => {
    res.locals.user = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    res.locals.welcome = req.flash('welcome');
    next();
});
app.use(express.static(__dirJoin(__dirname, '../public')));

// Ejs
app.set('views', __dirJoin(__dirname, '../views'));
app.set('view engine', 'ejs');

// endpoints
app.use('/info', infoRoute);
app.get('/', function (req, res) { res.render('index') });

// server connection
const server = http.listen(PORT, () => {
  console.log(`Servidor http en puerto: ${server.address().port}`);
});
server.on("error", error => console.log(`Error en servidor ${error}`));