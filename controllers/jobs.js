const Jobs = require('../models/jobs')
const asyncWrapper = require('../middleware/asnycWrapper')
const { createCustomError } = require('../errors/error')
// setup CRUD operations
const getAllJobs = asyncWrapper(async (req, res) => {
  const allJobs = await Jobs.find()
  res.json({ allJobs })
})
const createJob = asyncWrapper(async (req, res) => {
  const job = req.body
  await Jobs.create(job)
  res.json(job)
})
const getSingleJob = asyncWrapper(async (req, res, next) => {
  const { id: jobID } = req.params
  const singleJob = await Jobs.findOne({ _id: jobID })
  if (!singleJob) {
    return next(createCustomError(`Job with id ${jobID} not found`, 404))
  }
  res.json(singleJob)
})
const updateJob = asyncWrapper(async (req, res, next) => {
  const { id: jobID } = req.params
  const singleJob = await Jobs.findOneAndUpdate({ _id: jobID }, req.body, { new: true, runValidators: true })
  if (!singleJob) {
    return next(createCustomError(`Job with id ${jobID} not found`, 404))
  }
  res.json(singleJob)
})
const deleteJob = asyncWrapper(async (req, res, next) => {
  const { id: jobID } = req.params
  const singleJob = await Jobs.findOneAndDelete({ _id: jobID })
  if (!singleJob) {
    return next(createCustomError(`Job with id ${jobID} not found`, 404))
  }
  res.json(singleJob)
})

module.exports = { getAllJobs, createJob, getSingleJob, updateJob, deleteJob }
