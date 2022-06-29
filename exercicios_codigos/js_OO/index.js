import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Renato", 11122233304);
const cliente2 = new Cliente("Daiane", 88855577703);

const contaCorrenteRenato = new ContaCorrente(1001, cliente1);
contaCorrenteRenato.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;

contaCorrenteRenato.transferir(valor, conta2);

console.log(contaCorrenteRenato);
console.log(conta2);

