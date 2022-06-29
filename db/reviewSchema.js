const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

	  review:{
	  	type:String
	  },
	  author:{
	  	type:String
	  },
	  review_source:{
	  	type:String
	  },
	  rating:{
        type:Number
	  },
    title:{
      type:String
    },
    product_name:{
      type:String
    },
    reviewed_date:{
      type:String
    }
},{ versionKey: false });

module.exports = mongoose.model('reviews',reviewSchema);



