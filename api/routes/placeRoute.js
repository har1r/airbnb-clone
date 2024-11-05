const express = require("express");
const {linkPhotoUpload} = require("../controllers/placeController.js");
const placeRoute = express.Router();

placeRoute.post('/upload-by-link', linkPhotoUpload);


module.exports = placeRoute;