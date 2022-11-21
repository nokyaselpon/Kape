const hamburger = document.getElementById("hamburger")
const navmenu = document.getElementById("navmenu")
const btnsearch = document.getElementById("btn-search")
const searchbar = document.getElementById("search-bar")
const inputsearch = document.getElementById("input-search")

hamburger.addEventListener("click", (gg) =>{

    if(gg.target.id === 'hamburger'){
    navmenu.classList.toggle("active")
    }
})

btnsearch.addEventListener("click", () => {
    searchbar.classList.toggle("active")
})

document.addEventListener('click', (gg2) => {
    if(gg2.target.id !== 'hamburger' && gg2.target.id !== 'navmenu')
    {
        navmenu.classList.remove("active")
        hamburger.classList.toggle("active")
    }

    if(gg2.target.id !== 'btn-search' && gg2.target.id !== 'input-search')
    {
        searchbar.classList.remove("active")
    }
})





