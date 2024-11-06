const express = require("express");
const multer = require('multer');
const {linkPhotoUpload, photoUpload} = require("../controllers/placeController.js");
const placeRoute = express.Router();
const photoMiddleware = multer({dest:'uploads'});

placeRoute.post('/upload-by-link', linkPhotoUpload);
placeRoute.post('/upload', photoMiddleware.array('photos', 100), photoUpload);


module.exports = placeRoute;