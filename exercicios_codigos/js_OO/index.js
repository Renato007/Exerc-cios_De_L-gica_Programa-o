class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();


cliente1.nome = "Renato";
cliente1.cpf = 11122233304;
cliente1.agencia =1001;
cliente1.saldo = 0;
//cliente1.rg = 12342563;

cliente2.nome = "Alice";
cliente2.cpf = 88855577703;
cliente2.agencia =1002;
cliente2.saldo = 0;

console.log(cliente1,"\n", cliente2)
