console.log("why are you here?");
window.onscroll = function() {myFunction()};


var header =  document.getElementById("myHeader")
var sticky = header.offsetTop;

const button = document.getElementById("btn");
button.addEventListener("click", ()=>{
 search_input = document.getElementById("search_input").value;

  while (!search_input == "") {

    if (search_input.length < 3) {
      break;
    }
  alert(search_input);
  }
  if (!search_input != "")

  alert("Empty field.");

})

var globals = {
    test : header,
    test2 : button,
    test3 : search_input
};


function myFunction() {
  if (window.pageYOffset > sticky) {

    header.classList.add("sticky");
  } else {

    header.classList.remove("sticky");
  }
}
