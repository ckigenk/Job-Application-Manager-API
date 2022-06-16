const getAllJobs=(req, res)=>res.send('All jobs')
const createJob=(req, res)=>res.send('Job created')
const getSingleJob=(req, res)=>res.send('Single job')
const updateJob=(req, res)=>res.send('job updated')
const deleteJob=(req, res)=>res.send('job deleted')

module.exports = {getAllJobs, createJob, getSingleJob, updateJob, deleteJob}