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

app.get('/login', (req,res) => {
    res.render('user/login.hbs', {test:'Login'})
})

app.get('/signup', (req,res) => {
    res.render('user/signup.hbs')
})

app.get('/home', (req,res) => {
    console.log('HIT /home')
    console.log(req)
    res.render('report/home.hbs')
})

app.use((req, res, next) => {
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`\n--Running Express Server - port:${port}\n`);
});