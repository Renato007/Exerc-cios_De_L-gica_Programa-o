import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Renato";
cliente1.cpf = 11122233304;

const cliente2 = new Cliente();
cliente2.nome = "Daiane";
cliente2.cpf = 88855577703;

const contaCorrenteRenato = new ContaCorrente();
contaCorrenteRenato.agencia = 1001;
contaCorrenteRenato.cliente = cliente1;
contaCorrenteRenato.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente =cliente2;
conta2.agencia = 102;

contaCorrenteRenato.transferir(200, conta2);

console.log(conta2);
console.log(contaCorrenteRenato);
