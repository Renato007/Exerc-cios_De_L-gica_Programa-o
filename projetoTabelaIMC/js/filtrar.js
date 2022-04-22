/* objtetivo
pegar cada digito na entrada de texto.
esconder quem não é igual ao texto de entrada

*/
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  //console.log(this.value); mostrar a capituração dos caracteres digitados no campo texto
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    console.log("tem algo digitado");
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;

      /* regExp() O primeiro parâmetro é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque). */

      var expressao = new RegExp(this.value, "i");
      if(!expressao.test(nome)){
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});
