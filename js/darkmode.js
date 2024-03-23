const darkBtn = document.getElementById("dark-btn")
const darkBtnImg = document.getElementById("moonBtnImg")
const darkmodeText =document.getElementById("darkmodetext")
const logo = document.getElementById("class-finder-logo")
const logoTop =document.getElementById("top-logo")
// const resultSection=document.getElementById("result")

let DARKMODE_FLAG = false

function darkmodeConfig(){

    if(!DARKMODE_FLAG){
        DARKMODE_FLAG = true
        document.body.style.backgroundColor="#212121"
        darkBtnImg.name ="sunny"
        darkmodeText.innerText="Light"
        try{
            logoTop.src="img/LOGO6.png"
            logo.src="img/LOGO_DARK.png"
            resultSection.style.backgroundImage="url('img/NightGEHU.jpeg')";
        }
        catch (TypeError){}
    }
    else{
        DARKMODE_FLAG = false
        document.body.style.backgroundColor="lightgrey"
        darkBtnImg.name = "moon-outline"
        darkmodeText.innerText="Dark"
        try{
            logoTop.src="img/LOGO-2.png"
            logo.src="img/mainLogo.png"
            resultSection.style.backgroundImage="url('img/GEHU-bg-filter.png')"
        }
        catch(TypeError){}
        }
}

darkBtn.addEventListener("click", darkmodeConfig)