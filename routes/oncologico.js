const express = require('express')
const router = express.Router()
const PatientsSchema = require('../models/oncologico')

router.get('/', (req, res)=>{
    res.render('oncologico/home')
})

router.post('bibi',(req,res)=>{
    res.render('oncologico/bibi')
})


router.patch('foy',(req,res)=>{
    res.render('oncologico/foy')
})

router.delete('pancho',(req,res)=>{
    res.render('oncologico/pancho')
})







module.exports = router