const Jobs = require('../models/jobs')
const asyncWrapper=require('../middleware/asnycWrapper')
// setup CRUD operations
const getAllJobs = asyncWrapper(async (req, res) => {
  const allJobs = await Jobs.find()
  res.json({ allJobs })
})
const createJob =asyncWrapper(async (req, res) => {
  const job = req.body
  await Jobs.create(job)
  res.json(job)
})
const getSingleJob = asyncWrapper(async (req, res) => {
  const { id: jobID } = req.params
  const singleJob = await Jobs.findOne({ _id: jobID })
  if (!singleJob) {
    res.send(`Job with id ${jobID} not found`)
  }
  res.json(singleJob)
})
const updateJob = asyncWrapper(async (req, res) => {
  const { id: jobID } = req.params
  const singleJob = await Jobs.findOneAndUpdate({ _id: jobID }, req.body, { new: true, runValidators: true })
  if (!singleJob) {
    res.send(`Job with id ${jobID} not found`)
  }
  res.json(singleJob)
})
const deleteJob = asyncWrapper(async (req, res) => {
  const { id: jobID } = req.params
  const singleJob = await Jobs.findOneAndDelete({ _id: jobID })
  if (!singleJob) {
    res.send(`Job with id ${jobID} not found`)
  }
  res.json(singleJob)
})

module.exports = { getAllJobs, createJob, getSingleJob, updateJob, deleteJob }
