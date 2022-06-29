const reviews = require('../db/reviewSchema');

const fetchRating = async (url) => {

        if(url.includes('?')){
            const rating = url.split('=')[1];
            const getRatings = await reviews.find({ rating: parseInt(rating) });
            return getRatings;
        }
        else{
            const getRatings = await reviews.find({});
            return getRatings;
        }
}

module.exports = {fetchRating};