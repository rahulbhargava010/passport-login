const express = require("express")
const Expense = require("../models/Expense")
const Project = require("../models/Project")
const router = express.Router()
const { ObjectId } = require('mongodb');

const { ensureAuthenticated } = require('../config/auth')

//Adding a new Project
router.post('/addProject', ensureAuthenticated, (req, res) => {
    const projectInfo = new Project({
        name: req.body.project,
        city: ObjectId(req.body.city),
        company: ObjectId(req.body.company)
    })
    const project  = projectInfo.save()

    res.json({ project })
})

router.get('/getProjects', (req, res) => {
    Project.find({}, (err, result) => {
        res.json({ projects: result })
    })
})

// Getting campaign data b/w Dates
router.post('/projectData', ensureAuthenticated, async (req, res) => {
    let errors = [], expenses
    const { startDate, endDate, project } = req.body

    if (!startDate || !endDate || !project) {
        errors.push({ msg: 'Please fill all the fields' })
    }

    await Expense.find({
           "spendingDate": { 
                '$gte': startDate, 
                '$lte': endDate
            },
            project: ObjectId(project)
     }, (err, res) => {
        res.json({ spendings: res })
    })
})

module.exports = router