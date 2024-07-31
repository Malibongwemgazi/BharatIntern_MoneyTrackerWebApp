// routes/expenses.js
const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');

router.get('/', async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

router.post('/', async (req, res) => {
  const expense = new Expense(req.body);
  await expense.save();
  res.json(expense);
});

module.exports = router;