const express = require('express');
const connectDB = require('../config/db');
const cors = require('cors');

/**
 * Create server
 */
const app = express();

/**
 * Connect to databse
 */
connectDB();

/**
 * Enable cors
 */
app.use(cors());

/**
 * Express enables
 */
app.use(express.json({ extended: true }));

/**
 * Routes
 */
app.use('/api/users', require('../routes/users'));

/**
 * PORT 
 */
const PORT = process.env.PORT || 3001;

/**
 * PORT LISTEN
 */
app.listen(PORT, () => {
    console.log(`Server is listen in port: ${PORT}`);
});