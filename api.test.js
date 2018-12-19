const fetch = require('node-fetch');

url = 'https://atipi-187569-b-dec2018.herokuapp.com'

test('GET on /play with valid player', () => {
    return fetch(url + '/play?player1=2').then(res => {
        expect(res.status).toBe(200);
    });
});

test('GET on /play with invalid player', () => {
    return fetch(url + '/play?player1=7').then(res => {
        expect(res.status).toBe(400);
    });
});