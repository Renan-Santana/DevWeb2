const { Router } = require("express");
import { Request, Response } from 'express';

const roteador = Router();

const getPath = () => {
  const paths = __dirname.split("/");
  let path = "";
  for (let i = 0; i < paths.length - 1; i++) {
    path = path + paths[i] + "/";
  }
  return path;
}

roteador.get("/about", async function (req: Request, res: Response) {
  res.sendFile(`${getPath()}/views/about.html`);
});

module.exports = roteador;