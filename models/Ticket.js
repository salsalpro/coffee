const mongoose = require('mongoose')
require('./Department')
require('./SubDepartment')
require('./User')

const Schema = mongoose.Schema({
    title:{
        type:String,
        required:true 
    },
    body:{
        type:String,
        required:true 
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    department:{
        type:mongoose.Types.ObjectId,
        ref:'Department',
        required:true 
    },
    subDepartment:{
        type:mongoose.Types.ObjectId,
        ref:'SubDepartment',
        required:true 
    },
    priority:{
        type:Number,
        default:1,
        enum:[1,2,3]
    },
    hasAwnser:{
        type:Boolean,
        default:false
    },
    isAwnser:{
        type:Boolean,
        default:false
    },
    mainTicket:{
        type:mongoose.Types.ObjectId,
        ref:'Ticket',
        required:false
    },

     
} , {
    timestamps:true
})



export default mongoose.models.Ticket || mongoose.model('Ticket' , Schema)