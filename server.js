const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();
//var cors = require('cors')


// Connect Database
connectDB();

//Cors
//app.use(cors());

//app.options('*', cors()) // include before other routes
/*app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
});
*/  
// Init Middleware
app.use(express.json({ extended: false }));


//app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
  const port = process.env.PORT || 5000;
  
  app.listen(port, () => console.log(`Server running on port ${port}`));
  