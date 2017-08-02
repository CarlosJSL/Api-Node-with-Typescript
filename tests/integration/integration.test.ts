import {app, request,expect} from './config/helpers'
import * as  HTTPStatus from 'http-status';

describe('Integration tests ', () =>{
    
    'use strict';
    const config = require('../../server/config/env/config')()
    const model = require('../../server/models')

    let id;

    const userTest = {
        id: 100,
        name: 'Usuario Teste',
        email: 'teste@email.com',
        password: 'teste'
    }

    const userDefault = {
        id: 1,
        name: 'Default User',
        email:'default@gmail.com' ,
        password:'default'
    }

    beforeEach((done)=>{
        // excluir todos os registros que estao na base de dados, garantindo que um teste nao interfira no resultado do outro
        model.User.destroy({
            where:{}
        }) 
        .then(()=>{
            return model.User.create(userDefault)
            .then(user => {
                model.User.create(userTest)
                .then(() => {
                    done();
                })
            })
        })
    })

    describe('GET /api/users/all',() => {
        it('Should return a Json with all users', done =>{
            request(app)
                .get('/api/users/all')
                .end( (error,res)=> {
                    console.log("aqui:"+res)
                    expect(res.status).to.equal(HTTPStatus.OK);
                    done(error)
                })
        })
    })


    describe('GET /api/users/:id',() => {
        it('Should return a Json with one user',done =>{
            request(app)
                .get(`/api/users/${1}`)
                .end( (error,res)=> {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    done(error)
                })
        })
    })

    describe('POST /api/users/create',() => {
        it('Should create a new user',done =>{

            const user = {
                nome: 'Teste'
            }
             request(app)
                .post(`/api/users/create`)
                .send(user)
                .end( (error,res)=> {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    done(error)
                })
        })
    })

    describe('PUT /api/users/:id/update',() => {
        it('Should update a user',done =>{
            const user = {
                id: 1,
                nome: 'TesteUpdate'
            }
             request(app)
                .put(`/api/users/${1}/update`)
                .send(user)
                .end( (error,res)=> {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    done(error)
                })
        })
    })

    describe('DELETE /api/users/:id/destroy',() => {
        it('Should delete a user',done =>{
            const user = {
                nome: 'TesteUpdate'
            }
             request(app)
                .delete(`/api/users/${1}/destroy`)
                .send(user)
                .end( (error,res)=> {
                    expect(res.status).to.equal(HTTPStatus.NO_CONTENT);
                    done(error)
                })
        })
    })
})
