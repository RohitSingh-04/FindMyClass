const nav_Search = document.getElementById("nav-search")

const searchBar = document.getElementById("input-txt")

nav_Search.addEventListener("click", ()=>{
    if (searchDiv.style.display != "none"){
        searchBar.focus();
    }
    else{
        hidealternate();
        searchBar.focus();
    }
})