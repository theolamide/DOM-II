// Your code goes here
//MOUSEOVER, MOUSEENTER, AND MOUSELEAVE
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

//KEYDOWN

const input = document.querySelector('input');
input.addEventListener('keydown', function (){
    alert('The search feature is not active yet')
})

//DRAG AND DROP

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


//DOUBLE CLICK

const clickThrough = document.querySelector('.intro img');
clickThrough.addEventListener("dblclick", () => {
  clickThrough.src= "img/DesertVan.jpg"   
})

//FOCUS
const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'yellow';    
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);

//RESET
form.addEventListener('reset',() =>{

});

//RESIZE
const chgHomeBack = document.querySelector(".intro p");
console.log(chgHomeBack);
window.addEventListener('resize',() =>{
    console.log(chgHomeBack.clientWidth);
    if (chgHomeBack.clientWidth < 800){
        chgHomeBack.style.background = "red";
    }
})

//SCROLL
window.addEventListener('scroll', () => {
    document.body.style.backgroundColor="blue";
  })


  //Stop Propagation

  const contentGroup = document.querySelector(".home");
contentGroup.addEventListener('click', () => {
  contentGroup.style.backgroundColor="orange";
});
const card = document.querySelector(".text-content");
console.log(card);
card.addEventListener('click', (event) => {
  card.style.backgroundColor="green";
  event.stopPropagation();
})

//Stop Default

const stopDef = document.querySelector(".nav-link");

stopDef.addEventListener("click", (event) => {
  console.log("stopped link");
  
  event.preventDefault();
})

