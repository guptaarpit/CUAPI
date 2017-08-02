const express = require('express');

const bodyParser = require('body-parser');
const logger = require('morgan');
const router = require('./routes/router');
const socketEvents = require('./socketEvents');
const config = require('./config/main');
const models = require('./models');
const { bunyanLogger } = require('./helpers/shared');
/* const partialResponse = require('express-partial-response');
const authenticate = require('./helpers/authentication');*/
const errorHandler = require('./helpers/errorHandler');

const app = express();

let server;
if (process.env.NODE_ENV !== config.test_env) {
  server = app.listen(config.port);
  console.log(`Your server is running on port ${config.port}.`);
} else {
  server = app.listen(config.test_port);
}

models.sequelize.sync().then(() => console.log('Nice! Database looks fine')).catch(err => console.log(err, 'Something went wrong with the Database Update!'));

const io = require('socket.io').listen(server);

socketEvents(io, models);

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(bodyParser.raw());
app.use(logger('dev')); // Log requests to API using morgan
// Enable CORS from client-side
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

/* app.use(authenticate);
app.use(partialResponse);*/
// Import routes to be served
router(app, models);
app.use(bunyanLogger);
app.use(errorHandler);


// necessary for testing
module.exports = server;
