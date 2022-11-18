const hamburger = document.getElementById("hamburger")
const navmenu = document.getElementById("navmenu")

let clicks = () => {
    navmenu.classList.toggle("active")
}

hamburger.addEventListener("click",clicks)

document.onclick = function(clicks2){
    if(clicks2.target.id !== 'hamburger' && clicks2.target.id !== 'navmenu'){
        navmenu.classList.remove("active")
    }
}