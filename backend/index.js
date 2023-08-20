const express = require('express');
const bodyParser = require('body-parser');
const connectToMongo = require('./db');
const login = require('./routes/login');
const signup = require('./routes/signup');
const cors = require('cors');
const fetch = require('./routes/fetch');
const password = require('./routes/Passwords')

connectToMongo();
const app = express();
const port = 5000;
app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json());




app.use('/api', login);
app.use('/api', signup);
app.use('/api', fetch);
app.use('/api/passwords', password);


app.listen(port, () => console.log(`Server started on port ${port}`));
