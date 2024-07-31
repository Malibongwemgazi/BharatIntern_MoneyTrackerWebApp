// models/income.js
const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  date: Date,
  source: String,
  amount: Number,
  description: String
});

module.exports = mongoose.model('Income', incomeSchema);
