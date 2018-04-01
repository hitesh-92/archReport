/*

const jwt = require('jsonwebtoken');
const {ObjectID} = require('mongodb');

const {log_site} = require('./../../models/log_site');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

//create users to add
const users = [{
    _id: userOneId,
    email: 'hitesh@email.com',
    password: 'password1',
    token:[{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
},{
    _id: userTwoId,
    email: 'userTwo@email.com',
    password: 'password2',
    token:[{
        access: 'auth',
        token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
}];

//create websites to add
const logs = [{
    _id: new ObjectID(),
    title: 'realNews',
    url: 'www.archreport.uk',
    entryDate: new Date(),

}, {
    _id: new ObjectID(),
    title: 'fakeNews',
    url: 'www.cnn.com',
    entryDate: new Date(),
    updatedAt: '31032018'
}];

//populate 'sites' collection
// const populateLogs = (done) => {
//     log_site.remove({}).then(() => {
//         return log_site.insertMany(logs);
//     }).then(() => done());
// };

//populate 'users' colleciton
// const populateUsers = (done) => {
//     User.remove({}).then(() => {
//         var userOne = new User(users[0]).save();
//         var userTwo = new User(users[1]).save();

//         return Promise.all([userOne, userTwo])
//     }).then(() => done());
// };



const populateLogs = (done) => {
    log_site.remove({}).then(() => {
      return log_site.insertMany(logs);
    }).then(() => done());
};


const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne,userTwo])
    }).then(() => done());
};









module.exports = {
    logs,
    populateLogs,
    users,
    populateUsers
};


*/