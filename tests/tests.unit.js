const media = require(`../service`)

describe('Testa media', () => {
    it('Deve retornar 5', async () => { 
        const data= [5, 5, 5];
        expect(media(data)).toBe(5)
     })
})