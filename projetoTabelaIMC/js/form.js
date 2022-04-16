var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault(); // segura o evento padrão

  //armazenar valores do mundo HTML no mundo javascript
  //extraindo informações do paciente do form
  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);
  console.log(paciente);

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
  imcTd.textContent = calculoIMC(peso, altura);

  //adicionar filhos no elemento pai - coloque como filho
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculoIMC(form.peso.value, form.altura.value)
  };
  return paciente;
}
