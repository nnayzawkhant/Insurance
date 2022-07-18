var Icon = document.querySelector(".icon")
var Navber = document.querySelector(".navber")



Icon.onclick = function(){
    if(Navber.style.display == "block") {
        Navber.style.display = "none"
        this.style.display = "block"
    }else{
        Navber.style.display = "block"
        
    }
}



