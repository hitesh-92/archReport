const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 5050;
const axios = require('axios');

// const logData = require('./views/assets/loadArticles');
const getTime = require('./views/assets/test');

const getDate = require('./views/assets/getDate');


hbs.registerHelper('loadArticle', () => {

  const getPost = async (id) => {
    return await logData(id);
  };

  // getPost('5b4ad8b75c03b632645d06bc').then((data) => {
  //   console.log(data);
  //   return data;
  // }).catch((err) => {
  //   console.log(err);
  // });

  getPost('5b4ad8b75c03b632645d06bc').then((data) => {
    console.log('data', data);
    console.log('finished!----');
  })

});

hbs.registerHelper('getDate', () => {
  const date = getDate(); 
  return date;

  // return new hbs.SafeString(`${getDate()}`);
});

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '../public'));

app.get('/', (req, res) => {
    res.render('index.hbs');
});

app.get('/archive', (req, res) => {
    res.render('archive.hbs');
});

app.listen(port, () => {
    console.log(`\nRunning Express Server - port:${port}\n`);
});
