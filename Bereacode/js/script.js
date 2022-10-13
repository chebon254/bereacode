//Create A Responsive Menu Hide Show Side Menu
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu = document.querySelector(".links");
// Onscroll Change Nav Bar Background
window.onscroll = ()=>{
    this.scrollY > 20 ? header.classList.add("sticky") : header.classList.remove("sticky");
}

// Onclick For Menu Bar
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

// Onclick For Cancel Menu 
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}



/* ===  Loading Screen === */
// var loadTimer;

// function loadScreen() {
//   loadTimer = setTimeout(showPage, 1200);
// }

// function showPage() {
//   document.getElementById("loading").style.display = "none";
//   document.getElementById("load").style.display = "block";
// }

/* ===  Loading Screen === */

/* == TAB == */
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "showCol");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "showCol");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementsByClassName("myBtnContainer");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
/* == TAB == */


// Button When Clicked leads to another page
function mySites() {
  location.replace("contact.html")
}
