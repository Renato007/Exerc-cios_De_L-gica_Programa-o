import { Gerente } from "./funcionario/gerente.js";
import { Diretor } from "./funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";

const diretor = new Diretor("Renato", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente ("Gustavo", 5000, 11122233312);
gerente.cadastrarSenha("11111");

const cliente = new Cliente("Duane", 76543218900, "456")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"11111");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente,"456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)

