const { Schema, model } = require("mongoose")



const studentSchema = new Schema({
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    middlename: {
        required: false,
        type: String
    },
    class: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

module.exports = model('Student', studentSchema)