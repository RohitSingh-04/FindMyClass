import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const searchBar = document.getElementById("input-txt")
const darkBtn = document.getElementById("dark-btn")
let moon = document.getElementById("moon-icon")
const logo = document.getElementById("class-finder-logo")
const logoTop =document.getElementById("top-logo")
const searchbtn = document.getElementById("search-btn")
const FloorElement=document.getElementById("floor")
const classNameElement=document.getElementById("className")
const blockElement=document.getElementById("block")
const blockImage=document.getElementById("Block-Image")
const resultSection=document.getElementById("result")

const cred = {
    url:"https://agomwuylpfnaszvybavj.supabase.co",
    key:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnb213dXlscGZuYXN6dnliYXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MTE4NTgsImV4cCI6MjAyNTM4Nzg1OH0.m1V8gwMXysoKafHHfWwAlr4n_7VQIgiY0bOxk6UsTX4"
}

const supabase = createClient(cred.url, cred.key)

let flag = 1

async function fetchCustom(query) {
    const { data, error } = await supabase
    .from('Classes')
    .select().eq("Class_Name", `${query}`);

    return data;
}

function onexit(){
    if(searchBar.value==''){
        searchBar.value="Enter class to search"
        searchBar.blur();
    }
}

function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

function querynRedirect(){
    if (searchBar.value == '' || searchBar.value == 'Enter class to search')
    {
        return
    }
    else
    {
        let toSearch = searchBar.value
        let enhancedSearch =''

        for (let characters of toSearch){
            if (isAlphaNumeric(characters)){
                if (characters != '0'){
                    enhancedSearch+=characters.toUpperCase();
                }
            }
        }
        
        let responce = fetchCustom(enhancedSearch)

        responce.then(x=>{
            if (x.length == 0){
                blockElement.innerHTML="Not Found!"
                FloorElement.innerHTML = "Please Check the Spelling."
                classNameElement.innerHTML=searchBar.value
                blockImage.src=`/img/NotFound.png`
            }
            blockElement.innerHTML=x[0].Block
            FloorElement.innerHTML=x[0].Floor
            classNameElement.innerHTML=searchBar.value
            // blockImage.src=`/img/${x[0].Block}.jpg`
            blockImage.src=`/img/Acadmic.png`
            blockImage.style="right: 80px;top: 58px"
        })

        window.location.href = "#result"

    }
}

searchBar.addEventListener("focus",()=>{
    if(searchBar.value=="Enter class to search"){
    searchBar.value=""
    }
})

searchBar.addEventListener("blur", onexit)

searchBar.addEventListener("keypress", (event)=>{
    if (event.key=="Enter"){
        onexit();
        querynRedirect();
    }
})
darkBtn.addEventListener("click",()=>{
    if(flag==1){
        document.body.style.backgroundColor="#212121"
        logo.src="/img/LOGO_DARK.png"
        logoTop.src="/img/LOGO6.png"
        moon.style.color="#5e17eb"
        resultSection.style.backgroundImage="url('/img/NightGEHU.jpeg')"
        flag = 0
    }
    else{
        document.body.style.backgroundColor="lightgrey"
        logo.src="/img/mainLogo.png"
        logoTop.src="/img/LOGO-2.png"
        moon.style.color="#5e17eb"
        flag = 1
        resultSection.style.backgroundImage="url('/img/GEHU-bg-filter.png')"
        }
})

searchbtn.addEventListener("click", querynRedirect)
