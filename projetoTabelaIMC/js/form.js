var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault(); // segura o evento padrão

  //armazenar valores do mundo HTML no mundo javascript
  var form = document.querySelector("#form-adiciona");

  //extraindo informações do paciente do form
  var paciente = obtemPacienteDoFormulario(form);
  console.log(paciente);

  // criar a tr a td do paciente
  var pacienteTr = montarTr(paciente);
  
  //adicionando o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();
});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculoIMC(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montarTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //adicionar filhos no elemento pai - coloque como filho
  pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montarTd(dado, classe) {
  //criando os dados
  var td = document.createElement("td");
  //atribuindo o dado armazenado atraves do imput para o conteudo de texto da tag dado de tabela.
  td.textContent = dado;
  //atribuindo uma classe
  td.classList.add(classe);

  return td;
}
