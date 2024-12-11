import { Manager } from "../lib/Manager.js";

test("get office number", () => {
  const manager = new Manager("Shane", 4, "shanebramble96@hotmail.com",1111);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});


test ("get Manager role", ()=> {
    const manager = new Manager();

    expect(manager.getRole()).toBe("Manager");
});
