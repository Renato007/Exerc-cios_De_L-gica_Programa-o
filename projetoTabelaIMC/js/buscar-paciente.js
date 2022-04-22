var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
  console.log("buscando pacientes...");
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  /* quando estiver carregado (evento) faça(função)   */
  xhr.addEventListener("load", function () {
    var resposta = xhr.responseText;
    var pacientes = JSON.parse(resposta); //"le todo o texto e entrega um objeto javascript "

    pacientes.forEach(function (paciente){
        adicionaPacienteNaTabela(paciente);

    });

  });
  xhr.send(); //enviar a requisição para o browser
});


//O objeto XMLHttpRequest é quem é responsável por fazer requisições HTTP assíncronas com Javascript

/* Dado que temos um XMLHttpRequest, precisamos configurar nossa requisição para dizer para qual servidor queremos enviá-la e também qual método HTTP devemos usar.
Fazemos isto através do método .open() */
