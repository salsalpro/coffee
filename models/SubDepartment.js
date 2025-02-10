const mongoose = require('mongoose')
require('./Department')

const Schema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    department:{
        type:mongoose.Types.ObjectId,
        ref:'Department',
        required:true
    }
})

export default mongoose.models.SubDepartment || mongoose.model('SubDepartment' , Schema)