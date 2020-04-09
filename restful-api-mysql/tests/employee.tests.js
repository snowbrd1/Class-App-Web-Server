const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Employee API Service', function () {
  it('should GET all employee', function (done) {
    chai
      .request('http://localhost:3001')
      .get('/api/employee')
      .end(function (err, resp) {
        expect(resp.status).to.be.eql(200);
        expect(resp.body).to.be.a('array');
        expect(resp.body.length).to.not.be.eql(0);
        done();
      });
  });

  it('should GET a single employee', function (done) {
    const expected = [
      {
        id: 1,
        name: "Doe",
        hired: '0001-01-18',
        position: 'sales',
      },
    ];

    chai
      .request('http://localhost:3001')
      .get('/api/employee/1')
      .end(function (err, resp) {
        expect(resp.status).to.be.eql(200);
        expect(resp.body).to.be.a('array');
        expect(resp.body.length).to.not.be.eql(0);
        expect(resp.body).to.be.eql(expected);
        done();
      });
  });

  it.skip('should POST a single employee', function (done) {
    const newEmployee = {
      name: 'New test employee!',
    };
    const expected = { message: 'Add employee successfully!' };

    chai
      .request('http://localhost:3001')
      .post('/api/employee')
      .send(newEmployee)
      .end(function (err, resp) {
        expect(resp.status).to.be.eql(200);
        expect(resp.body).to.be.eql(expected);
        done();
      });
  });
});