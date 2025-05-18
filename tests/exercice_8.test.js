const {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
} = require("../03-operator-1/exercice_8/main.js");

test("salaireMensuel est de type number", () => {
  expect(typeof salaireMensuel).toBe("number");
});

test("loyer est de type number", () => {
  expect(typeof loyer).toBe("number");
});

test("nourriture est de type number", () => {
  expect(typeof nourriture).toBe("number");
});

test("transport est de type number", () => {
  expect(typeof transport).toBe("number");
});

test("autresDepenses est de type number", () => {
  expect(typeof autresDepenses).toBe("number");
});

test("totalDepenses est de type number", () => {
  expect(typeof totalDepenses).toBe("number");
});

test("reste est de type number", () => {
  expect(typeof reste).toBe("number");
});

test("le calcul du loyer est correct", () => {
  expect(loyer).toBeCloseTo(salaireMensuel * 0.3);
});

test("le calcul de la nourriture est correct", () => {
  expect(nourriture).toBeCloseTo(salaireMensuel * 0.2);
});

test("le calcul du transport est correct", () => {
  expect(transport).toBeCloseTo(salaireMensuel * 0.1);
});

test("le calcul des autres dépenses est correct", () => {
  expect(autresDepenses).toBe(50 + 25);
});

test("le calcul du total des dépenses est correct", () => {
  expect(totalDepenses).toBeCloseTo(
    loyer + nourriture + transport + autresDepenses
  );
});

test("le calcul du reste est correct", () => {
  expect(reste).toBeCloseTo(salaireMensuel - totalDepenses);
});
