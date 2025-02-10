const mongoose = require('mongoose')

// const Schema = mongoose.Schema({
//     code:{
//         type:String,
//         required:true
//     },
//     percent:{
//         type:Number,
//         required:true
//     },
//     expireAt:{
//         type:Date, // per hour
//         required:true
//     }
// } , {
//     timestamps:true
// })

const Schema = mongoose.Schema({
    code:{
        type:String,
        required:true
    },
    percent:{
        type:Number,
        required:true
    },
    expireAt:{
        type:Date, // per hour
        required:true
    },
    maxUse:{
        type:Number,
        required:true
    },
    uses:{
        type:Number,
        default:0
    }
    
} , {
    timestamps:true
})

export default mongoose.models.Discount || mongoose.model('Discount', Schema)