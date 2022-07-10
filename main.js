let links = document.querySelectorAll("header nav a")




  for (let i = 0; i < 6; i++) {
      links[i].addEventListener("click", function() {
          for (let q = 0; q < 6; q++) {
            links[q].classList.remove("active")

        }
        this.classList.add("active");
      }); 
  }

  // var mediaScreen = window.matchMedia("(max-width: 992px)")
  // console.log(mediaScreen)
let open = document.getElementById("open");
let close = document.getElementById("close");
let menu = document.getElementById("mobile-menu");

  
  
open.addEventListener("click", function() {
  open.classList.add("display-none");
  open.classList.remove("display-block");
  close.classList.add("display-block");
menu.classList.remove("display-none")
menu.classList.add("display-block")
menu.style.animation="open"
menu.style.animationDuration = ".3s"
menu.style.animationFillMode = "forwards"

}); 


close.addEventListener("click", function() {
  open.classList.remove("display-none");
  open.classList.add("display-block");
  close.classList.add("display-none");
  close.classList.remove("display-block");
  menu.classList.add("display-none")
  menu.classList.remove("display-block")

  }); 
  
