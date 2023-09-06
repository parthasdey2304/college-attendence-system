const express = require('express');
const path = require('path');
const port = 5500;
const app = express();

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/admin/dashboard', (request, response) => {
    response.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.use('/', express.static(path.join(__dirname, 'index.html')))

app.listen(port, () => {
    console.log("[INFO]Express App running on https://localhost:5500");
});