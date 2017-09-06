const express = require('express');
const bodyParser = require('body-parser');

const auctionhouses = require("./dataModel.json");
const app = express();

const port = process.env.PORT || 3000;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/auction-houses', function (req, res) {
    res.json(auctionhouses);
});


app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});