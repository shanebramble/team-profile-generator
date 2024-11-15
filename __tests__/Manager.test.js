import { Manager } from "../lib/Manager.js";

test("get office number", () => {
  const manager = new Manager(1111);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});


test ("get Manager role", ()=> {
    const manager = new Manager();

    expect(manager.getRole()).toBe("Manager");
});
