
const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect(); 

const queries = [

    Voter.countDocuments(find().where('zipcode').equals(13617).count()),
    Voter.find().where('first_name').equals("STARR"),
    Voter.countDocuments(find({ "history": /GE16/i })),
    Voter.find().sort("-last_name").limit(1),
    Voter.distinct('zipcode')
  
  ];
  
  // Run the queries in parallel
  Promise.all(queries)
    .then(function(results) {
      console.log('Number of registered voters in Canton: ', results[0][0]);
      console.log('Full names of all registered voters whose first name is Starr: ', results[1].map(voter=> voter.first_name + " " +voter.last_name));
      console.log("Number of people who voted in the 2016 General Election: ", results[2][0]);
      console.log("Final last name when sorted alphabetically: ", results[3][0].last_name);
      console.log("Number of distinct zipcodes: ", results[4].length);
      mongoose.connection.close();
    }).catch(error => console.error(error.stack));

