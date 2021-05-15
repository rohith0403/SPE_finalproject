const request = require('supertest');
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
//const db = require("/models");
//const Role = db.role;

const myApp = require('./app');
const app = myApp.listen(5000);




describe('Testing login', function () {
    // user login
    it('return status code', async () => {
        const response = await request(app).post('/auth/login').send({
            username: "rohith",
            password: "password"
        }).expect(200);
    });
    it('return status code', async () => {
        const response = await request(app).post('/auth/login').send({
        username: "rohith",
        password: "test"
        }).expect(401);
        });
        it('return status code', async () => {
        const response = await request(app).post('/auth/login').send({
        username: "asdf",
        password: "test123456"
        }).expect(401);
        });
});

//describe('Testing signup', function () {
//     it('return status code', async ()=> {
//      const response = await request(app).post('/api/auth/signup').send({
//         username: "user6",
//         email: "user6@gmail.com",
//         password:"admin123",
//         phone: "1234577890"
//         }).expect(200);
//     });
//     it('return status code', async ()=> {
//         const response = await request(app).post('/api/auth/signup').send({
//           username: "admin3",
//           email: "admin3@gmail.com",
//           password:"admin123",
//           phone: "123457890",
//           }).expect(200);
//       });
//       it('return status code', async ()=> {
//         const response = await request(app).post('/api/auth/signup').send({
//           username: "admin",
//           email: "admin2@gmail.com",
//           password:"admin123",
//           phone: "1234567890",
//           }).expect(400);
//       });
// });

describe('Testing editor', function () {
    let cookie;
    let userId;
    beforeEach(async (done) => {

        const resp = await request(app).post('/auth/login').send({
            username: "rohith",
            password: "password"
        });
        cookie = resp.header["set-cookie"];
        userId = resp.body;
        done();
    });
    afterEach((done) => {
        request(app).get('/auth/logout')
        // console.log("haha");
        done();
    });
    it('getEditor', async () => {
        const response = await request(app).get('/editor?userId=' + userId).expect(200);
        //  console.log(token);
        //  expect(1).toBe(1);

        //console.log("haha234");
    });

    it('postEditor', async () => {
        await request(app).post('/editor?userId=' + userId).send({
            userId: userId,
            content: "this is a testing string",
        }).expect(200);
        //  console.log(token);
        //  expect(1).toBe(1);

        //console.log("haha234");
    });
    
});



