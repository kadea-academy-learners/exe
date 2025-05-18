const {
  ageEnfant,
  agePere,
  ageMere,
  ageGrandPere,
  ageOncle,
} = require("../03-operator-1/exercice_7/main.js");

test("Exercice 7 : la variable ageEnfant est un nombre", () => {
  expect(typeof ageEnfant).toBe("number");
});
test("Exercice 7 : la variable agePere est un nombre", () => {
  expect(typeof agePere).toBe("number");
});
test("Exercice 7 : la variable ageMere est un nombre", () => {
  expect(typeof ageMere).toBe("number");
});
test("Exercice 7 : la variable ageGrandPere est un nombre", () => {
  expect(typeof ageGrandPere).toBe("number");
});

test("Exercice 7 : la variable ageOncle est un nombre", () => {
  expect(typeof ageOncle).toBe("number");
});
test("Exercice 7 : la variable agePere est double de l'enfant", () => {
  expect(agePere).toBe(ageEnfant * 2);
});
test("Exercice 7 : la variable ageMere corresponds à l'age du père moins 5", () => {
  expect(ageMere).toBe(agePere - 5);
});
test("Exercice 7 : la variable ageGrandPere est le double de l'âge de la mère plus le moitié de l'age de l'enfant", () => {
  expect(ageGrandPere).toBe(ageMere * 2 + ageEnfant / 2);
});

test("Exercice 7 : la variable ageOncle corresponds à l'age du père plus 10", () => {
  expect(ageOncle).toBe(agePere + 10);
});
