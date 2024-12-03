
const palavras = [{ word: "rio", clue: "Corpo de água que corre para o mar" },
{ word: "montanha", clue: "Elevação alta de terra" },
{ word: "livro", clue: "Objeto que contém páginas com textos" },
{ word: "sol", clue: "Estrela que ilumina o dia" },
{ word: "cachorro", clue: "Animal de estimação que late" },
{ word: "casa", clue: "Lugar onde as pessoas moram" },
{ word: "carro", clue: "Veículo com quatro rodas" },
{ word: "janela", clue: "Abertura na parede para ver fora" },
{ word: "flor", clue: "Parte colorida de uma planta" },
{ word: "praia", clue: "Área de areia perto do mar" },]



export function getWord() {
  const index = Math.floor(Math.random() * palavras.length);
  return palavras[index];
}