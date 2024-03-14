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
    it('should create a new URL code', async () => {
      // Mock request and response objects
      const req = {
        body: {
          longUrl: 'https://example.com'
        }
      };
      const res = {
        status: (code) => {
          return {
            send: (data) => {
              chai.expect(code).to.equal(201);
              chai.expect(data.status).to.be.true;
              // Additional assertions can be made here
            }
          };
        }
      };
      
      // Call the function and pass mock objects
      await createUrlCode(req, res);
    });

    // Add more tests for edge cases
  });

//   describe('getUrlCode', () => {
//     it('should redirect to the long URL', async () => {
//       // Mock request and response objects
//       const req = {
//         params: {
//           urlCode: 'your_test_url_code'
//         }
//       };
//       const res = {
//         status: (code) => {
//           return {
//             send: (data) => {
//               chai.expect(code).to.equal(302);
//               chai.expect(data).to.have.property('status').that.is.true;
//               // Additional assertions can be made here
//             },
//             redirect: (url) => {
//               chai.expect(url).to.be.a('string');
//               // Additional assertions can be made here
//             }
//           };
//         }
//       };
      
//       // Call the function and pass mock objects
//       await getUrlCode(req, res);
//     });

    // Add more tests for edge cases
//   });
});
