console.log("why are you here?");
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
const button = document.getElementById("btn");
button.addEventListener("click", ()=>{
  var search_input = document.getElementById("search_input").value;
  if (!search_input == "") {
  alert(search_input);
  }
  else
  alert("Empty field.");

})



function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}