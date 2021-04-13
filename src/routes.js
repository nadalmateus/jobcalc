const express = require('express');

const routes = express.Router();

const profile = {
    name: "Matt",
    avatar: "https://avatars.githubusercontent.com/u/33405053?v=4"
}


const views = __dirname + "/views/"

routes.get('/', (req, res) => res.render(views + "index"));
routes.get('/job', (req, res) => res.render(views + "job"));
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"));
routes.get('/profile', (req, res) => res.render(views + "profile"));


module.exports = routes;