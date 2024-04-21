const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require("../src/index");
const urlCodeController = require('../src/controller/urlCodeController');
const createUrlCode = urlCodeController.createUrlCode;
const getUrlCode = urlCodeController.getUrlCode;

chai.should();
chai.use(chaiHttp);

describe('App Unit Testing', () => {
  describe('createUrlCode', () => {
    it('should create a new URL code', (done) => {
      // Mock request object
      const req = {
       
          longUrl: 'https://example.com'
  
      };
      chai.request(server)
        .post('/url/shorten')
        .send(req)
        .end((err, response) => {
          if (err) {
            console.log(err);
            done(err); // Pass error to done callback
          } else {
            response.should.have.status(201);
            response.body.should.be.a('object');
            done(); // Call done to signal completion
          }
        });
    });

    // Add more tests for edge cases
  });

  describe('getUrlCode', () => {
    it('should redirect to the long URL', async () => {
      // Mock request object
      const req = {
        params: {
          urlCode: 'your_test_url_code'
        }
      };

      // Call the function and assert on the response
      const res = await getUrlCode(req);

      chai.expect(res.status).to.equal(302);
      chai.expect(res.data).to.have.property('status').that.is.true;
      chai.expect(res.headers).to.have.property('location').to.be.a('string');
    });
  });
});
