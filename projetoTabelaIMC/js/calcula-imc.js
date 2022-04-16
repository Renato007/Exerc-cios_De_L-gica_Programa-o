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

