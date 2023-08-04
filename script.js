const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
e.preventDefault();
console.log("previnido")
setResultado("ola mundo")
})

function setResultado (msg){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = msg;
}