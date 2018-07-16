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

///////////////////////////////////////////////////////////

const columnData = async (id) => {
  const conn = `http://localhost:3000/column/${id}`;
  const columnLogs = await axios.get(conn);
  return columnLogs.data;
};
