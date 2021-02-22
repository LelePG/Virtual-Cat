let nomeDoGato = localStorage.getItem("nomeGato");

let titulo = document.querySelector(".titulo");
titulo.innerText += ` ${nomeDoGato}!`; //Atualização do título

const caixaTexto = document.getElementById("text"); //Div onde o chat é armazenado

const voceDiz = function (texto) {
  caixaTexto.innerHTML += `<p class = "mensagem-usuario">Você: ${texto}</p>`;
};

const gatoDiz = function (texto) {
  caixaTexto.innerHTML += `<p class = "mensagem-gato">${nomeDoGato}: ${texto}</p>`;
};
//função de falar com o gato
document.getElementById("conversar").addEventListener("click", function () {
  let textoUsuario = document.getElementById("mensagem");
  //console.log(textoUsuario);
  voceDiz(textoUsuario.value);

  const respostaGato = [
    "Miau.",
    "Miau?",
    "Miiiiaaaauuuu",
    "Miaauuu!",
    "Miiiaaaaaaauuuuuuuu.",
    "Miau!Miau!Miau!",
    "Miau, miau, miau.",
    "Miau miau?",
    "Miaaaau",
    "Miau miau miau miau.",
    "Miauu",
    "PRRRRRRRRRRRRR",
  ];
  gatoDiz(respostaGato[Math.floor(Math.random() * respostaGato.length)]);
  textoUsuario.value = "";
});
