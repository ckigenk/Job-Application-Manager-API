
const express = require('express')
const router = express()
const { getAllJobs, createJob, getSingleJob, updateJob, deleteJob } = require('../controllers/jobs')

// setup routes
router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getSingleJob).patch(updateJob).delete(deleteJob)

module.exports = router
