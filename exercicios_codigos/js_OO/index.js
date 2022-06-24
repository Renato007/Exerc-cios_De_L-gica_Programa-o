class Cliente{
    nome;
    cpf;
}
class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor; //this significa deste(a)
            console.log("valor retirado ", valor);
        }else{
            console.log("Saldo ", this.saldo);
            console.log("Saldo insuficiente para o saque");
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Renato";
cliente1.cpf = 11122233304;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88855577703;

const contaCorrenteRenato = new ContaCorrente();
contaCorrenteRenato.saldo = 0;
contaCorrenteRenato.agencia = 1001;
console.log(contaCorrenteRenato.saldo)
contaCorrenteRenato.saldo = 400;
console.log(contaCorrenteRenato.saldo);
contaCorrenteRenato.sacar(400);


console.log("Saldo atual", contaCorrenteRenato.saldo);
