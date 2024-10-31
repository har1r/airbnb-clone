const express = require("express");
const {loginAuth, registerAuth} = require("../controllers/AuthController.js")

const authRoute = express.Router();

authRoute.post('/logauth', loginAuth);
authRoute.post('/regauth', registerAuth);

module.exports = authRoute;