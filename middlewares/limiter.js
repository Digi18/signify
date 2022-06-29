const limiter = require('express-rate-limit');

const rateLimiter = limiter({
    windowMs: 2 * 60 * 1000,
    max: 10,
    message:{
        code:429,
        message:'Please try after few minutes,this is to protect server from DOS,DDos attacks.'
    }
});

module.exports = { rateLimiter };