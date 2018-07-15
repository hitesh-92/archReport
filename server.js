const express = require('express');
const hbs = require('hbs');
var app = express();
const port = process.env.PORT || 5000;

hbs.registerHelper('getTime', () => {
    
});

hbs.registerPartials(__dirname + '/views/partials');
// hbs.registerHelper(__dirname, + './../views/assets');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '../public'));

//pages to render
app.get('/', (req, res) => {
    res.render('index.hbs');
});

app.get('/archive', (req, res) => {
    res.render('archive.hbs');
});


app.listen(port, () => {
    console.log(`\nRunning Express Server - port:${port}\n`);
});