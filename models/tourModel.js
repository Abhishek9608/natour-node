const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,  'A tour must have a name'],
        unique:true,
        trim:true
    },
    duration:{
        type:Number,
        required:[true, 'A tour must have duration']

    },
    maxGroupSize:{
        type:Number,
        required:[true, 'A tour must have groupsize']

    },
    difficulty:{
        type:String,
        required:[true, 'A tour must have difficulty']
    },
    ratingsAverage:{
        type:Number,
        default:4.5
    },
    ratingsQuantity:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:[true, 'A tour number a price']
    },
    priceDiscount:Number,
    summary:{
        type:String,
        trim:true
    }
});
const Tour = mongoose.model("Tour", tourSchema);


module.exports = Tour;
