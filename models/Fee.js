const mongoose = require('mongoose');

const FeeSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.ObjectId,
        ref: 'Student',
        required: true,
      },
    amountCharged: {
        type: Number,
        required: true,
    },
    amountPaid: Number,
    balance: Number,
    message: String,
    chargedAt: {
        type: Date,
        default: Date.now,
    },
    paidAt: {
        type: Date,
        default: null,
    }

  
});


module.exports = mongoose.model('Fee', FeeSchema);
