const record = require("../model/recordmodel");

const recordController = {
    addRecord: async (req, res) => {
        try {
            const { bloodPressure, sugarLevel, pulse } = req.body;

            const newRecord = await record.create({
                patientId: req.userId,
                bloodPressure,
                sugarLevel,
                pulse,
            });

            res.status(201).json(newRecord);

        } catch (error) {
            res.status(400).json({ message: "Invalid data", error: error.message });
        }

    },
    getPatientRecords: async (req, res) => {
        try {
            const records = await record.find({ patientId: req.userId })
                .sort({ recordedAt: -1 });
            res.status(200).json(records);
        } catch (error) {
            res.status(500).json({ message: "Server Error" }); f
        }
    }
}

module.exports = recordController;