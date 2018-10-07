const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 5050;
const axios = require('axios');
const path = require('path');


const __test = require('./views/assets/test');

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

// app.use(express.static(__dirname + '../public'));
// app.use(express.static(path.join(__dirname + 'public')));

app.get('/', (req, res) => {
    res.render('index.hbs');
});

app.get('/archive', (req, res) => {
    res.render('archive.hbs');
});

app.listen(port, () => {
    console.log(`\nRunning Express Server - port:${port}\n`);
});
