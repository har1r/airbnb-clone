const express = require("express");
const authRoute = require("./authRoute.js");

const route = express.Router();

route.use('/auth', authRoute, (req, res) => {
    res.json("masuk rute auth")
});

module.exports = route;