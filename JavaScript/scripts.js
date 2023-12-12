const form = document.querySelector("form");
const nome = document.querySelector("#nome-completo");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const checkbox = document.querySelector("#checkbox");
const botaoInscreverSe = document.querySelector(".botao-inscrever-se");

console.log(nome, email, telefone, checkbox, botaoInscreverSe);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nome.value === "") {
    alert("Insira o seu nome completo!");
    return;
  }

  if (email.value === "") {
    alert("Insira o seu e-mail!");
    return;
  }

  if (telefone.value === "") {
    alert("Insira o seu telefone!");
    return;
  }

  if (checkbox.checked == false) {
    alert("Por favor, aceite os termos para continuar!");
    return;
  }

  window.location.href = "listagem.html";

  const dadosObjeto = {
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
  };

  // Objeto para JSON
  const dadosJSON = JSON.stringify(dadosObjeto);

  // Dados para o LocalStorage
  localStorage.setItem("dadosObjeto", dadosJSON);
});
