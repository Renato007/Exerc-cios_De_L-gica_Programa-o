export class Conta {
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
            }
            sacar(valor) {
                taxa = 1.1 * valor; // como lidar com genero conta sendo que conta corrente e conta de poupança tem certas particularidades no "sacar"
                if (this._saldo >= valor) {
                  this._saldo -= valor;
                  return valor;
                }
              }
              depositar(valor) {
                if (valor <= 100) return;
                this._saldo += valor;
              }
              transferir(valor, conta) {
                const valorSacado = this.sacar(valor);
                conta.depositar(valorSacado);
              }
}