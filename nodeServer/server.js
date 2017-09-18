var express  = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var request = require('request');
var _ = require("underscore");


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../app')));


app.get('/getVideoFeed', function(req, res){
    var searchValueQuery = req.query.key, parsedJson = "", filtered = "";
    request('https://cdn.playbuzz.com/content/feed/items', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            if(searchValueQuery !== "all" && searchValueQuery !== undefined){
                parsedJson = JSON.parse(body);
                filtered = _.where(parsedJson.items, {'source': searchValueQuery});
                res.send(filtered);
            }else{
                res.send(JSON.parse(body).items);
            }
        }
    })
});

app.all('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../app/index.html'));
});

app.listen(8000);
console.log("App listening on port 8000", __dirname);
