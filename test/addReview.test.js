 process.env.NODE_ENV='test';

const app = require('../server');
const request = require('supertest');
const should = require('chai').should();
const dbCon = require('../db/connection');

describe('POST /addReview', () => {
    before((done) => {
        dbCon;
        done();
      })
      
     it('Creating a new review',async () => {
 
       const data = {review:"test review",author:'test author',review_source:'test source',rating:5,
                 title:'test title',product_name:'test product'};
       const result = await request(app).post('/api/addReview')
       .send(data);
                    const res = result.body;
                    
                      res.should.be.a('object');
                      res.should.have.property('message');
                      res.should.have.property('data');
                      res.data.should.be.a('object');
                      res.data.should.have.property('review');
                      res.data.should.have.property('author');
                      res.data.should.have.property('review_source');
                      res.data.should.have.property('rating');
                      res.data.should.have.property('title');
                      res.data.should.have.property('product_name');
                      res.data.should.have.property('reviewed_date');
                
        })
});

