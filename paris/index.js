// Dependency
let express = require('express')
let app = express()

// Variables
let PORT = 5002;
let PROJECT_NAME = "Paris"

// GET Request
app.get('/', function (req, res) {
    let randomNumber = Math.floor(Math.random() * 100);
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`IP : ${ip}, Random Number : ${randomNumber}`);
    return res.send(`${randomNumber}`)
})

// Start Server
app.listen(PORT, function () {
    console.log(`${PROJECT_NAME} running on port : ${PORT}`);
})