var pass = document.querySelector("#input-pass");
var checkBox = document.querySelector("#check-box");

checkBox.addEventListener("click", () => {
    if(pass.type === "password"){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
})
