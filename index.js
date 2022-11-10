console.log("why are you here?");
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
const PORT = 8000;
const button = document.getElementById("btn");
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

app.listen(PORT,() => console.log("listening on port " + PORT));
button.addEventListener("click", ()=>{
  var search_input = document.getElementById("search_input").value;

  while (!search_input == "") {

    if (search_input.length < 3) {
      break;
    }
  alert(search_input);
  }
  if (!search_input != "")

  alert("Empty field.");

})

function myFunction() {
  if (window.pageYOffset > sticky) {

    header.classList.add("sticky");
  } else {

    header.classList.remove("sticky");
  }
}