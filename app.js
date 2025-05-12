const express = require("express");
const rotaLivros = require("./rotas/livro");
const cors = require("cors")

const app = express();
app.use(express.json()); // Permite que req.body funcione corretamente
app.use(cors({origin: "*"}));


const port = 8000;

app.use("/livros", rotaLivros)

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});