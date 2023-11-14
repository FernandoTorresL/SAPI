const express = require('express');
const router = express.Router()

module.exports = router

// Post method
router.post('/post', (req, res) => {
    res.send('Post Subdelegacion')
})

// Get all method
router.get('/getAll', (req, res) => {
    res.send('Get all Subdelegaciones')
})

// Get by ID method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID Subdelegacion')
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

