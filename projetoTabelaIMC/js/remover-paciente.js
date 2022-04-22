var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table") // quem escuta é a tag  pai

/* this é o dono do evento.Na função, acessamos o contexto através do objeto implícito this. Ele é uma referência para o elemento do DOM que esta recebendo o evento  */
/* event (objeto) tem a propriedade de quem acionou o evento */
//console.log(event.target);// mostra quem sofreu o evento em si.
tabela.addEventListener("dblclick", function(event){

    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; //TR = paciente = remover-paciente
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        paiDoAlvo.remove();
    },500);

});
