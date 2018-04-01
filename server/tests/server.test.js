
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


    it('should not add log with invalid title/url', (done) => {

        request(app)
        .post('/log')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err){ return done(err) }
            LogSite.find().then((log) => {
                expect(log.length).toBe(2);
                done();
            }).catch((e) => done(e));
        });
    });

});//'POST log'



describe('GET /log', () => {

    it('should get all logged links', (done) => {
        request(app)
        .get('/log')
        .expect(200)
        .expect((res) => {
            expect(res.body.logs.length).toBe(2);           
        })
        .end(done);
    });
});//GET /log



describe('GET /log/:id', () => {

    it('should get log', (done) => {
        var _id = testLogs[0]._id.toHexString();

        request(app)
        .get(`/log/${_id}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.log.title).toBe(testLogs[0].title);
            expect(res.body.log.url).toBe(testLogs[0].url);            
        })
        .end(done);
    });


    it('should return 404 if log not found', (done) => {
        var _badID = new ObjectID().toHexString();

        request(app)
        .get(`/log/${_badID}`)
        .expect(404)
        .end(done);
    });


    it('should return 404 if _id is not object', (done) => {
        request(app)
        .get('/log/fakeID')
        .expect(404)
        .end(done);
    });

});//GET log/:id



describe('DELETE /log/:id', () => {

    it('should delete a log', (done) => {
        var _id = testLogs[0]._id.toHexString();

        request(app)
        .delete(`/log/${_id}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.log._id).toBe(_id);
        })
        .end((err, res) => {
            if(err){ return done(err) }

            LogSite.findById(_id).then((log) => {
                expect(log).toBeFalsy(); //toNotExist ***
                done();
            }).catch((e) => done(e));
        });
    });

    it('should return 404 if _id not found', (done) =>{
        var _badID = new ObjectID().toHexString();

        request(app)
        .delete(`/log/${_badID}`)
        .expect(404)
        .end(done);
    });

    it('should return 404 if _id is not object', (done) => {
        request(app)
        .delete('/log/fakeID')
        .expect(404)
        .end(done);
    });
});//DELETE /log/:id



describe('PATCH /log/:id', () => {

    it('should update log and add updatedAt', (done) => {
        var _id = testLogs[0]._id.toHexString();
        var title = 'updatedArc';
        var url = 'www.arch.report';

        request(app)
        .patch(`/log/${_id}`)
        .send({title, url})
        .expect(200)
        .expect((res) => {
            expect(res.body.log.title).toBe(title);
            expect(res.body.log.url).toBe(url);
            expect(typeof res.body.log.updatedAt).toBe('string');
        })
        .end(done);
    });

});//PATCH /log/:id
































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