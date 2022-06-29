const { fetchReviews } = require('../services/getReviews.service');

const getReviews = async (req, res) => {

    const data = await fetchReviews();
    return res.status(200).send({ "reviews": data });

}

module.exports = { getReviews };