var Icon = document.querySelector(".icon")
var Navber = document.querySelector(".navber")



Icon.onclick = function(){
    Navber.classList.toggle(".small-navber")
    Navber.style.display = "block";
    this.style.display = "none";
    Icon.style.display = "block";
}
Icon.onclick = function(){
    Navber.style.display = "block"
}


