const express = require('express')
var bodyParser = require('body-parser')
const fetch = require("node-fetch")

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.json({ status: 'ok' })
});

app.get('/bimbumbam', (req, res) => {
    const numero = Math.ceil(Math.random() * 5);
    res.json({ result: numero });
});

app.get('/play', async (req, res) => {
    var player2;
    player1 = parseInt(req.query.player1);
    player2 = await fetch('https://atipi-187569-b-dec2018.herokuapp.com/bimbumbam').then(res => {
        return res.json();
    }).then(jsonresult => {
        return jsonresult.result;
    });

    if (player1 < 1 || player1 > 5) {
        res.sendStatus(400);
    } else {
        if (player2) {
            res.status(200).json({
                result: (player1 + player2) % 2,
                player2: player2
            });
        } else {
            res.status(500).json({ error: "could not retrieve bimbumbam from heroku" });
        }
    }
});


app.listen(PORT, () => console.log('Exam app listening on port ' + PORT))


