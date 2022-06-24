const idadeComprador = 18;
const estaAcompanhada = false;
const destino = "Curitiba";
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let temPassagemComprada = false;

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

let contador = 0;
console.log(listaDeDestinos.length);

let destinoExiste = false;

while (contador < listaDeDestinos.length) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador++;
}
console.log("Destino Existe", destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Não foi possivel realizar a viagem. Consulte com nossa equipe");
}

/* for(let cont = 0;cont < listaDeDestinos.length; cont ++) {
    if (listaDeDestinos[contador] == destino) {
      destinoExiste = true;
      break;
    }
  } */
