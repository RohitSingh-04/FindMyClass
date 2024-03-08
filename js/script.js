const searchBar = document.getElementById("input-txt")
const darkBtn = document.getElementById("dark-btn")
let moon = document.getElementById("moon-icon")
const logo = document.getElementById("class-finder-logo")
const logoTop =document.getElementById("top-logo")
let flag = 1
function onexit(){
    if(searchBar.value==''){
        searchBar.value="Enter class to search"
        searchBar.blur();
    }
}

searchBar.addEventListener("focus",()=>{
    if(searchBar.value=="Enter class to search"){
    searchBar.value=""
    }
})

searchBar.addEventListener("blur",()=>{
    onexit();
})

searchBar.addEventListener("keypress", (event)=>{
    if (event.key=="Enter"){
        onexit();
    }
})
darkBtn.addEventListener("click",()=>{
    if(flag==1){
    document.body.style.backgroundColor="#212121"
    logo.src="/img/LOGO_DARK.png"
    logoTop.src="/img/LOGO6.png"
    moon.style.color="#5e17eb"
    
    flag = 0
    }
    else{
        document.body.style.backgroundColor="lightgrey"
        logo.src="/img/mainLogo.png"
        logoTop.src="/img/LOGO-2.png"
        moon.style.color="#5e17eb"
        flag = 1
    }
})
