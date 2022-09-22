const {mygroup} = require('../models/models.members')
const getMyGroupReq = (req,res)=>{
    res.status(200).json(mygroup);
}
module.exports = {
    getMyGroupReq
}