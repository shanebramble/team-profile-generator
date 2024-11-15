import {Intern} from "../lib/Intern.js";

test("get school name", () => {
  const intern = new Intern("UCF");
  expect(intern.school).toEqual(expect.any(String));
});

test("a function to retrieve Intern's school's name", () => {
  const intern = new Intern("UCF");
  expect(intern.getSchool()).toEqual(expect.any(String));
});

test("get Intern role", () => {
  const intern = new Intern();
  expect(intern.getRole()).toBe("Intern");
});
