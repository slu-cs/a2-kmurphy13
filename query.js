
const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect(); 

const query = Voter.find();
query.exec(function(error, voters) {
  if (error) console.error(error.stack);
  console.log(voters);
});

const queries = [

    Voter.find().where('zipcode').equals(13617),
    Voter.find().where('first_name').equals("STARR"),
  
  ];
  
  // Run the queries in parallel
  Promise.all(queries)
    .then(function(results) {
      console.log('Number of registered voters in Canton: ', results[0].length);
      console.log('Full names of all registered voters whose first name is Starr: ', results[1].map(voter=> voter.first_name + voter.last_name));
      mongoose.connection.close();
    }).catch(error => console.error(error.stack));

