const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const docRoutes = require('./routes/docRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/docs', docRoutes);

app.get('/', (req,res) => {
    res.send(`ITR filing service API is running on port ${process.env.PORT}`);
});

module.exports = app;