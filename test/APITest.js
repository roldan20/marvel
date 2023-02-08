var chai= require('chai');
let chaiHttp = require('chai-http');
var assert=chai.assert;
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

//GET Comics
  describe('/GET Comics', () => {
      it('it should GET all the books', (done) => {
        chai.request('http://gateway.marvel.com/v1/public')
            .get('/comics?ts=1&apikey=88a0d66d3267d95c19a4ebd69ccc9a9d&hash=c0b607b2eb92d10bdc547f6974e31586')
            .end((err, res) => {
                  res.should.have.status(200);
          
              done();
            });
      });
  });

  //Get comic by id
  describe('/GET one Comic by id', () => {
    it('it should GET one comic by id', (done) => {
      chai.request('http://gateway.marvel.com/v1/public')
          .get('/comics/82967?ts=1&apikey=88a0d66d3267d95c19a4ebd69ccc9a9d&hash=c0b607b2eb92d10bdc547f6974e31586')
          .end((err, res) => {
                res.should.have.status(200);
        
            done();
          });
    });
});

//GET Events

describe('/GET Events', () => {
    it('it should GET all the events', (done) => {
      chai.request('http://gateway.marvel.com/v1/public')
          .get('/events?ts=1&apikey=88a0d66d3267d95c19a4ebd69ccc9a9d&hash=c0b607b2eb92d10bdc547f6974e31586')
          .end((err, res) => {
                res.should.have.status(200);
        
            done();
          });
    });
});

//GET Events by id

describe('/GET one Event by id', () => {
    it('it should GET event by id', (done) => {
      chai.request('http://gateway.marvel.com/v1/public')
          .get('/events/116?ts=1&apikey=88a0d66d3267d95c19a4ebd69ccc9a9d&hash=c0b607b2eb92d10bdc547f6974e31586')
          .end((err, res) => {
                res.should.have.status(200);
        
            done();
          });
    });
});