const reviews = require('../db/reviewSchema');

const postReview = async (dataFields) => {
   
    try{
       const reviewAdd = await reviews.create(dataFields);
       return reviewAdd;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {postReview};