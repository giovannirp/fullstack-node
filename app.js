const express = require("express");
const rotaLivros = require("./rotas/livro");
const rotaFavorito = require("./rotas/favorito")
const cors = require("cors")

const app = express();
app.use(express.json()); // Permite que req.body funcione corretamente
app.use(cors({origin: "*"}));


const port = 8000;

app.use("/livros", rotaLivros);
app.use("/favoritos", rotaFavorito);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});