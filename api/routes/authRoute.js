const express = require("express");
const {loginAuth, registerAuth, profileAuth, logoutAuth} = require("../controllers/AuthController.js")

const authRoute = express.Router();

authRoute.post('/logauth', loginAuth);
authRoute.post('/regauth', registerAuth);
authRoute.get('/profile', profileAuth);
authRoute.post('/logoutAuth', logoutAuth);


module.exports = authRoute;