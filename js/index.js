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



// item.addEventListener("mouseenter", ()=>{
//     item.style.transform = "scale(2)";
//     item.style.transition = "all 0.5s";
//   })