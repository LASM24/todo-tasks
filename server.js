const api = require('./api');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(port, function () {
    console.log("Server is listening at port: " + port);
});

app.get('/', function (req, res) {
    res.send("By Luis Sanabria");
});

app.use('/api', api);