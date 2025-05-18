const {
  age,
  nom,
  estConnecte,
  valeurNulle,
  inconnue,
} = require("./../02-type-donnes/exercice_6/main.js");

test("Exercice 6 : la variable age est un nombre", () => {
  expect(typeof age).toBe("number");
});
test("Exercice 6 : la variable nom est une chaîne de caractères", () => {
  expect(typeof nom).toBe("string");
});
test("Exercice 6 : la variable estConnecte est un booléen", () => {
  expect(typeof estConnecte).toBe("boolean");
});
test("Exercice 6 : la variable valeurNulle est nulle", () => {
  expect(valeurNulle).toBeNull();
});
test("Exercice 6 : la variable inconnue est indéfinie", () => {
  expect(inconnue).toBeUndefined();
});
