import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Renato", 11122233304);

const contaCorrenteRenato = new ContaCorrente( cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
const contaSalario01 = new ContaSalario(cliente1);
contaSalario01.depositar(100);
contaSalario01.sacar(10);
console.log(contaSalario01);
