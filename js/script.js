const a = document.getElementById("class")

function onexit(){
    if(a.value==''){
        a.value="Enter class to search"
        a.blur();
    }
}

a.addEventListener("focus",()=>{
    a.value=""
})

a.addEventListener("blur",()=>{
    onexit();
})

a.addEventListener("keypress", (event)=>{
    if (event.key=="Enter"){
        onexit();
    }
})