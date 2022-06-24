class Cliente {
  nome;
  cpf;
}
class ContaCorrente {
  agencia;
  //#saldo = 0;
  _saldo = 0;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor; //this significa deste(a)
      return valor;
    }
  }
  depositar(valor) {
    if (valor <= 0) return; // ele sai para isso comece com o que você não quer que aconteça.
    this._saldo += valor;
  }
}

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
