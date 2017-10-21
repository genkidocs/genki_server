var express = require('express');
var path = require("path");
var app = express();

//Path to html content
app.use(express.static('../genki'))

app.get('/*', function (req, res) {
    //Path to index.html  
    var file = path.join(__dirname,"../genki/index.html");
  res.sendFile(file)
})

app.listen(55005, function () {
  console.log('Example app listening on port 55005!')
})