const { Router } = require("express");
const getAll = require("../services/getAll");
const axios = require("axios");
const fs = require("fs");

const roteador = Router();

const getPath = () => {
  const paths = __dirname.split("\\");
  let path = "";
  for (let i = 0; i < paths.length - 1; i++) {
    path = path + paths[i] + "\\";
  }
  return path;
};

roteador.get("/", async function (req, res) {
  let htmlString = "";
  fs.readFile(`${getPath()}views\\index.html`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      htmlString = data;
    }
  });

  const alunos = await getAll();
  let table_data = "";
  alunos.forEach((element) => {
    table_data += `<tr>
    <td>${element.id}</td>
    <td>${element.nome}</td>
    <td>${element.grau}</td>
    <td>
      <input type='checkbox' ${element.ativo == 1 ? "checked" : ""} onclick="return false;"/>
    </td>
    <td>
      <button onclick="updateAluno(this)" class="btn btn-warning btn-sm">Editar</button>
      <button onclick="deleteAluno(${element.id})" class="btn btn-outline btn-danger btn-sm">Excluir</button>
    </td>
  </tr>`;
  });

  res.send(htmlString.replace("{{TABLE_DATA}}", table_data));
});

roteador.get("/about", async function (req, res) {
  res.sendFile(`${getPath()}/views/about.html`);
});

roteador.get("*", async function (req, res) {
  res.sendFile(`${getPath()}/views/notfound.html`);
});

module.exports = roteador;
