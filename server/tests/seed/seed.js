const jwt = require('jsonwebtoken');
const {ObjectID} = require('mongodb');

const {log_site} = require('./../../models/log_site');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'hitesh@email.com',
    password: 'password1',
    token:[{
        access: 'auth',
        token: jwt.sign({
            _id: userOneId,
            access: 'auth'
        }, 'salt').toString()
    }]
},{
    _id: userTwoId,
    email: 'userTwo@email.com',
    password: 'password2',
    token:[{
        access: 'auth',
        token: jwt.sign({
            _id: userTwoId,
            access: 'auth'
        }, 'salt').toString()
    }]
}];

const log_sites = [{
    _id: new Object(),
    title: 'realNews',
    url: 'www.archreport.uk',
    entryDate: new Date(),
    updatedAt: null
}, {
    _id: new Object(),
    title: 'fakeNews',
    url: 'www.cnn.com',
    entryDate: new Date(),
    updatedAt: '31032018'
}];

const populatelog_site = (done) => {
    log_site.remove({}).then(() => {
        return log_site.insertMany(log_sites);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0].save);
        var userTwo = new User(users[1].save);

        return Promise.all([userOne, userTwo])
    }).then(() => done());
};

module.exports = {
    log_sites,
    populatelog_site,
    users,
    populateUsers
};