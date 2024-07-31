// models/expense.js
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  date: Date,
  category: String,
  amount: Number,
  description: String
});

module.exports = mongoose.model('Expense', expenseSchema);
