const fs = require("fs");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const livroFiltrado = livros.filter(livro => livro.id === id)[0];
  // [ {id: 2, nome: "licro irado"} ]
  return livroFiltrado;
}

function insereLivro(livroNovo) {
  const livros = JSON.parse(fs.readFileSync("livros.json"))

  // Filtra para remover objetos vazios antes de adicionar o novo livro ;
  const livrosFiltrados = livros.filter(livro => Object.keys(livro).length > 0)

  const novaListaDeLivros = [ ...livrosFiltrados, livroNovo ]

  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro
}