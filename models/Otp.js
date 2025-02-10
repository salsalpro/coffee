const mongoose = require('mongoose')

const Schema = await mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    expireTime:{
        type:Date,
        required:true
    },
    // times:{ // when user did not enter that true more than 3 or 4 times you must make him to do that in another way 
    //     type:Number,
    //     required:true
    // },
})


export default mongoose.models.Otp || mongoose.model('Otp' , Schema)