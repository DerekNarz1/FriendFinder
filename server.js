// ==============================================================================
// DEPENDENCIES

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// Make Express Port
var app = express(); 
var PORT = process.env.PORT || 3000; 

// Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ================================================================================
// ROUTES

require('./app/routing/apiroutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});