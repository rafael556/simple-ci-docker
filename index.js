const express = require('express')
const media = require('./service')

const app = express()

app.use(express.json());

app.get('/health-check', () => {
    res.status(200).send('server is on');
})

app.post('/media', (req, res) => {
    console.log(req.body);
    return res.status(200).json(media(req.body.lista))
})


app.listen('9001', () => {
    console.log('server open on http://localhost:9001');
})

module.exports = app;