const {
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
} = require("../03-operator-1/exercice_9/main.js");

test("paul est de type number", () => {
  expect(typeof paul).toBe("number");
});
test("marie est de type number", () => {
  expect(typeof marie).toBe("number");
});
test("eric est de type number", () => {
  expect(typeof eric).toBe("number");
});
test("clair est de type number", () => {
  expect(typeof clair).toBe("number");
});
test("madameMukuna est de type number", () => {
  expect(typeof madameMukuna).toBe("number");
});
test("joseph est de type number", () => {
  expect(typeof joseph).toBe("number");
});
test("sarah est de type number", () => {
  expect(typeof sarah).toBe("number");
});

test("paul reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const paulShare = (totalHeritage * 0.75) / 3;
  expect(paul).toBe(paulShare);
});

test("marie reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const marieShare = (totalHeritage * 0.75) / 3;
  expect(marie).toBe(marieShare);
});

test("eric reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const ericShare = (totalHeritage * 0.75) / 3 / 2;
  expect(eric).toBe(ericShare);
});

test("clair reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const clairShare = (totalHeritage * 0.75) / 3 / 2;
  expect(clair).toBe(clairShare);
});

test("madameMukuna reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const madameMukunaShare = (totalHeritage * 0.25) / 3;
  expect(madameMukuna).toBe(madameMukunaShare);
});

test("joseph reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const josephShare = (totalHeritage * 0.25) / 3;
  expect(joseph).toBe(josephShare);
});

test("sarah reçoit la bonne part de l'héritage", () => {
  const totalHeritage = 120000000;
  const sarahShare = (totalHeritage * 0.25) / 3;
  expect(sarah).toBe(sarahShare);
});
