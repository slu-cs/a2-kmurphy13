// Store some data in the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');
const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});

connect(); // To the database



// Create an array of objects, so that each line of the file is represented by an object with three properties.
const rows = [];
file.on('line', function(line) {
  const columns = line.split(',');
  rows.push(new Voter({
    first_name: columns[0],
    last_name: columns[1],
    zipcode: columns[2],
    history: columns[3]
    })
  );
  console.log(rows)
});


// Reset the data
/* mongoose.connection.dropDatabase()
  .then(() => harcourt.save())
  .then(() => torrey.save())
  .then(() => lee.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack)); */