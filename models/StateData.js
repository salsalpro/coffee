const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    stateOptions:{
        type:Array,
        required:true
    }
})

export default mongoose.models.StateData || mongoose.model('StateData' , Schema)