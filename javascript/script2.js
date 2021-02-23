"use strict";
let NOMEDOGATO = localStorage.getItem("nomeGato");

//Vetores
const COMIDA = [
  0x1f35e,
  0x1f9c7,
  0x1f356,
  0x1f969,
  0x1f953,
  0x1f355,
  0x1f96b,
  0x1f363,
  0x1f364,
  0x1f36a,
];
const BEBIDA = [0x1f95b, 0x2615, 0x1f9c3];
const BRINQUEDOS = [
  0x1f6ce,
  0x1f397,
  0x26be,
  0x1fa80,
  0x1f9f8,
  0x1f9f6,
  0x1f9fa,
  0x1f400,
];
const GATOREACOES = [0x1f63a, 0x1f638, 0x1f63b, 0x1f640, 0x1f63f, 0x1f63e];

document.querySelector(".titulo").innerText += ` ${NOMEDOGATO}!`; //Atualização do título

const humorGato = function () {
  return String.fromCodePoint(elementoAleatorio(GATOREACOES));
};

const voceDiz = function (texto) {
  //mensagem do usuário no chat
  caixaTexto.innerHTML += `<p class = "mensagem-usuario">Você: ${texto}</p>`;
};

const gatoDiz = function (texto) {
  //mensagem do gato no chat
  caixaTexto.innerHTML += `<p class = "mensagem-gato">${NOMEDOGATO}: ${texto}</p>`;
};
const aviso = function (texto) {
  //aviso no chat
  caixaTexto.innerHTML += `<p class = "mensagem-aviso">${texto}</p>`;
};

const elementoAleatorio = function (vetorElementos) {
  //retorna um elemento aleatório de um vetor
  return vetorElementos[Math.floor(Math.random() * vetorElementos.length)];
};

const inicializaStatus = function () {
  const status = document.querySelectorAll(".status");
  status.forEach((texto) => {
    texto.innerText = humorGato();
  });
};

inicializaStatus();
//variáveis
const caixaTexto = document.getElementById("text"); //Div onde o chat é armazenado
const popUp = document.getElementById("pop-up"); //janela de pop-up

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
  gatoDiz(elementoAleatorio(respostaGato));
  textoUsuario.value = "";
});

//Funções de interação
const atualizaStatus = function (escolherElementos, textStatus) {
  popUp.classList.remove("hidden"); //deixa a tela visível
  popUp.innerHTML = " "; //limpa e adicona os elementos
  escolherElementos.forEach((element) => {
    popUp.innerHTML += `<p class = "radio-btn" ><input type="radio" name="radio" />${String.fromCodePoint(
      element
    )} </p>`;
  });
  //Adiciona o botão para fechar
  popUp.innerHTML += `<input type="button" value="Selecionar" id="fechar-pop-up" />`;
  //Event listener no botão para fechar
  document
    .getElementById("fechar-pop-up")
    .addEventListener("click", function () {
      popUp.classList.add("hidden");
    });

  textStatus.innerText = humorGato();
};

//Event listener dos três primeiros botões
//alimentar
document.getElementById("btn-alimentar").addEventListener("click", function () {
  atualizaStatus(COMIDA, document.getElementById("s-alimentar"));
  aviso(`Você alimentou ${NOMEDOGATO}.`);
});
//BEBIDA
document
  .getElementById("btn-dar-bebida")
  .addEventListener("click", function () {
    atualizaStatus(BEBIDA, document.getElementById("s-bebida"));
    aviso(`Você deu algo para ${NOMEDOGATO} beber.`);
  });
//brincar
document.getElementById("btn-brincar").addEventListener("click", function () {
  atualizaStatus(BRINQUEDOS, document.getElementById("s-brincar"));
  aviso(`Você brincou com ${NOMEDOGATO}.`);
});
