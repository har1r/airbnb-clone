const express = require("express");
const authRoute = require("./authRoute.js");
const placeRoute = require("./placeRoute.js");

const route = express.Router();

route.use('/auth', authRoute, (req, res) => {
    res.json("masuk rute auth")
});
route.use('/place', placeRoute, (req, res) => {
    res.json("masuk rute place")
});

module.exports = route;