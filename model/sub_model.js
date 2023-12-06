const mongoose = require('mongoose');

const SubdelSchema = new mongoose.Schema({

    formal_sub_name: {
        type: String,
        required: true,
        unique: true,
    },
    subdelegacion_id: {
        type: Number,
        required: true,
        min: 1,
        max: 80,
    },
    delegacion_id: {
        type: Number,
        required: true,
        min: 1,
        max: 40,
    },
    ciz_id: {
        type: Number,
        required: true,
        enum: [1, 2, 3],
    },
    with_ofi_cob: {
        type: Boolean,
        required: true,
    },
    address:
        {
            old_address: {type: String, required: true},
            new_address: {type: String, required: true},
            street: {type: String, required: true},
            street_num: {type: String, required: true},
            reference: {type: String, required: true},
            col: {type: String},
            mpo: {type: String, required: false},
            city: {type: String, required: true},
            state: {type: String, required: true},
            cp: {type: String, required: true},
            formal_state_name: {type: String, required: true},
        },
})

// 'sub' will be the name of the collection on Mongo database
// But it will save with plural form: subs
const Sub = mongoose.model('sub', SubdelSchema)

module.exports = Sub
