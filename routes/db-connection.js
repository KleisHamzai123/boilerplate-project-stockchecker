const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://kleishamzai123:Pallati1290!@cluster0.nzyzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI, {
  connectTimeoutMS: 50000, // 30 seconds
  socketTimeoutMS: 50000  // 30 seconds
})
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));