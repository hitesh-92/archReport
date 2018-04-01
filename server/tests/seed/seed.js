const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {LogSite} = require('./../../models/LogSite');
const {User} = require('./../../models/User');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const _users = [{
    _id: userOneId,
    email: 'hitesh@example.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
}, {
    _id: userTwoId,
    email: 'userTwo@example.com',
    password: 'userTwoPass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
}];


const _logs = [{
    title: 'archReprot',
    url: 'www.archReprot.uk',
    entryDate: new Date().getTime(),
    updatedAt: null
}, {
    title: 'secondSiteTitle',
    url: 'www.websitelink.com',
    entryDate: new Date().getTime(),
    updatedAt: '1522549463777'
}];


const _populateLogs = (done) => {
    LogSite.remove({}).then(() => {
        return LogSite.insertMany(logs);
    }).then(() => done(e));
};

const _populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne,userTwo])
    }).then(() => done());
};

module.exports = {
    _users,
    _logs,
    _populateUsers,
    _populateLogs
};