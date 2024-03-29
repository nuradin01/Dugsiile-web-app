const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.ObjectId,
        ref: 'Student',
        required: true,
      },
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
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
    },
    isPaid: {
        type: Boolean,
        default: false,
    }

  
});


module.exports = mongoose.model('Test', TestSchema);
