const express = require('express');
const router = express.Router();
const Model = require('../model/sub_model');

module.exports = router


// Post method
router.post('/post', async (req, res) => {
    
    const sub = new Model({
        formal_sub_name: req.body.sub_name,
        subdelegacion_id: req.body.subdelegacion_id,
        delegacion_id: req.body.delegacion_id,
        ciz_id: req.body.ciz_id,
        with_ofi_cob: req.body.with_ofi_cobros,
        address: {
            old_address: req.body.address[0].old_address,
            new_address: req.body.address[0].new_address,
            street: req.body.address[0].street,
            street_num: req.body.address[0].street_num,
            reference: req.body.address[0].reference,
            col: req.body.address[0].col,
            mpo: req.body.address[0].mpo,
            city: req.body.address[0].city,
            state: req.body.address[0].state,
            cp: req.body.address[0].cp,
            formal_state_name: req.body.address[0].formal_state_name,
        }
    });

    try {
        const SubdelegacionToSave = await sub.save();
        res.status(200).json(SubdelegacionToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

// Get all method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get by ID method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
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
