const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.json({ message: "Trello Api welcome!" });
});

app.post("https://api.trello.com/1/boards/?name=name&key=APIKey&token=APIToken", (request, response) => {
    response.json({ status: response.status, statusText:  response.statusText});
});

app.get("https://api.trello.com/1/boards/id/lists?key=APIKey&token=APIToken", (request, response) => {
    response.json({ status: response.status, statusText: response.statusText });
});

app.post("https://api.trello.com/1/cards?idList=idList&key=APIKey&token=APIToken", (request, response) => {
    response.json({ status: response.status, statusText:  response.statusText});
});

app.put("https://api.trello.com/1/cards/id?key=APIKey&token=APIToken&name=name", (request, response) => {
    response.json({ status: response.status, statusText:  response.statusText});
});

app.delete("https://api.trello.com/1/cards/{id}?key=APIKey&token=APIToken", (request, response) => {
    response.json({ status: response.status, statusText:  response.statusText});
});

module.exports = app;