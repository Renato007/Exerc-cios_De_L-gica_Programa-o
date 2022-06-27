export class ContaCorrente {
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
  