const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

export default mongoose.models.Department || mongoose.model('Department', Schema)