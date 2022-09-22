const { mygroup, getMember } = require('../models/models.members');
const getMemberMessage = (req, res) => {
    const id = req.params?.id;
    const member = getMember(id);
    if (member.hasOwnProperty('id')) {
        res.send(`<html><body><ul><li>${member.name}</li></ul></body></html>`);
    }
    else res.send('Not valid');

};
const getAllMemberMessage = (req, res) => {
    const htmls = mygroup.map(member => `<li>${member.name}</li>`).join('');
    res.send(`<html><body><ul>${htmls}</ul></body></html>`);
};
module.exports = {
    getMemberMessage,
    getAllMemberMessage
}