var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes...")
    var xhr = new XMLHttpRequest(); //responsavel por fazer requisições.

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    

    /* quando estiver carregado (evento) faça(função)   */
    xhr.addEventListener("load", function(){
console.log(xhr.responseText)
});
xhr.send(); //enviar a requisição para o browser


})