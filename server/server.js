require('./config/config');

const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {log_site} = require('./models/log_site');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT;
app.use(bodyParser.json());


//hbs setup
hbs.registerPartials(__dirname + '/../views/partials');
app.set('view engine', 'hbs');
//alt method to link
// app.use(express.static(__dirname + '../public'));
var path = require ('path');
app.use(express.static(path.join(__dirname + '.../public')));


app.get('/', function(req, res) {
    res.render('index.hbs');
});

app.get('/archive', (req, res) => {
    res.render('archive.hbs');
});

app.post('/log', (req, res) => {
    var log = new log_site({
        title: req.body.title,
        url: req.body.url,
        entryDate: req.body.entryDate
    });

    log.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(400).send(e);
    });
});


app.listen(port, () => {
    console.log(`Running Express Server - port:${port}`);
});
