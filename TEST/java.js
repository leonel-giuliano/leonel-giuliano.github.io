const input = document.querySelector(".input");
const resultado = document.createElement("DIV");
resultado.classList.add("resultado");

input.addEventListener("keydown",(e)=>{
    console.log(e);
    if (input.value.includes(65)) resultado.innerHTML = "xd";
})