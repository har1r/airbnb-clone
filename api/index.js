const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User.js');
const bycript = require("bcryptjs");
const jwt = require('jsonwebtoken');
const routes = require('./routes/indexRoutes.js');

const app = express();

const bycriptSalt = bycript.genSaltSync(10);
const jwtSecret = 'sdfaskjhf626woigfagd24sghkag';

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

app.use(routes);

// Path for resigter, Login
app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const userDoc = await User.create({
            name,
            email,
            password: bycript.hashSync(password, bycriptSalt)
        });
        res.json(userDoc);
    } catch (error) {
        res.status(422).json(error);
    }
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const userDoc = await User.findOne({email});
    if (userDoc) {
        const passOk = bycript.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(userDoc);
            });
        } else {
            res.status(422).json('pass not ok');
        }
    } else {
        res.json('not found');
    }
});

app.get('/test', (req, res) => res.send('Hello World!'));
app.listen(3000, () => console.log('server running on port 3000!'));