import { Gerente } from "./funcionario/gerente.js";
import { Diretor } from "./funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Renato", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente ("Gustavo", 5000, 11122233312);
gerente.cadastrarSenha("11111");

const estaLogado = SistemaAutenticacao.login(gerente,"11111");
console.log(estaLogado)
