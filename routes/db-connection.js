const mongoose = require('mongoose');

mongoose.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;