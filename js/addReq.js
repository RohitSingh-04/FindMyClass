import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const cred = {
    url: "https://agomwuylpfnaszvybavj.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnb213dXlscGZuYXN6dnliYXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MTE4NTgsImV4cCI6MjAyNTM4Nzg1OH0.m1V8gwMXysoKafHHfWwAlr4n_7VQIgiY0bOxk6UsTX4"
}

const supabase = createClient(cred.url, cred.key)

async function write(data){
    const { error } = await supabase
    .from('requests')
    .insert(data);

    return error;
}

const btn = document.getElementById("Submit")

function fetchData(){
    const name=document.getElementById("classname")
    const floor=document.getElementById("floor")
    const block=document.getElementById("block")

    return {Class_Name:name.value, Floor:floor.value, Block:block.value}
}

btn.addEventListener("click", ()=>{
    let a = fetchData()
    if (a.name == "" || a.floor == "" || a.block==""){
        console.log('notdone')
        return ;
    }
    console.log('done1')
    write(a);

})

