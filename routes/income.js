// routes/incomes.js
const express = require('express');
const router = express.Router();
const Income = require('../models/income');

router.get('/', async (req, res) => {
  const incomes = await Income.find();
  res.json(incomes);
});

router.post('/', async (req, res) => {
  const income = new Income(req.body);
  await income.save();
  res.json(income);
});

module.exports = router;
