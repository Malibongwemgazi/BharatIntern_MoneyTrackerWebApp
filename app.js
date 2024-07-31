const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/money-tracker', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(express.static('public'));

const expensesRouter = require('./routes/expenses');
const incomesRouter = require('./routes/incomes');

app.use('/api/expenses', expensesRouter);
app.use('/api/incomes', incomesRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
