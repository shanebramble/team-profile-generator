const Manager = require('../lib/Manager');

test("Set office number via constructor", () => {
    const e = new Manager("Shane", 12345, "test@test.com", 100);
    expect(e.officeNumber).toBe(100);
});

test("getRole() should return \"Manager\"", () => {
    const e = new Manager("Shane", 12345, "test@test.com", 100);
    expect(e.getRole()).toBe("Manager");
});