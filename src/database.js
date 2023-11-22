// database.js

const mongoose = require('mongoose');

// Definición de la función connect
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/nimayana', {
      useNewUrlParser: true,
    });
    console.log('Database: Connected');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1);
  }
}

// Exporta la función connect
module.exports = { connect };
