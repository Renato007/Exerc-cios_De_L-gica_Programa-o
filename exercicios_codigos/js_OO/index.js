import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Renato", 11122233304);

const contaCorrenteRenato = new ContaCorrente( cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
const conta = new Conta(0, cliente1, 1001);

console.log(conta);