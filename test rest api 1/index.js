const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json()); //middleware <- convert body to json

app.listen(
    PORT,
    () => console.log(`Server is running on http://localhost:${PORT}`)
)

app.get('/icecream',(req, res) => {
    res.status(200).send({
        icecream: '🍦',
        message: 'I love icecream'
    })
});

app.post('/icecream/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({
            message: 'Missing logo'
        })
    }

    res.send({
        icecream: `🍦 with your ${logo} and ID of ${id}`,
    })
});