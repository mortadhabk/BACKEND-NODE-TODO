const request = require('supertest');
const app = require('./index');

// a simple tests for the todos lists
describe('Todos Api', () => {
    it('GET /todos --> array todos',() =>{
        return request(app).get('/api/tasks').expect('Content-Type' ,/json/).expect(200).then(response =>{
            expect(response.body).toEqual(expect.arrayContaining())
        })
    })  
    it('GET /todos/id --> specific todo by ID',() =>{
      return request(app).get('/api/tasks/10').expect('Content-Type' ,/json/).expect(200).then(response =>{
            expect(response.body).toEqual(expect.arrayContaining())
        })
    }) 
    it('GET /todos/id --> 404 if not found',() =>{
        return request(app).get('/api/tasks/9999999').expect('Content-Type' ,/json/).expect(404).then(response =>{
            expect(response.body).toEqual(expect.arrayContaining())
        })
    }) 
    it('POST /todos --> create todo',() =>{
        return request(app).post('/api/tasks/9999999').expect('Content-Type' ,/json/).expect(404).then(response =>{
            expect(response.body).toEqual(expect.arrayContaining())
        })
    }) 
})
