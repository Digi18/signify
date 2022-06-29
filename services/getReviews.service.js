const reviews = require('../db/reviewSchema');

const fetchReviews = async () => {
   
    const allReviews = await reviews.find({},{_id:0});
    return allReviews;
}

module.exports = {fetchReviews};