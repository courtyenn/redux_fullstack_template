'use strict';
import env from './env';
import express from 'express';
import handlebars from 'express-handlebars';
import http from 'http';
import Routes from './routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import config from '../webpack.config';

// Initializing our express app
const app = express();

// Setting out app rendering engine to use Handlebars.
app.engine('.hbs', handlebars({extname: '.hbs'}));

// When express renders a page, it looks in the server/views directory. 
app.set('views', 'server/views');

// And finally, setting the engine to understand the .hbs extension is to be interpretted by our view engine.
app.set('view engine', '.hbs');

// here we are telling the express web server to set the static resource folder to 'public'. This is good practice to do so we know where we can put files that will not change. This is where the pictures, CSS, svgs, fonts and more live. 
app.use(express.static('public'));

// middleware package that allows us to read the body in request objects.
app.use(bodyParser.json());

// connection string. 
mongoose.connect(`mongodb://localhost/${process.env.DB}`);

Routes(app);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`)
});