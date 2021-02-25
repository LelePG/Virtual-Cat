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
    imagem.src = `Imagens/${elementoAleatorio(fotos)}.png`;
  });
  document.getElementById("acordar").innerText = String.fromCodePoint(0x1f63a);
};

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
