import {app, request,expect} from './config/helpers'


describe('Integration tests ', () =>{
    
    describe('GET /api/users/all',() => {
        it('Should return a Json with all users', done =>{
            request(app)
                .get('api/users/all')
                .end( (error,res)=> {
                    expect(res.status).to.equal(200);
                })
        })
    })

    describe('GET /api/users/:id',() => {
        it('Should return a Json with one user',done =>{
            request(app)
                .get(`api/users/${1}`)
                .end( (error,res)=> {
                    expect(res.status).to.equal(200);
                })
        })
    })

    describe('POST /api/users/new',() => {
        it('Should create a new user',done =>{

            const user = {
                nome: 'Teste'
            }
             request(app)
                .post(`api/users/new`)
                .send(user)
                .end( (error,res)=> {
                    expect(res.status).to.equal(200);
                })
        })
    })

    describe('PUT /api/users/:id/edit',() => {
        it('Should update a user',() =>{
            const user = {
                id: 1,
                nome: 'TesteUpdate'
            }
             request(app)
                .post(`api/users/${1}/edit`)
                .send(user)
                .end( (error,res)=> {
                    expect(res.status).to.equal(200);
                })
        })
    })

    describe('DELETE /api/users/:id',() => {
        it('Should delete a user',done =>{
            const user = {
                nome: 'TesteUpdate'
            }
             request(app)
                .delete(`api/users/${1}`)
                .send(user)
                .end( (error,res)=> {
                    expect(res.status).to.equal(204);
                })
        })
    })
})
