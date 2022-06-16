const Jobs=require('../models/jobs')

const getAllJobs=(req, res)=>res.send('All jobs')
const createJob=(req, res)=>res.send('Job created')
const getSingleJob=(req, res)=>{
 const {id} = req.params
 res.json({"id":id})
}
const updateJob=(req, res)=>{
 const {id} = req.params
 res.json({"id":id})
}
const deleteJob=(req, res)=>{
 const {id} = req.params
 res.json({"id":id})
}

module.exports = {getAllJobs, createJob, getSingleJob, updateJob, deleteJob}