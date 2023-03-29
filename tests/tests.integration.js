const request = require('supertest')
const app = require('../index')

  afterAll((done) => {
    server.close(done);
  });

describe('Testa media', () => {
    it('Deve retornar 5', async () => { 
        const data = {lista: [5, 5, 5]};
        const response = await request(app).post('/media').send(data)
        expect(response.status).toBe(200);
        expect(response.body).toBe(5)
     })
})