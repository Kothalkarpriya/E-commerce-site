var bar = document.querySelector('.fa-bars');
var times = document.querySelector('.fa-times');
var navItem = document.querySelector('.nav-list-group');

bar.addEventListener('click',()=>{
    bar.style.display="none";
    times.style.display="block";
    navItem.style.display="block";
});
times.addEventListener('click',()=>{
    bar.style.display="block";
    times.style.display="none";
    navItem.style.display="none";
});

var pass = document.querySelector("#input-pass");
var checkBox = document.querySelector("#check-box");

checkBox.addEventListener("click", ()=>{
    if(pass.type === "password"){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
});
