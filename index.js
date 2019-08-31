console.log("index is running overtime!");

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
// const bcrypt = require('bcryptjs'); //bring in the bcryptjs
// const jwt = require('jsonwebtoken');
// const jwtSecret = 'batman was here';
// const db = require('./database/dbConfig.js');

const server = express();


server.use(express.json());
server.use(cors());
server.use(logger('combined'));
server.use(helmet());

//routes
// const noteRoutes = require('./routes/noteRoutes.js');
// const userRoutes = require('./routes/userRoutes.js');
// const loginRoutes = require('./routes/loginRoutes.js');
// const logoutRoutes = require('./routes/logoutRoutes.js');
// const registerRoutes = require('./routes/registerRoutes.js');

// server.use('/api/notes', noteRoutes);
// server.use('/api/users', userRoutes);
// server.use('/api/login', loginRoutes);
// server.use('/api/logout', logoutRoutes);
// server.use('/api/register', registerRoutes);

//server tester message
server.get('/', (req, res) => {
    res.send('Let\'s make some Magic!');
});

//port setup
const port = 9000;
server.listen(port, () => console.log(`==API is on port ${port}==`));