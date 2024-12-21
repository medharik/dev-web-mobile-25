const {somme,TVA}=require("./somme.js");
describe("test de somme ",()=>{
  test('check if   1 + 2 = 3', () => {
    expect(somme(1, 2)).toBe(3);
  });
test('check if   -1 + 2 = 1', () => {
    expect(somme(-1, 2)).toBe(1);
  });
  test('check TVA', () => {
    expect(TVA).toBeCloseTo(0.2);
  });
  test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
})