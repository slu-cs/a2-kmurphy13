// Define a plan for a collection

const mongoose = require('mongoose');

// Schema for a collection of professors
const Voter = new mongoose.Schema({
  first_name: String,
  last_name: String,
  zipcode: Number,
  history: String
});

// Speed up queries on all fields
Professor.index({first_name: 1});
Professor.index({last_name: 1});
Professor.index({zipcode: 1});
Professor.index({history: 1});

// Compile and export this schema
module.exports = mongoose.model('Voter', Voter);