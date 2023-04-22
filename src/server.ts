import express from "express";
const dotenv = require("dotenv");
const roteadorAlunos = require("./routes/AlunosRoutes");
const roteadorStatic = require("./routes/StaticRoutes");
const roteadorAbout = require("./routes/AboutRoutes")


dotenv.config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env",
});

const port: number = Number(process.env.PORT || 2000);
const app: express.Application = express();

app.use(express.json());
app.use("/public", express.static(`${__dirname}/public`));
app.use(roteadorAlunos);
app.use(roteadorStatic);
app.use(roteadorAbout);

app.listen(port, function () {
  console.log(`Servidor funcionando na porta ${port}`);
});