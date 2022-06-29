const mongoose = require('mongoose');
require('dotenv').config();
let dbCon;

if(process.env.NODE_ENV === 'test'){
     dbCon = mongoose.connect(process.env.TEST_DB_URL,
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('test db connected successfully')
        })
        .catch((err) => {
            console.log(err);
        });
}
else{
     dbCon = mongoose.connect(process.env.DB_URL,
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Dev db connected successfully')
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = dbCon;
