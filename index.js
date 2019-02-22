var express = require('express');

var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname, '/images')));

app.get('/', (request, response) => {  //Test if server is actually working.
  console.log(`URL: ${request.url}`);  //Display URL on console
  response.send('Hello, Server!');     //Display "Hello, Server!" on web response
});

app.get('/api/home-data', function(request, response) {  // Uncertain, is home-data name correct?
  response.send(JSON.parse({ key: "value"}));
})

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/" + "home-html/index.html");
});

app.get("/homes", function(request, response) {
  response.sendFile(__dirname + "/" + "home-html/home_address_index.html");
});

app.get("/homesedit", function(request, response) {
  response.sendFile(__dirname + "/" + "home-html/home_edit.html");
});

app.get("/homescreate", function(request, response) {
  response.sendFile(__dirname + "/" + "home-html/create_home.html");
});

app.get('/residents', function(request, response) {
  response.sendFile(__dirname + "/" + "resident-html/resident_index.html");
});

app.get('/residentsedit', function(request, response) {
  response.sendFile(__dirname + "/" + "resident-html/resident_edit.html");
});

app.get('/residentscreate', function(request, response) {
  response.sendFile(__dirname + "/" + "resident-html/resident_create.html");
});
app.get('/residentsread', function(request, response) {
  response.sendFile(__dirname + "/" + "resident-html/resident_read.html");
});


app.listen(5000, function() {
  console.log('server is running');
});

module.exports = app;  //Is "app" correct name?  Confusing!