require('./config/config');

const express = require('express');
const hbs = require('hbs');
const morgan = require('morgan')

var app = express();
// app.use(morgan('dev'));

const port = process.env.PORT;




app.use(bodyParser.json());


// hbs setup
// hbs.registerPartials(__dirname + '/../views/partials');
// hbs.registerHelper(__dirname, + './../views/assets');
// app.set('view engine', 'hbs');
//alt method to link
// app.use(express.static(__dirname + '../public'));
// var path = require ('path');
// app.use(express.static(path.join(__dirname + '.../public')));


//pages to render
app.get('/', function(req, res) {
    res.render('index.hbs');
});

app.get('/archive', (req, res) => {
    res.render('archive.hbs');
});


app.listen(port, () => {
    console.log(`\nRunning Express Server - port:${port}\n`);
});

module.exports = {app};