const { fetchRating } = require('../services/getRatings.service');

const getRatings = async (req, res) => {


    const url = req.headers.host + req.url;
    const data = await fetchRating(url);
    return res.status(200).send({ "Total_ratings_found": data.length, "Rating": req.query.rating, "reviews": data });
}

module.exports = { getRatings };