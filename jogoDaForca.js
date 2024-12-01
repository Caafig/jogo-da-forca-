import { getWord } from "./palavra.js";

const contentBtns = document.querySelector(".btns");
const contentpalavraMisteriosa = document.querySelector(".palavraMisteriosa");
const img = document.querySelector("#img");
const contentDica = document.querySelector(".dica");

let indexImg;
let palavra;  

inic();

function inic() {
  indexImg = 1;
  img.src = img1.png;

  gerarpalavra();
  gerarBtns();
  document.addEventListener('keydown', handleKeyPress);
}

function gerarpalavra() {
  contentpalavraMisteriosa.textContent = "";

  const { word, clue } = getWord();
  palavra = word.toUpperCase();
  const palavraContemAcento = palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  Array.from(palavraContemAcento).forEach((letra) => {
    const span = document.createElement("span");

    span.textContent = "_";
    span.setAttribute("word", letra.toUpperCase());
    contentpalavraMisteriosa.appendChild(span);
  });

  contentDica.textContent = Dica: ${clue};
}
 


function respostaErrada() {
  indexImg++;
  img.src = img${indexImg}.png;

  if (indexImg === 7) {
    alert("Você errou, tende de novo.");
    inic();
  }
}

function verificaLetra(letra, btn) {
  const arr = document.querySelectorAll([word="${letra}"]);

  if (!arr.length) {
    btn.style.backgroundColor = "#FF0000";
    btn.style.borderColor = "#FF0000";
 
    respostaErrada();
  } else {
    btn.style.backgroundColor = "#32CD32";
    btn.style.borderColor = "#006400";
   
    arr.forEach((e) => {
      e.textContent = letra;
    });
  }

  const spans = document.querySelectorAll(.palavraMisteriosa span);
  const vencer = !Array.from(spans).find((span) => span.textContent === "_");

  if (vencer) {
    alert("Parabéns, você acertou.");
    inic();
  }
}

function gerarBtns() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letra = String.fromCharCode(i).toUpperCase();
    btn.textContent = letra;
    btn.style.backgroundColor = "rgb(0, 9, 87)";
    btn.style.color = "white";
    btn.onclick = () => {
      btn.disabled = true;
      verificaLetra(letra, btn);
    };

    contentBtns.appendChild(btn);
  }
}

function handleKeyPress(event) {
  const key = event.key.toUpperCase();
  
  if (key.length === 1 && key >= 'A' && key <= 'Z') {
    const btn = Array.from(contentBtns.children).find(b => b.textContent === key);
    
    if (btn && !btn.disabled) {
      btn.disabled = true;
      verificaLetra(key, btn);
    }
  }
}
