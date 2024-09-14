const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://kleishamzai:Pallati1290@cluster0.nzyzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));