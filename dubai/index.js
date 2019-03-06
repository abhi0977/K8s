// Dependency
let express = require('express')
let app = express()

let {
    requestToTokyo,
    requestToLondon,
    requestToParis,
    getSum
} = require('./helper')

// Variables
let PORT = 5004;
let PROJECT_NAME = "Dubai"

// GET Request
app.get('/', function (req, res) {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let LOG = {
        IP : ip
    }

    Promise.all([requestToTokyo(), requestToParis(), requestToLondon()]).then((values) => {
        getSum(values[0],values[1],values[2]).then((d) => {
            LOG.response = d
            console.log(LOG)
            res.status(200).send(`${d}`)
        }).catch((err) => {
            LOG.error = err
            console.log(LOG)
            res.status(400).send(`${err}`)
        })
    })
})

// Start Server
app.listen(PORT, function () {
    console.log(`${PROJECT_NAME} running on port : ${PORT}`);
})
