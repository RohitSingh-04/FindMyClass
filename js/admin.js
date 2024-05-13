const username=document.getElementById('Username')
const password=document.getElementById('password')


function authenticate(){
    if (username.value == ""){
        alert("enter username! please enter requires feild!");
        username.focus();
    }
    else if(password.value == ""){
        alert("enter password! please enter requires feild!");
        password.focus();
    }
    else{
        alert ('Auhtenticating...');
    }
}

function authenticate(event){
    if (event.key == "Enter") {
        authenticate();
    }
}