const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
      .then(() => {
        console.log('MongoDB connected successfully');
      })
      .catch((error) => {
        console.error('MongoDB connection failed:', error);
      });
};

module.exports = connectDB;
