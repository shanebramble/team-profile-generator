import { Employee } from "../lib/Employee.js";

// Create mock data.
// jest.mock("../lib/Employee", () => ({
//   Employee: jest.fn(() => {
//     name: "Shane",
//     id: 4,
//     email: "shanebram"
//   }),
// }));


test("create an employee object", () => {
  const employee = new Employee("Shane", 4, "shanebramble96@hotmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
// getNme()
test("get employee name", () => {
  const employee = new Employee("Shane", 4, "shanebramble96@hotmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

// getId()
test("get employee ID", () => {
  const employee = new Employee("Shane", 4, "shanebramble96@hotmail.com");
  expect(employee.getId()).toEqual(expect.any(Number));
});
// getEmail()
test("get employee email", () => {
  const employee = new Employee("Shane", 4, "shanebramble96@hotmail.com");
  expect(employee.getEmail()).toEqual(expect.any(String));
});

// getRole()
test("get employee role", () => {
  const employee = new Employee("Shane", 4, "shanebramble96@hotmail.com");
  expect(employee.getRole()).toBe("Employee");
});
