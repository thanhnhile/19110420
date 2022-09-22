const { json } = require("express");

const validID = [19110420, 19110355, 19110471];
const mygroup = [
    {
        id: 19110420,
        name: 'Lê Thị Thanh Nhi'
    }
];

const checkValidMember = (member) => {
    const validID = [19110420, 19110355, 19110471];
    if (validID.includes(member.id)) {
        if (mygroup.find(m => m.id == member.id)) {
            return false;
        }
        return true;
    }
    return false;
}
const getMember = (id) => {
    const result = mygroup.find(member => member.id == id);
    if (result) {
        return result;
    }
    return { error: 'Not valid' };
}
const addToGroup = (member) => {
    if (checkValidMember(member)) {
        mygroup.push(member);
        return member;
    }
    else return { error: 'Not valid' };
}
module.exports = {
    mygroup,
    getMember,
    addToGroup
}