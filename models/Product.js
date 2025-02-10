const mongoose = require('mongoose')
require('./Comment')

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    shortDescription:{
        type:String,
        required:true
    },
    longDescription:{
        type:String,
        required:true
    },
    weight:{
        type:Number,
        required:false
    },
    suitableFor:{
        type:String,
        required:false
    },
    smell:{
        type:String,
        required:false
    },
    score:{
        type:Number,
        default:5
    },
    tags:{
        type:[String],
        required:false
    },
    img:{
        type:String , // src
        required:true
    },
    comments:{
        type:[
            {
                type:mongoose.Types.ObjectId,
                ref:'Comment',
                required:true
            }
        ]
    },
} , {
    timestamps:true
})



export default mongoose.models.Product || mongoose.model('Product' , Schema)