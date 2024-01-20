const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const transformer = require('./routes/transformer')
const port = 5000;

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Hello World!');
});

app.use('/api/v1',transformer)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
