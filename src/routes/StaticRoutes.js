const { Router } = require("express");

const roteador = Router();

const getPath = () => {
  const paths = __dirname.split("\\");
  let path = "";
  for (let i = 0; i < paths.length - 1; i++) {
    path = path + paths[i] + "\\";
  }
  return path;
}

roteador.get("/", async function (req, res) {
  res.sendFile(`${getPath()}/views/index.html`);
});

roteador.get("*", async function (req, res) {
  res.sendFile(`${getPath()}/views/notfound.html`);
});

module.exports = roteador;
