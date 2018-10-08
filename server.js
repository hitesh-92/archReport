const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 5050;
const path = require('path');

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.render('index.hbs');
});

app.listen(port, () => {
    console.log(`\n--Running Express Server - port:${port}\n`);
});