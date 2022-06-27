import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Renato";
cliente1.cpf = 11122233304;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88855577703;

const contaCorrenteRenato = new ContaCorrente();
contaCorrenteRenato._saldo = 0;
contaCorrenteRenato.agencia = 1001;

contaCorrenteRenato.depositar(100);

const valorSacado = contaCorrenteRenato.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteRenato);
