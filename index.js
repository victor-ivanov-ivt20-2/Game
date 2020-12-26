const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/static',
express.static('static'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/start.html');
})

app.get('/main_menu', function(req, res) {
  res.sendFile(__dirname + '/Main_menu.html');
})

app.get('/equipment', function(req, res) {
  res.sendFile(__dirname + '/equipment.html');
})

app.get('/shop_menu', function(req, res) {
  res.sendFile(__dirname + '/Shop_menu.html');
})

app.get('/fight', function(req, res) {
  res.sendFile(__dirname + '/fight.html');
})

app.get('/map', function(req, res) {
  res.sendFile(__dirname + '/map.html');
})

app.get('/lowfight', function(req, res) {
  res.sendFile(__dirname + '/lowfight.html');
})

app.listen(PORT, () => {
  console.log("Игра запущена")
});
