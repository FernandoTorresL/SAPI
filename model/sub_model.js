const mongoose = require('mongoose');

const SubdelSchema = new mongoose.Schema({

    formal_sub_name: { type: String, required: true, unique: true },
    subdelegacion_id: { type: Number, required: true, min: 1, max: 80 },
    delegacion_id: { type: Number, required: true, min: 1, max: 40 },
    ciz_id: { type: Number, required: true, enum: [1, 2, 3] },
    with_ofi_cob: { type: Boolean, required: true },
    old_address: { type: String, required: false, default: '' },
    new_address: { type: String, required: false, default: '' },
    standard_address: { type: String, required: false, default: '' },
    street: { type: String, required: false, default: '' },
    street_num: { type: String, required: false, default: '' },
    reference: { type: String, required: false, default: '' },
    col: { type: String, required: false, default: '' },
    mpo: { type: String, required: false, default: '' },
    city: { type: String, required: false, default: '' },
    state: { type: String, required: false, default: '' },
    country: { type: String, required: false, default: '' },
    cp: { type: String, required: false, default: '' },
    formal_state_name: { type: String, required: false, default: '' },
    created_at: { type: Date, required: true},
    updated_at: { type: Date, required: true}
})

// 'sub' will be the name of the collection on Mongo database
// But it will save with plural form: subs
const Sub = mongoose.model('sub', SubdelSchema)

module.exports = Sub
