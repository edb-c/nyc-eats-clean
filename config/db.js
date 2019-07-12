//Mongodb Connection

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//Use async/await - asynchronous arrow function
//Use try/catch block, so if it fails, the error message will display
//mongoose.connect returns a promise so we put await before it
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,  
      useCreateIndex: true

    });

    console.log('Successfully Connected to MongoDB');
  } catch (err) {
    console.error(err.message);
    // Escape process with failure
    process.exit(1);
  }
};

module.exports = connectDB; //export the function
