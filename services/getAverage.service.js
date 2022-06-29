const reviews = require('../db/reviewSchema');

const average = async (year, month) => {

    try {

        const time = year.concat('-', month);
        var sum = 0;
        const result = await reviews.find({});
        const arr = [];
        result.map((val) => {

            const str = val.reviewed_date.substring(0, 7);

            if (time == str) {
                arr.push(val.rating);
            }
        });

        for(var i=0;i<arr.length;i++){
            sum  = sum + arr[i];
        } 
        const av = sum/arr.length;
        const avg = av.toFixed(1);
        if(arr.length > 0){
            return {"Average_rating":avg,"Year":year,"Month":month,"Total_reviewers":arr.length,
                    "Review_total":sum};
        }
        else{
            return {"Average_rating":"No reviewers available","Year":year,"Month":month,
                     "Total_reviewers":arr.length,"Review_total":sum};
        }
    }
    catch (err) {
        console.log(err);
    }

}

module.exports = { average };