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
router.get('/getAll', (req, res) => {
    res.send('Get all Subdelegaciones')
})

// Get by ID method
router.get('/getOne/:id', (req, res) => {
    res.send('req.params.id')
})

// Update by ID method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID Subdelegacion')
})

// Delete by ID method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID Subdelegacion')
})

// Post method
router.post('/post', (req, res) => {
    res.send('Post API')
})

