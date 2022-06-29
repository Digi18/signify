const app = require('../server');
const request = require('supertest');
const should = require('chai').should();
const dbCon = require('../db/connection');

describe('GET /getReviews', () => {
    
    before((done) => {
        dbCon;
        done();
      })

    it('Getting all the reviews', async () => {
        const result = await request(app).get('/api/getReviews');
        const data = result.body;
        data.should.be.a('object');
        data.should.have.property('reviews');
        data.should.be.a('object');
        data.reviews.should.be.a('array');
        data.reviews[0].should.have.property('review');
        data.reviews[0].should.have.property('author');
        data.reviews[0].should.have.property('review_source');
        data.reviews[0].should.have.property('rating');
        data.reviews[0].should.have.property('title');
        data.reviews[0].should.have.property('product_name');
        data.reviews[0].should.have.property('reviewed_date');
    });
});