// Your code goes here

let headerAction = document.querySelector(".main-navigation");
    headerAction.addEventListener("mouseenter",()=>{
        headerAction.style.backgroundColor = "yellow";
        headerAction.style.transition = "all 2s";
    })
    headerAction.addEventListener("mouseleave",()=>{
        headerAction.style.backgroundColor = "white";
        headerAction.style.transition = "all 1s";
    })

let navLink = document.getElementsByTagName("a");
console.log(navLink);   
    
Array.from(navLink).forEach(item =>{
    item.addEventListener("mouseover",()=>{
        item.style.transform = "scale(1.5)"
        item.style.transition = "1s"

        setTimeout(function(){
            item.style.transform  = "";
        }, 1500)
    })
})

//DRAG AND DROP

const input = document.querySelector('input');
const errorAlert = document.getElementById('errorAlert');

input.addEventListener('keydown', logKey);

function logKey(e){
    errorAlert.textContent = "The search feature is not active yet"
}

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "yellow";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);
