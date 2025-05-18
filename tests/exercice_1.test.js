const fs = require("fs");
const path = require("path");

test("Exercice 1 : le fichier doit contenir au moins un commentaire", () => {
  const content = fs.readFileSync(
    path.join(__dirname, "../01-variables/exercice_1/main.js"),
    "utf-8"
  );

  const containsComment = /\/\/.+|\/\*[\s\S]*?\*\//.test(content);

  expect(containsComment).toBe(true);
});

test("Exercice 1 : le commentaire dit Hello World", () => {
  const content = fs.readFileSync(
    path.join(__dirname, "../01-variables/exercice_1/main.js"),
    "utf-8"
  );

  const containsHelloWorld =
    /\/\/\s*Ce programme affiche un message Hello World/.test(content);

  expect(containsHelloWorld).toBe(true);
});

test("Exercice 1 : le commentaire est sur la première ligne", () => {
  const content = fs.readFileSync(
    path.join(__dirname, "../01-variables/exercice_1/main.js"),
    "utf-8"
  );

  const firstLine = content.split("\n")[0];

  const containsComment = /\/\/.+|\/\*[\s\S]*?\*\//.test(firstLine);

  expect(containsComment).toBe(true);
});
