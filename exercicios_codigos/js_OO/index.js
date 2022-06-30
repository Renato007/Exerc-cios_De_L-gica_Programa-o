import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Renato", 11122233304);

const contaCorrenteRenato = new ContaCorrente( cliente1, 1001);
contaCorrenteRenato.depositar(500);
contaCorrenteRenato.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
console.log(contaPoupanca);
console.log(contaCorrenteRenato);


