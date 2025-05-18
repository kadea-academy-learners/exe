const fs = require("fs");
const path = require("path");
const vm = require("vm");

const filePath = path.join(__dirname, "../01-variables/exercice_4/main.js");

test("Exercice 4 : les variables 'a' et 'b' sont déclarées avec des valeurs 5 et 8", () => {
  const content = fs.readFileSync(filePath, "utf-8");
  const hasAandB =
    /\b(let|var|const)\s+a\s*=\s*5\s*;?\s*\b(let|var|const)\s+b\s*=\s*8\b/.test(
      content
    ) ||
    /\b(let|var|const)\s+b\s*=\s*8\s*;?\s*\b(let|var|const)\s+a\s*=\s*5\b/.test(
      content
    ) ||
    /\b(let|var|const)\s+a\s*=\s*5\s*,\s*b\s*=\s*8\s*;?/.test(content) ||
    /\b(let|var|const)\s+b\s*=\s*8\s*,\s*a\s*=\s*5\s*;?/.test(content);
  expect(hasAandB).toBe(true);
});

test("Exercice 4 : la somme de a et b est affichée avec console.log", () => {
  const content = fs.readFileSync(filePath, "utf-8");

  let output = "";
  const sandbox = {
    console: {
      log: (msg) => {
        output += msg;
      },
    },
  };

  vm.createContext(sandbox);
  vm.runInContext(content, sandbox);

  expect(Number(output)).toBe(13);
});
