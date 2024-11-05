const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/indexRoutes.js");

const app = express();

// Middleware
app.use(express.json());
app.use('/uploads', express.static(__dirname+'/uploads'));
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

// collection of routes
app.use(routes);

app.listen(process.env.PORT, () => console.log('server running on port 3000!'));