
const request = require('supertest');
const expect = require('expect');
const {ObjectID} = require('mongodb');

const {app} =  require('./../server');
const {LogSite} = require('./../models/LogSite');
// const {User} = require('./../models/user');
// const {logs, populateLogs, users, populateUsers} = require('./seed/seed');

const testLogs = [{
    _id: new ObjectID(),
    title: 'archReport',
    url: 'www.archReport.uk',
    entryDate: '1522549499247',
    updatedAt: null
}, {
    _id: new ObjectID(),
    title: 'fakeNews',
    url: 'www.cnn.com',
    entryDate: '1522549463777',
    updatedAt: '1522549489831'
}];


// beforeEach((done) => {
//     LogSite.remove({}).then(() => {
//         return LogSite.insertMany(testLogs);
//     }).then(() => done());
// });

beforeEach((done) => {
    LogSite.remove({}).then(() => {
        LogSite.insertMany(testLogs);
    }).then(() => done());
});



describe('POST /log', () => {

    it('should create new log', (done) => {
        var title = 'createNewLog';
        var url = 'www.createNewLog.com';
        
        request(app)
            .post('/log')
            .send({title, url})
            .expect(200)
            .expect((res) => {
                expect(res.body.title).toBe(title);
                expect(res.body.url).toBe(url);
            })
            .end((err,res) => {
                if(err){ return done(err) }
                LogSite.find({title}).then((log) => {
                    expect(log.length).toBe(1);
                    expect(log[0].url).toBe(url);
                    expect(log[0].title).toBe(title);
                    // expect(log[0].entryDate).toBe(typeof String);
                    done();
                }).catch((e) => done(e));
            });

    });//create new log
});//'POST log'










































/*
//wipe and populate db
// beforeEach(populateLogs);
// beforeEach(populateUsers);
const websites = [{
    _id: new ObjectID(),
    title: 'archReport',
    url: 'www.archreport.uk',
    entryDate: new Date(),
    updatedAt: null
  }, {
    _id: new ObjectID(),
    text: 'Second todo',
    title: 'CNN',
    url: 'www.clintonCrimeNetwork.com',
    entryDate: new Date(),
    updatedAt: '11/09/2002'
  }];
  
  
  beforeEach((done) => {
    log_site.remove({}).then(() => {
      return log_site.insertMany(websites);
    }).then(() => done());
});


//test cases

describe('POST /log_site' , () => {

    it('should add new site', (done) => {
        var title = 'AddNews';
        var url = 'www.testsite.com';
        var entryDate = new Date();

        request(app)
        .post('/log')
        .set('x-auth', users[0].tokens[0].token)
        .send({title, url, entryDate})
        .expect(200)
        .expect((res) => {
            expect(res.body.title).toBe(title);
            expect(res.body.url).toBe(url);
        })
        .end((err, res) => {
            if(err){ return done(err) }

            log_site.find({title}).then((log) => {
                expect(log[0].title).toBe(title);
                expect(log[0].url).toBe(url);
                done();
            }).catch((e) => done(e));
        });
    })//add new site
});



*/