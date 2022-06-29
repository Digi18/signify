const express = require('express');
const router = express.Router();
const { getRatings } = require('../controller/getRatings.controller');
const { addReview } = require('../controller/addReviews.controller');
const { getReviews } = require('../controller/getReviews.controller');
const { getAverage } = require('../controller/getAverage.controller');
const { rateLimiter } = require('../middlewares/limiter');

const { validation } = require('../middlewares/validation');

router.post('/addReview', validation, addReview);

router.get('/getReviews', rateLimiter, getReviews);  //Limit requests middleware to prevent DDOs or Brute-force attacks

router.get('/getRatings', getRatings);

router.get('/getAverage', getAverage);

module.exports = router;