const { average } = require('../services/getAverage.service');

const getAverage = async (req, res) => {

    const year = req.query.year; //add yearin YYYY
    const month = req.query.month;  //add month in MM
    const data = await average(year, month);
    return res.status(200).send(data);
}

module.exports = { getAverage };