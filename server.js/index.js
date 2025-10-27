//Heroku trigger, Oct 2, 2025
require("dotenv").config();
// const { PORT, NODE_ENV = "development" } = process.env;
const port = process.env.PORT || 3001;

const express = require("express");

const serveIndex = require("serve-index");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());

app.use(morgan("tiny"));

app.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
});

// app.use("login", (req,res) => {
//     res.send({
//         token: "test123"
//     });
// });

// app.listen(8080, () => console.log("API is running on http://localhost:8080/login"));

app.use("/request-type", (req, res, next) => {
    console.log("Request type: ", req.method);
    next();
});

app.use("/public", express.static("public"));
app.use("/public", serveIndex("public"));

app.get("/", (req, res) => {
    res.send("Successful response!");
});

// Simple health-check API endpoint for the frontend
app.get('/api', (req, res) => {
    res.json({ message: 'API is running' });
});

// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });

const mode = process.env.NODE_ENV || "development";

app.listen(port, () => {
    console.log(`Server is running on port ${port} in ${mode} mode`);
});