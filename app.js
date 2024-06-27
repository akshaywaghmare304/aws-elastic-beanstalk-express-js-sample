const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('My talent is like a dark matter ! It exists but unable to find :)'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
