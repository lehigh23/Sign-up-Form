const password=document.querySelector("#password");
const verification=document.querySelector("#verification");
const button=document.querySelector("button");
const message=document.querySelector(".err");

verification.addEventListener("keyup", ()=>{
    if(password.value!=="" && password.value!=verification.value){
        password.classList.remove("valid");
        verification.classList.remove("valid");
        password.classList.add("invalid");
        verification.classList.add("invalid");
        message.textContent="Passwords do not match";
    }
    else if(password.value!=="" && password.value==verification.value){
        password.classList.remove("invalid");
        verification.classList.remove("invalid");
        password.classList.add("valid");
        verification.classList.add("valid");
        message.textContent="";
    }
});

password.addEventListener("keyup", ()=>{
    if(verification.value!=="" && password.value!=verification.value){
        password.classList.remove("valid");
        verification.classList.remove("valid");
        password.classList.add("invalid");
        verification.classList.add("invalid");
        message.textContent="Passwords do not match";
    }
    else if(verification.value!=="" && password.value==verification.value){
        password.classList.remove("invalid");
        verification.classList.remove("invalid");
        password.classList.add("valid");
        verification.classList.add("valid");
        message.textContent="";
    }
});

button.addEventListener("click", function(event){
    if(password.className=="invalid")
        event.preventDefault();
});