import { DataUser } from "./DataUser.js";

const dataUser = new DataUser();


document.getElementById("submit").addEventListener("click", cadastrarUsuario);
document.getElementById("botaoEnviar").addEventListener("click", exibirMensagem);
function cadastrarUsuario(e) {
  e.preventDefault()
  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("password").value;

  if (nome == "" || senha == "") {
    alert("Preencha todos os campos");
  } else {
    dataUser.login(nome, senha);
    alert("Bem vindo ao portfólio!");
  }
}


