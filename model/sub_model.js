const mongoose = require('mongoose');

const SubdelSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    subdelegacion_id: {
        required: true,
        type: Number
    },
    delegacion_id: {
        required: true,
        type: Number
    },
    old_address: {
        required: true,
        type: String
    },
    new_address: {
        required: false,
        type: String
    },
    num_sub: {
        required: true,
        type: Number
    },
    status: {
        required: true,
        type: Boolean
    }
})

// 'sub' will be the name of the collection on Mongo database
// But it will save with plural form: subs
const Sub = mongoose.model('sub', SubdelSchema)

module.exports = Sub
