const mongoose = require('mongoose')

const RecordSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        bloodPressure: {
            systolic: { type: Number, required: true },
            diastolic: { type: Number, required: true }
        },
        sugarLevel: { type: Number, required: true },
        pulse: { type: Number, required: true },
        recordedAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Record', RecordSchema)