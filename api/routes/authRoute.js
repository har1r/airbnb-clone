const express = require("express");
const {loginAuth, registerAuth, profileAuth} = require("../controllers/AuthController.js")

const authRoute = express.Router();

authRoute.post('/logauth', loginAuth);
authRoute.post('/regauth', registerAuth);
authRoute.get('/profile', profileAuth);

module.exports = authRoute;