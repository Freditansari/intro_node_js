const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ExpenseSchema = new Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        description:{
            type: String,
            required: true
        },
        amount:{
            type: Number,
            required: true
        }, 
        expenseDate:{
            type: Date,
            default: Date.now
        }, 
        notes:{
            type: String 
        }

  });

  module.exports = Expense = mongoose.model('expenses', ExpenseSchema);