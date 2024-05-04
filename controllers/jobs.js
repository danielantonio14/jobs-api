const getAllJobs = async(req,res)=> {
    res.send('getAllJobs ');
}


const getJob = async(req,res)=> {
    res.send('getJob ');
}

const createJob = async(req,res)=> {
    res.send('create job');
}

const updateJob = async(req,res)=> {
    res.send('update a job');
}

const deleteJob = async(req,res)=> {
    res.send('delete a job');
}


module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}