import { Engineer } from "../lib/Engineer.js";

test("get Github username", () => {
  const engineer = new Engineer("shanebramble");
  expect(engineer.github).toEqual(expect.any(String));
});

test("a function to retrieve GitHub username", () => {
  const engineer = new Engineer("shanebramble");
  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("get Engineer role", () => {
    const engineer = new Engineer();
  expect(engineer.getRole()).toBe("Engineer");
});
