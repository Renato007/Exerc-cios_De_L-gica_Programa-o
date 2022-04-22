var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
paciente.addEventListener("dblclick", function(){
this.remove();// quem chama a função é o objeto virgente.
})
});