import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Renato", 11122233304);

const contaCorrenteRenato = new Conta(0, cliente1, 1001);
contaCorrenteRenato.depositar(500);
contaCorrenteRenato.sacar(100)

const contaPoupanca = new Conta(50, cliente1, 1001)
console.log(contaPoupanca);
console.log(contaCorrenteRenato);


