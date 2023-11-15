const express = require('express');
const router = express.Router();
const Model = require('../model/sub_model');

module.exports = router

// Post method
router.post('/post', async (req, res) => {
    const sub = new Model({
        name: req.body.name,
        subdelegacion_id: req.body.subdelegacion_id,
        delegacion_id: req.body.delegacion_id,
        num_sub: req.body.num_sub,
        old_address: req.body.old_address,
        new_address: req.body.new_address,
        status: req.body.status
    })

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
