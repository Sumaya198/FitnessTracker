const mongoose = require('mongoose');
const Schema = mongoose.Schema

const fitnessSchema = new Schema({

    day: {
        type: Date,
        default: () => new Date()
    },
    exercise: [
        {
            type:{
                type: String,
                trim: true,
                required: "Required Field"
            },
            name: {
                type: String,
                trim: true,
                required: "Required field"
            },
            duration: {
                type: Number,
                required: "Required field"
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            
            distance: {
                type: Number
            }
        }
    ]
},
{
    timestamps: true
});


module.exports = mongoose.model('Fitness', fitnessSchema)