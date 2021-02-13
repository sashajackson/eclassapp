const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
const buildPath = path.join(__dirname, '..', 'build');
const {MongoDBURI} = require('./keys');
const cors = require('cors');
const whiteList = ['http://localhost:3000', 'http://localhost:3001'];
const corsOptions = {
    origin: whiteList,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
}

app.use(cors(corsOptions));
app.use(express.static(buildPath));

app.listen(port, () => {
    console.log('listening on ', port);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
 });