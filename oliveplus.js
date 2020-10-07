const express = require("express");
const app = express();



app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', function(req, res){
  res.render("home");
});

app.get('/contact.ejs', function(req, res){
  res.render("contact");
});

app.get('/pharmacy.ejs', function(req, res){
  res.render("pharmacy");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server localhost:3000");
});
