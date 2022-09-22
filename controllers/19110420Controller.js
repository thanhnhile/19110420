const { mygroup, getMember, addToGroup } = require('../models/models.members');

const getMemberReq = (req, res) => {
    const id = req.params.id;
    res.status(200).json(getMember(id));
};
const postMemberReq = (req, res) => {
    const result = addToGroup(req.body);
    res.status(200).json(result);
};
module.exports = {
    getMemberReq,
    postMemberReq
}