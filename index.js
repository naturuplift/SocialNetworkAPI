// Include packages needed for this application
const express = require('express');
// Imports the routing files from ./routes directory
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

// initializes a new instance of the Express application
const app = express();
// set port the server will listen to
const PORT = process.env.PORT || 3001;

// express app to recognize incoming requests as JSON objects
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// express app to use the routes defined
app.use(routes);

// sync mongoose models to the database
db.once("open", () => {
  app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
  });
});