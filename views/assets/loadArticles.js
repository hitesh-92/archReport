const axios = require('axios');

const columnLogs = async (id) => {
  const columnArea = id;
  const conn = `http://localhost:3000/column/${id}`

  const logs = await axios.get(conn);
  return logs.data;
  // console.log(logs);
};

const singleArticle = async (id) => {
  const conn = `http://localhost:3000/logs/${id}`;

  const single = await axios.get(conn);
  return single;
};

const getArticles = async (ids) => {
  const conn = `http://localhost:3000/logs/multiple/${ids}`;

  return await axios.get(conn);
};

columnLogs('5b4ad8b75c03b632645d06bc').then((data) => {
  const logs = data.data.logs;
  return getArticles(logs);
}).then((data) => {
  const articles = data.data.articles;

  // console.log(articles[0]);

  const makeLink = (article) => {
    let html = '';
    html += `<div><a href="http://${article.url}">${article.title}</a></div>`;
    return html;
  };

  let toDisplay = '';

  for (each of articles) {
    const link = makeLink(each);
    toDisplay += link;
  }

  jQuery('#test').innerHTML = toDisplay;

}).catch((error) => {
  console.log(error);
});
