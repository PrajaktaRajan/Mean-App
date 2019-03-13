// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('../server/routes/api');

const app = express();

const mongoose = require('mongoose');
// Connect mongoose to our database
const config = require('../config/database');
mongoose.connect(config.database, {
  useMongoClient: true
}, function (err) {
  if (err) {
    console.log("ssss", err);
  }
});

var Schema = mongoose.Schema;



const dirname = __dirname.replace('/server', '/');


// Parsers for POST data
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes   
app.use('/api', api);


// Catch all other routes and return the index file

app.get('*', (req, res) => {
  res.sendFile(dirname + 'dist/index.html');
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);


/**
 * Create HTTP server.
 */
const server = http.createServer(app);


/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
