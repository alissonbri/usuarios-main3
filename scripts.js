const btn = document.querySelector("#botao")
btn.addEventListener("click", function (event) {
  event.preventDefault()

  const nome = document.querySelector("#nome").value
  const idade = document.querySelector("#idade").value
  const telefone = document.querySelector("#telefone").value
  const estado = document.querySelector("#estado").value

  console.table([nome, idade, telefone, estado])
  if (nome == 0 || idade == 0 || telefone == 0 || estado == 0) {
    alert("Falta informações, verifique")
  } else {
    alert("Cadastrado! MICROLINS AGRADECE :)")
  }
})
