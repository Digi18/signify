const app = require('../server');
const request = require('supertest');
const should = require('chai').should();
const dbCon = require('../db/connection');

describe('GET /getAverage?year=YYYY&month=MM', () => {
    
    before((done) => {
        dbCon;
        done();
      })
    it('Get average rating based on year and month', async () => {

       const result = await request(app).get('/api/getAverage?year=2017&month=05');
       const average = result.body;
       average.should.be.a('object');
       average.should.have.property('Average_rating'); 
       average.should.have.property('Year'); 
       average.should.have.property('Month'); 
       average.should.have.property('Total_reviewers'); 
       average.should.have.property('Review_total'); 
    })  
});