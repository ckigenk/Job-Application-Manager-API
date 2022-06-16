const express=require('express')
const router=express()

router.route('/').get(getAllJobs).post(createJob)
router.route('/').patch(updateJob).get(getSingleJob).delete(deleteJob)

