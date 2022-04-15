var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista "

var pacientes = document.querySelectorAll(".paciente");// seleciona todos da classe em uma lis

console.log(pacientes)
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];// solução

    var tdPeso = paciente.querySelector(".info-peso");

    var peso = parseFloat(tdPeso.textContent);

    var tdAltura = paciente.querySelector(".info-altura")

    var altura = parseFloat(tdAltura.textContent);

    var td_IMC = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValido = true;


    if (peso <= 0 || peso >= 1000) {
        console.log("Peso invalido");
        pesoValido = false;
        td_IMC.textContent = "Peso invalido"
        paciente.classList.add("paciente-invalido");
    }
    
    if (altura <= 0 || altura >= 3) {
        console.log("Altura invalido");
        alturaValido = false;
        td_IMC.textContent = "Altura invalido"
        paciente.classList.add("paciente-invalido"); // propriedade do DOM que permite adicionar um style.

    }

    if (alturaValido && pesoValido) {
        var calculoIMC = peso / (altura * altura);

        td_IMC.textContent = calculoIMC.toFixed(2);//limita a casa decimais
    }
}
var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(event){
 event.preventDefault();// segura o evento padrão

 //armazenar valores do mundo HTML no mundo javascript
 //atributos name e value.
 var form = document.querySelector("#form-adiciona");

var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value;
//

// criar uma linha de paciente
var pacienteTr = document.createElement("tr");

//criando os dados
var nomeTd = document.createElement("td");
var alturaTd = document.createElement("td");
var pesoTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");


//atribuindo o dado armazenado atraves do imput para o conteudo de texto da tag dado de tabela.
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;

//adicionar filhos no elemento pai - coloque como filho
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr)
})
