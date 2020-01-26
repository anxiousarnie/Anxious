const mongoose = require('mongoose')

const PatientsSchema =new mongoose.Schema({
    name:{
        type:"string",
        required:"true"
    },
    record:{
        type:"number",
        required: "true"
    },
    surgeon:{
        type:"string",
        required: "true"
    },
    equipment:{
        type:"string",
        required:"true"
    },
})

module.exports = mongoose.model('Patient', PatientsSchema)