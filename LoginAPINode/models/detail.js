const mongoose = require('mongoose')

const detailSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Detail',detailSchema)