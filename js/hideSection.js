const resultSection = document.getElementById("result")
const searchDiv = document.getElementById("search-div")
const homeicon=document.getElementById("home_anchor")

let hidden = "result"
resultSection.style.display="none"

function hidealternate(){
    if (hidden == "result"){
        resultSection.style.display="flex"
        searchDiv.style.display="none"
        hidden="search"
    }

    else{
        searchDiv.style.display="flex"
        resultSection.style.display="none"
        hidden="result"
    }
}

homeicon.addEventListener("click", ()=>{

    if (searchDiv.style.display!="none")
    {
        return
    }
    
    hidealternate()})