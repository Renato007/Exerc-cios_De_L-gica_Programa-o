export class ContaCorrente {
  agencia;
  cliente;


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
    transferir(valor, conta){
      const valorSacado = this.sacar(valor);
      conta.depositar(valorSacado);
    }

  }
  