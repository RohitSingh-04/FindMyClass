const btn = document.getElementById("Submit")

function fetchData(){
    const name=document.getElementById("classname")
    const floor=document.getElementById("floor")
    const block=document.getElementById("block")

    return {name:name.value, floor:floor.value, block:block.value}

}

btn.addEventListener("click", ()=>{
    let a = fetchData()
    if (a.name == "" || a.floor == "" || a.block==""){
        return ;
    }
    // if nothing is missing than
    //logic for adding data to db
})

