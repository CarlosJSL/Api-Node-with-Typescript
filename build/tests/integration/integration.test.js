"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
describe('Integration tests ', function () {
    describe('GET /api/users/all', function () {
        it('Should return a Json with all users', function (done) {
            helpers_1.request(helpers_1.app)
                .get('api/users/all')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('GET /api/users/:id', function () {
        it('Should return a Json with one user', function (done) {
            helpers_1.request(helpers_1.app)
                .get("api/users/" + 1)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('POST /api/users/new', function () {
        it('Should create a new user', function (done) {
            var user = {
                nome: 'Teste'
            };
            helpers_1.request(helpers_1.app)
                .post("api/users/new")
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('PUT /api/users/:id/edit', function () {
        it('Should update a user', function () {
            var user = {
                id: 1,
                nome: 'TesteUpdate'
            };
            helpers_1.request(helpers_1.app)
                .post("api/users/" + 1 + "/edit")
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('DELETE /api/users/:id', function () {
        it('Should delete a user', function (done) {
            var user = {
                nome: 'TesteUpdate'
            };
            helpers_1.request(helpers_1.app)
                .delete("api/users/" + 1)
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(204);
            });
        });
    });
});
