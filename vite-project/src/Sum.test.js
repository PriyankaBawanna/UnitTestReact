const { set } = require("immer/dist/internal");
const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(5, 5)).toBe(10);
});
test("add 1+2 to not equal to 4", () => {
  expect(sum(1, 2).not.toEqual(4));
});
test("object assignment ", () => {
  const data = { name: "priyanka" };
  data.city = "indore";
  expect(data).toEqual({ name: "priyanka", city: "indore" });
});
test("Adding positivie number is not 0", () => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      expect(i * j).not.toEqual(0);
    }
  }
});
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
test("two plus two ", () => {
  const value = 2.5 * 10.95;
  expect(value).toBeGreaterThan(20);
  expect(value).toBeLessThan(30);
  expect(value).toEqual(27.375);
  expect(value).toBe(27.375);
});
test("adding floder number ", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});
test("there is no I in team ", () => {
  expect("team").not.toMatch(/I/);
});
test('but there is a "stop" in christoph', () => {
  expect("christoph").toMatch(/stop/);
});
/*const ShoppingList = ["Manago", "papya", "jaam", "apple", "sitafal"];
test("the shopping list i like Manago", () => {
  expect(ShoppingList).toContain("Mango");
  expect(new set(shoppingList)).toContain("Manago");
});*/
function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
