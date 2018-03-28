require('./config/config');

const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;

hbs.registerPartials(__dirname + '/../views/partials');


app.set('view engine', 'hbs');

// app.use(express.static(__dirname + '../public'));
var path = require ('path');
app.use(express.static(path.join(__dirname + '.../public')));



app.get('/', function(req, res) {
    res.render('index.hbs');
});

app.get('/archive', (req, res) => {
    res.render('archive.hbs');
});

app.listen(port, () => {
    console.log(`Running Express Server - port:${port}`);
});
