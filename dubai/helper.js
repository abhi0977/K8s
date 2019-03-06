let request = require("request");
const keys = require('./keys');

const getSum = (a, b, c) => {
    return new Promise((resolve, reject) => {
        var options = {
            method: 'GET',
            url: `http://${keys.delhiHost}:${keys.delhiPort}`,
            qs: {
                tokyo: a,
                london: b,
                paris: c
            }
        };

        request(options, (err, response, body) => {
            if (err) {
                return reject(err)
            }
            return resolve(body)
        });
    })
}

const requestToTokyo = () => {
    return new Promise((resolve, reject) => {
        var options = {
            method: 'GET',
            url: `http://${keys.tokyoHost}:${keys.tokyoPort}`,
        };

        request(options, (err, response, body) => {
            if (err) {
                return reject(err)
            }
            return resolve(body)
        });
    })
}

const requestToLondon = () => {
    return new Promise((resolve, reject) => {
        var options = {
            method: 'GET',
            url: `http://${keys.londonHost}:${keys.londonPort}`,
        };

        request(options, (err, response, body) => {
            if (err) {
                return reject(err)
            }
            return resolve(body)
        });
    })
}

const requestToParis = () => {
    return new Promise((resolve, reject) => {
        var options = {
            method: 'GET',
            url: `http://${keys.parisHost}:${keys.parisPort}`,
        };

        request(options, (err, response, body) => {
            if (err) {
                return reject(err)
            }
            return resolve(body)
        });
    })
}

module.exports = {
    getSum,
    requestToTokyo,
    requestToParis,
    requestToLondon
}