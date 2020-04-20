const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ExpenseSchema = new mongoose.Schema({
    project: {
        type: Schema.Types.ObjectId, 
        ref: 'Project',
        required:true 
    },
    campaignType: {
        type: String,
        required: true
    },
    actualLeads: {
        type: String,
        required: true
    },
    plannedLeads: {
        type: String,
        required: true
    },
    totalBudget: {
        type: String,
        required: true
    },
    totalSpending: {
        type: String,
        required: true
    },
    cpl: {
        type: String,
        required: true
    },
    clicks: {
        type: String,
        required: true
    },
    impressions: {
        type: String,
        required: true
    },
    spendingDate: {
        type: String,
        required: true
    },
    campaignStartDate: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const Expense = mongoose.model('Expense', ExpenseSchema)

module.exports = Expense