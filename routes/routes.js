const express = require('express');
const router = express.Router();
const Model = require('../model/sub_model');

module.exports = router


// Post method
router.post('/post', async (req, res) => {

    let txt_standard_address =
        req.body.street

        if (!req.body.street) {
            txt_standard_address = ''
        }
        else {
            txt_standard_address = req.body.street

            if (req.body.street_num )
                txt_standard_address += ' ' + req.body.street_num

            if (req.body.reference)
                txt_standard_address += ', ' + req.body.reference

            if (req.body.col)
                txt_standard_address += ', ' + req.body.col

            if (req.body.mpo)
                txt_standard_address += ', ' + req.body.mpo

            if (req.body.city)
                if(req.body.city != "Ciudad de México")
                    txt_standard_address += ', ' + req.body.city

            if (req.body.state)
                txt_standard_address += ', ' + req.body.state

            if (req.body.country)
                txt_standard_address += ', ' + req.body.country

            if (req.body.cp)
                txt_standard_address += ', ' + req.body.cp
        }

    const sub = new Model({
        formal_sub_name: req.body.formal_sub_name,
        subdelegacion_id: req.body.subdelegacion_id,
        delegacion_id: req.body.delegacion_id,
        ciz_id: req.body.ciz_id,
        with_ofi_cob: req.body.with_ofi_cob,
        old_address: req.body.old_address,
        new_address: req.body.new_address,
        standard_address: txt_standard_address,
        street: req.body.street,
        street_num: req.body.street_num,
        reference: req.body.reference,
        col: req.body.col,
        mpo: req.body.mpo,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        cp: req.body.cp,
        formal_state_name: req.body.formal_state_name,
        created_at: new Date(),
        updated_at: new Date()
    });

    try {
        const SubdelegacionToSave = await sub.save();
        res.status(200).json(SubdelegacionToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Get all method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get by ID method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Update by ID method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete by ID method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete All method
router.delete('/delete', async (req, res) => {
    try {
        const data = await Model.deleteMany();
        res.send(`All Documents has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
