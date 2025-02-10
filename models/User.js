const mongoose = require('mongoose')
import { roles } from '@/src/utils/constans'

const Schema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:false
    },
    refreshtoken:{
        type:String
    },
    role:{
        type:String,
        default:roles.user
    }
})

export default mongoose.models?.User || mongoose.model('User' , Schema)
// export default mongoose.models.User || mongoose.model('User' , Schema)