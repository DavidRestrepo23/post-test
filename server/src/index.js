const express = require('express');
const connectDB = require('../config/db');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

/**
 * Create server
 */
const app = express();

/**
 * Static folfer
 */
app.use('/src/images', express.static('src/images'));

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
app.use(fileUpload());
app.use(bodyParser.json());
app.use(express.json({ extended: true }));

/**
 * Auth Routes
 */
app.use('/api/auth', require('../routes/auth'));

/**
 * Routes
 */
app.use('/api/users', require('../routes/users'));
app.use('/api/posts', require('../routes/posts'));


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