const searchBar = document.getElementById("class")

function onexit(){
    if(searchBar.value==''){
        searchBar.value="Enter class to search"
        searchBar.blur();
    }
}

searchBar.addEventListener("focus",()=>{
    searchBar.value=""
})

searchBar.addEventListener("blur",()=>{
    onexit();
})

searchBar.addEventListener("keypress", (event)=>{
    if (event.key=="Enter"){
        onexit();
    }
})