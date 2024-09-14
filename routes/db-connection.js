const mongoose = require('mongoose');

// Replace `process.env.DB` with your connection string directly for testing
const dbURI = 'mongodb+srv://kleishamzai123:Pallati1290!@cluster0.nzyzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const db = mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = db;