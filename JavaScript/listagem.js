document.addEventListener("DOMContentLoaded", function () {
    const dadosJSON = localStorage.getItem("dadosObjeto");
  
    if (dadosJSON) {

      // JSON para objeto
      const dadosDoFormulario = JSON.parse(dadosJSON);
  
      const mostraNome = document.querySelector("#nome");
      const mostraEmail = document.querySelector("#email");
      const mostraTelefone = document.querySelector("#telefone");
  
      mostraNome.textContent = "Nome: " + dadosDoFormulario.nome;
      mostraEmail.textContent = "E-mail: " + dadosDoFormulario.email;
      mostraTelefone.textContent = "Telefone: " + dadosDoFormulario.telefone;
    }
  });