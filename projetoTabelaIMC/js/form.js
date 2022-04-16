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