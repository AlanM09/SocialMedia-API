const express = require('express');
// const moment = require('moment');
const mongoose = require ('mongoose');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.use(require('./routes'));

// tells Mongoose which db we want to connect to
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-media-api', {
 useFindAndModify: false,
 useNewUrlParser: true,
 useUnifiedTopology: true 
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));