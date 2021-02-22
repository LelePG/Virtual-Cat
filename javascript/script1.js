let nomeDoGato;

document.getElementById("btn-iniciar").addEventListener("click", function () {
  nomeDoGato = document.getElementById("nome-gato");
  //console.log(nomeDoGato);
  localStorage.setItem("nomeGato", nomeDoGato.value);
  nomeDoGato.value = " ";
});
