const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send('<h1>Hello, World.</h1>');
});

const envelopes = [
    {
        id: 1,
        name: mortgage,
        monthlyAllocation: 0,
        allocationRemaining: 0,
    },
    {
        id: 2,
        name: gas,
        monthlyAllocation: 0,
        allocationRemaining: 0,
    },
    {
        id: 3,
        name: food,
        monthlyAllocation: 0,
        allocationRemaining: 0,
    }
];

const nextEnvelopeId = 3

app.get('/envelopes', (req, res, next) => {
    res.send(envelopes);
});

app.post('/envelopes', (req, res, next) => {
    const newEnvelope = req.body;
    if (!newEnvelope.name || !newEnvelope.monthlyAllocation) {
        res.status(400).send('Please include a name and monthly allocation.')
    } else {
        newEnvelope.id = nextEnvelopeId++;
        newEnvelope.allocationRemaining = newEnvelope.monthlyAllocation;
        envelopes.push(newEnvelope);
        res.send(newEnvelope);
    }
});

app.listen(3000, () => {
    console.log("Server is listening");
});

