const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname + '/app/public')));

require("./app/routing/api-routes.js")(app);

require("./app/routing/notes-routes.js")(app);

app.listen(PORT, function(){
    console.log('App listening on PORT: http://localhost:' + PORT)
  });