import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const searchBar = document.getElementById("input-txt")
const darkBtn = document.getElementById("dark-btn")
let moon = document.getElementById("moon-icon")
const logo = document.getElementById("class-finder-logo")
const logoTop =document.getElementById("top-logo")
const searchbtn = document.getElementById("search-btn")

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

searchbtn.addEventListener("click", ()=>{
    if (searchBar.value == '' || searchBar.value == 'Enter class to search'){
        
    }
    else{
        let q = searchBar.value
        let n =''

        for (let i of q){
            if (isAlphaNumeric(i)){
                n+=i.toUpperCase();
            }
        }
        
        console.log(n)
        let arr = fetchCustom(n)
        console.log(arr)
        // window.location.replace("/result.html")
        // document.getElementById("text-data").style = "background-color: red;"
    }
})