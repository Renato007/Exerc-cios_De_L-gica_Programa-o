/* objtetivo
pegar cada digito na entrada de texto.
esconder quem não é igual ao texto de entrada

*/
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    //console.log(this.value); mostrar a capituração dos caracteres digitados no campo texto
  var pacientes = document.querySelectorAll(".paciente");
  for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome")
      var nome = tdNome.textContent;
      console.log(nome); //mostra a lista dos nomes no for
  }
});
