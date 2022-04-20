var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista ";

var pacientes = document.querySelectorAll(".paciente"); // seleciona todos da classe em uma lis

console.log(pacientes);
for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]; // solução

  var tdPeso = paciente.querySelector(".info-peso");

  var peso = parseFloat(tdPeso.textContent);

  var tdAltura = paciente.querySelector(".info-altura");

  var altura = parseFloat(tdAltura.textContent);

  var td_IMC = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso); // true ou false
  var alturaEhValido = validaAltura(altura);

  if (!pesoEhValido) {
    console.log("Peso invalido");
    pesoValido = false;
    td_IMC.textContent = "Peso invalido";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValido) {
    console.log("Altura invalido");
    alturaValido = false;
    td_IMC.textContent = "Altura invalido";
    paciente.classList.add("paciente-invalido"); // propriedade do DOM que permite adicionar um style.
  }

  if (alturaEhValido && pesoEhValido) {
    var imc = calculoIMC(peso, altura);

    td_IMC.textContent = imc; //limita a casa decimais
  }
}
function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}
function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculoIMC(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
