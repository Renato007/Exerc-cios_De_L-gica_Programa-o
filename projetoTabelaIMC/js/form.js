var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault(); // segura o evento padrão

  //armazenar valores do mundo HTML no mundo javascript
  var form = document.querySelector("#form-adiciona");

  //extraindo informações do paciente do form
  var paciente = obtemPacienteDoFormulario(form);

  //impedir que sejá inserido paciente invalido
  if (!validaPaciente(paciente)) {
    return; // força a saida do else sem, precisar entrar na tabela.
  }

  // criar a tr a td do paciente
  var pacienteTr = montarTr(paciente);

  var erros = validaPaciente(paciente);
  console.log(erros)

  // verificar se houve um erro true diferente que  0 && valor positivo
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  //adicionando o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
  
  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erros");
  mensagensErro.innerHTML = "";
});

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erros");
  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li =document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

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
function validaPaciente(paciente) {

  var erros = []; 

  if(paciente.nome.length == 0){
    erros.push("nome não pode ser em branco")
  }

  if (!validaPeso(paciente.peso)) erros.push("Peso e inválido");

  if (!validaAltura(paciente.altura)) erros.push("Altura é inválida!");

  if (paciente.gordura.length == 0){
    erros.push("Agordura não pode ser em branco");
  }

  if (paciente.peso.length == 0){
    erros.push("O peso não pode ser em branco ")
  }

  if (paciente.altura.length == 0){
    erros.push("O altura não pode ser em branco ")
  }
  return erros;
}
