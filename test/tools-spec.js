
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Number', () => {
    /*
     * Test the /GET route
     */
    describe('/GET Random Number', () => {
        it('it should return number', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.a('string');
                    done();
                });
        });
    });

});