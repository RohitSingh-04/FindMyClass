const a = document.getElementById("class")

a.addEventListener("focus",()=>{
    a.value=""
})
a.addEventListener("blur",()=>{
    if(a.value==''){
        a.value="Enter class to search"
    }
})
