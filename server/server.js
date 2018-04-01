require('./config/config');

const express = require('express');
const hbs = require('hbs');
const {ObjectID} = require('mongodb');
const bodyParser = require('body-parser');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {LogSite} = require('./models/LogSite');
// var {User} = require('./models/user');
// var {authenticate} = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());


//hbs setup
hbs.registerPartials(__dirname + '/../views/partials');
// hbs.registerHelper(__dirname, + './../views/assets');
app.set('view engine', 'hbs');
//alt method to link
app.use(express.static(__dirname + '../public'));
// var path = require ('path');
// app.use(express.static(path.join(__dirname + '.../public')));


//pages to render

app.get('/', function(req, res) {
    res.render('index.hbs');
});

app.get('/archive', (req, res) => {
    res.render('archive.hbs');
});






//-----log_site routes

// POST/log - add log
app.post('/log', (req, res) => {
    var newLog = new LogSite({
        title: req.body.title,
        url: req.body.url,
        entryDate: new Date().getTime(),
        // _creator: req.user._id
    });

    newLog.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


// GET - all logs
app.get('/log', (req, res) => {
    LogSite.find().then((logs) => {
        res.send({logs});
    }, (e) => {
        res.send(400).send(e);
    });
});


// GET/:logID 
app.get('/log/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    LogSite.findById(id).then((log) => {
        if(!log){
            return res.status(404).send();
        }

        res.send({log});
    }).catch((e) => {
        return res.status(400).send();
    })
});

// DELETE/:logID
app.delete('/log/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    LogSite.findByIdAndRemove(id).then((log) => {
        if(!log){
            return res.status(404).send();
        }

        res.send({log});
    }).catch((e) => {
        res.status(400).send();
    });
});

// PATCH/:logID
app.patch('/log/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['title', 'url', 'entryDate']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    body.updatedAt = new Date().getTime();

    LogSite.findByIdAndUpdate(
        id,
        {$set: body},
        {new: true}
    ).then((log) => {
        if(!log){
            return res.status(404).send();
        }
        res.send({log});
    }).catch((e) => {
        res.status(400).send();
    });
});






//-----user routes
/* 
// POST/users - add user
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

//authenticate user
app.get('/users/me', authenticate, (req, res) => {
    res.send(req.send);
});

//GET - user login
app.post('/users/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        });
    }).catch((e) => {
        res.status(400).send();
    });
});

//DELETE - user
app.get('/users/me/token', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send(); 
    }, () => { 
        res.status(400).send();
    });
});

// GET - all
// GET/:ID
*/




app.listen(port, () => {
    console.log(`\nRunning Express Server - port:${port}\n`);
});

module.exports = {app};