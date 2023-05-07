import { createRequire } from 'node:module';
import { rps, rpsls } from './rpsls.js';
import minimist from 'minimist';

const require = createRequire(import.meta.url);
const args = minimist(process.argv.slice(2));
const path = require('path');
const express = require('express');
const __dirname = path.resolve();
const app = express();
const port = args["port"] || 8080

app.get('/', function(req, res) {
    res.status(200).send("200 OK");
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/app', function(req, res) {
    res.status(200).send("200 OK");
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get("/app/", (req, res) => {
    res.status(200).send("200 OK");
});
app.get("/app/rps", (req, res) => {
    res.sendFile(path.join(__dirname, '/rps.html'));
});
app.get("/app/rpsls", (req, res) => {
    res.sendFile(path.join(__dirname, '/rpsls.html'));
});
app.get("/app/rules", (req, res) => {
    res.sendFile(path.join(__dirname, '/rules.html'));
});

app.get("/app/rps_random", (req, res) => {
    res.sendFile(path.join(__dirname, '/rps_random_draw.html'));
});
app.get("/app/rps_random_result", (req, res) => {
    res.send(JSON.stringify(rps()));
});
app.get("/app/rps_opp", (req, res) => {
    res.sendFile(path.join(__dirname, '/rps_opp.html'));
});


app.get("/app/rps_rock", (req, res) => {
    res.sendFile(path.join(__dirname, '/rps_rock.html'));
});
app.get("/app/rps_rock_result", (req, res) => {
    res.send(JSON.stringify(rps("rock")));
});


app.get("/app/rps_paper", (req, res) => {
    res.sendFile(path.join(__dirname, '/rps_paper.html'));
});
app.get("/app/rps_paper_result", (req, res) => {
    res.send(JSON.stringify(rps("paper")));
});


app.get("/app/rps_scissors", (req, res) => {
    res.sendFile(path.join(__dirname, '/rps_scissors.html'));
});
app.get("/app/rps_scissors_result", (req, res) => {
    res.send(JSON.stringify(rps("scissors")));
});


app.get("/app/rpsls_random", (req, res) => {
    res.sendFile(path.join(__dirname, '/rpsls_random_draw.html'));
});
app.get("/app/rpsls_random_result", (req, res) => {
    res.send(JSON.stringify(rpsls()));
});
app.get("/app/rpsls_opp", (req, res) => {
    res.sendFile(path.join(__dirname, '/rpsls_opp.html'));
});


app.get("/app/rpsls_rock", (req, res) => {
    res.sendFile(path.join(__dirname, '/rpsls_rock.html'));
});
app.get("/app/rpsls_rock_result", (req, res) => {
    res.send(JSON.stringify(rpsls("rock")));
});


app.get("/app/rpsls_paper", (req, res) => {
    res.sendFile(path.join(__dirname, '/rpsls_paper.html'));
});
app.get("/app/rpsls_paper_result", (req, res) => {
    res.send(JSON.stringify(rpsls("paper")));
});


app.get("/app/rpsls_scissors", (req, res) => {
    res.sendFile(path.join(__dirname, '/rpsls_scissors.html'));
});
app.get("/app/rpsls_scissors_result", (req, res) => {
    res.send(JSON.stringify(rpsls("scissors")));
});


app.get("/app/rpsls_lizard", (req, res) => {
    res.sendFile(path.join(__dirname, '/rpsls_lizard.html'));
});
app.get("/app/rpsls_lizard_result", (req, res) => {
    res.send(JSON.stringify(rpsls("lizard")));
});


app.get("/app/rpsls_spock", (req, res) => {
    res.sendFile(path.join(__dirname, '/rpsls_spock.html'));
});
app.get("/app/rpsls_spock_result", (req, res) => {
    res.send(JSON.stringify(rpsls("spock")));
});


app.listen(port);