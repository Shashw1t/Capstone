const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const docRoutes = require('./routes/docRoutes');
const expressLayouts = require('express-ejs-layouts');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressLayouts);

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/docs', docRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/layout');


app.get('/', (req,res) => {
    res.send(`ITR filing service API is running on port ${process.env.PORT}`);
});

module.exports = app;