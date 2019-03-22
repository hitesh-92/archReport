const express = require('express')
const app = express()
const serveStatic = require('serve-static')
const path = require('path')
const port = process.env.PORT || 8080;

app.use("/", serveStatic(path.join(__dirname, '/dist')))

app.get('/*', (req, res) => res.redirect('/'))

app.listen(port)