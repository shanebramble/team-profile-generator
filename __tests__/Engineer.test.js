import { Engineer } from "../lib/Engineer.js";

test("get Github username", () => {
  const engineer = new Engineer("Shane", 4, "shanebramble96@hotmail.com","shanebramble");
  expect(engineer.github).toEqual(expect.any(String));
});

test("a function to retrieve GitHub username", () => {
  const engineer = new Engineer("Shane", 4, "shanebramble96@hotmail.com","shanebramble");
  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("get Engineer role", () => {
    const engineer = new Engineer();
  expect(engineer.getRole()).toBe("Engineer");
});
