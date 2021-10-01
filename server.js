// require express
const express = require("express");
const connectDB = require("./config/connectDB");

// ----------------------------------------------------------------
// instance app of all express method
const app = express();
require("dotenv").config();
// -------------------------------------------------------------------
// connect with the database
connectDB();
// --------------------------------------------------------------------
// route
// middleware to read the json type
app.use(express.json());
// middleware for the contact routes
app.use("/api/contact", require("./router/contact"));

// --------------------------------------------------------------------
// PORT
const PORT = process.env.PORT;

// start the server
app.listen(PORT, () => console.log("server is running on ", PORT));

// 1-create server
// 2-connectDB
