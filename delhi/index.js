// Dependency
let express = require('express')
let app = express()

// Variables
let PORT = 5003;
let PROJECT_NAME = "Delhi"

// GET Request
app.get('/', function (req, res) {

    // Get param values
    let {
        tokyo,
        london,
        paris
    } = req.query

    // Add all the values
    let sum = (parseInt(tokyo) || 0) + (parseInt(london) || 0) + (parseInt(paris) || 0);
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    let LOG = {
        IP : ip,
        PARIS : paris,
        LONDON : london,
        TOKYO : tokyo,
        SUM : sum
    }
    
    console.log(LOG);
    
    return res.status(200).send(`${sum}`);
})

// Start Server
app.listen(PORT, function () {
    console.log(`${PROJECT_NAME} running on port : ${PORT}`);
})
