// Store some data in the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect(); // To the database

// Create some faculty
var data = $.csv.toObjects(voters.csv);
console.log(data)

// Reset the data
/* mongoose.connection.dropDatabase()
  .then(() => harcourt.save())
  .then(() => torrey.save())
  .then(() => lee.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack)); */