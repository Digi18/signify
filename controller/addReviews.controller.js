const { postReview } = require('../services/addReviews.service');
const addReview = async (req, res) => {

    const reviewed_date = new Date().toISOString();

    const dataFields = {
        review: req.body.review,
        author: req.body.author,
        review_source: req.body.review_source,
        rating: req.body.rating,
        title: req.body.title,
        product_name: req.body.product_name,
        reviewed_date
    };

    try {
        const data = await postReview(dataFields);
        return res.status(201).send({"message":"Review added successfully","data":data});
    }
    catch (err) {
        console.log(err);
    };
}

module.exports = {addReview};