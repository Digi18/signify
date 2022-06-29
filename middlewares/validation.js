const validation = async (req,res,next) => {

    if(!req.body.review){
        console.log('empty review');
        return res.send({"Error":"Enter some review"});
    }
    if(!req.body.author){
        return res.send({"Error":"Invalid author"});
    }
    if(!req.body.review_source){
        return res.send({"Error":"Invalid review source"});
    }
    if(!req.body.rating){
        return res.send({"Error":"Enter some rating"});
    }
    if(req.body.rating>5 || req.body.rating<1){
        return res.send({"Error":"Invalid rating parameter"});
    }
    if(!req.body.title){
        return res.send({"Error":"Enter review title"});
    }
    if(!req.body.product_name){
        return res.send({"Error":"Invalid product name"});
    }

    next();
}

module.exports = {validation};