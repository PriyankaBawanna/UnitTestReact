import ComplieCode from "./ComplieCode";
test("Compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  expect(() => compileAndroidCode()).toThrow("You are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
