const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const colors = require('colors');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
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
// Sanitize Data
app.use(mongoSanitize());
//Set security Headers
app.use(helmet());
// Prevent XSS attacks
app.use(xss());
// Rate Limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// Prevent Http param pollution
app.use(hpp());
// Enable cors
app.use(cors());



//Mount routers
app.use('/api/v1/students', students);
app.use('/api/v1/fees', fees);
app.use('/api/v1/auth', auth);


app.use(errorHandler);


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    
    res.send('API is running...')
  })
}

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
  