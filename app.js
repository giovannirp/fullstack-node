const express = require("express");
const rotaLivros = require("./rotas/livro");

const app = express();
app.use(express.json()); // Permite que req.body funcione corretamente


const port = 8000;

app.use("/livros", rotaLivros)

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});