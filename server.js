const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const students = require('./routes/students');
const fees = require('./routes/fees');
const auth = require('./routes/auth');


const app = express();

// Body parser
app.use(express.json());
//  Cookie parser
app.use(cookieParser());
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }


//Mount routers
app.use('/api/v1/students', students);
app.use('/api/v1/fees', fees);
app.use('/api/v1/auth', auth);


app.use(errorHandler);


  const PORT = process.env.PORT || 5000;
  
  const server = app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    );
  });
  
  // Handle Unhandled promise rejections
  process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
  
    // Close server & Exit process
    server.close(() => process.exit(1));
  });
  