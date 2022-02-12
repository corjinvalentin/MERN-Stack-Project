const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/items');
const config = require('config');

const app = express();

//Bodyparser Middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');
const { download } = require('express/lib/response');
const e = require('express');

//Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
