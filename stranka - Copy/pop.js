const pop_up = document.querySelector(".pop_up")
const pop = document.querySelector(".pop_closer")

// load pop delete overflow
if(screen.height <= pop_up.clientHeight) {
   pop.parentElement.style.display = "none" 
}

//pop delete
pop.addEventListener("click", () => {
   pop.parentElement.style.display = "none" 
})

// resize pop delete overflow
 window.addEventListener("resize", () => {
   if(screen.height <= pop_up.clientHeight) {
    pop.parentElement.style.display = "none" 
 }

 })


