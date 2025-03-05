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

function modificaLivros(modificacoes, id) {
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
  const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);

  const conteudoModado = { ...livrosAtuais[indiceModificado], ...modificacoes }

  livrosAtuais[indiceModificado] = conteudoModado;

  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

function deletaLivroPorId(id) {
  let livros = JSON.parse(fs.readFileSync("livros.json"));

  const livrosFiltrados = livros.filter(livro => livro.id !== id);
  fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados));
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivros,
  deletaLivroPorId
}