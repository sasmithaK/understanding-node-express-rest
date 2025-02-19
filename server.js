const express = require('express');
const dotenv = require('dotenv'); // Environment variables global
const morgan = require('morgan'); // Logger
const colors = require('colors'); // Colours for console.log
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' });

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

