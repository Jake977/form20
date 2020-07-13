const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();
const pth = path.parse(__dirname);

let users = [];

const addNewUser = (newUser, users) => {
    const newUserEmail = newUser.email;
    const findEmail = users.filter(({ email }) => (email === newUserEmail));
    if (!findEmail.length) {
        users.push(newUser);
        return { "isAdded": true };
    }
    return { "isAdded": false };
};

app.use(express.static('build'));

const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
    const filePath = path.join(pth.dir, 'build', 'index.html');
    res.send(filePath);
});

app.get('/users/', (req, res) => {
     const filePath = path.join(pth.dir, 'build', 'index.html');
     res.sendFile(filePath);
});

app.get('/getUsers/', (req, res) => {
    res.json(users);
});

app.get('/sign-up/', (req, res) => {
    const filePath = path.join(pth.dir, 'build', 'index.html');
    res.sendFile(filePath);
});

app.post('/sign-up/', jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    res.json(addNewUser(req.body, users));
});

app.listen(PORT, () => {
    console.log(`Started at port ${PORT}`);
});
