import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const path = require('path');
const express = require('express');
const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 8080;
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get("/app/rps", (req, res) => {
    res.sendFile(path.join(__dirname, '/rps.html'));
});
app.get("/app/rpsls", (req, res) => {
    res.sendFile(path.join(__dirname, '/rpsls.html'));
});

app.listen(port);