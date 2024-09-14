const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://kleishamzai123:Pallati1290!@cluster0.nzyzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));