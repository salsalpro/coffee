const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    communicationMethod:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

export default mongoose.models.Contact || mongoose.model('Contact' , schema)