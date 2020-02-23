
const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect(); 

const query = Voter.find();
query.exec(function(error, voters) {
  if (error) console.error(error.stack);
  console.log(voters);
});

