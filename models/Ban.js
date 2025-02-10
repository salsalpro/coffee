const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    username:{
        type:String,
        required:false
        
    },
    phone:{
        type:String,
        required:false
        
    },
    email:{
        type:String,
        required:false
    }
} , {
    timestamps:true
})


export default mongoose.models.Ban || mongoose.model('Ban' , Schema)