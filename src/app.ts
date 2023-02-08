import express, { application } from "express";
import morgan from "morgan";
import exphbs, { engine } from 'express-handlebars';
import path from 'path';
import indexRoutes from './routes/index';
import comicsRoutes from './routes/comics';
 class Application {
    app : express.Application
    constructor(){
        this.app = express();
        this.settings();
        this.midleware();
        this.routes();
        this.API();
    }
    API(){
        this.app.set('APIHost', 'http://gateway.marvel.com/v1/public/');
    }
    settings(){
this.app.set('port', 3000);

this.app.set('views', path.join(__dirname,'views'))
this.app.engine('.hbs', engine({
    layoutsDir:path.join(this.app.get('views'), 'layouts'),
    partialsDir:path.join(this.app.get('views'), 'partials'),
    defaultLayout:'main',
    extname:'.hbs'
}));
this.app.set('view engine', 'hbs');
}

    midleware(){
this.app.use(morgan('dev'));
    }
    routes(){
this.app.use(indexRoutes);
this.app.use(comicsRoutes);
    }
    start(){
        this.app.listen(this.app.get('port'), ()=>{
           
        })
    }
 }
export default Application;