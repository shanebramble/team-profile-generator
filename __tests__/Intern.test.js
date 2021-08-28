const Intern = require('../lib/Intern');

test("Can set school via constructor", () => {
    const e = new Intern("Shane", 123456, "test@test.com", "UCF");
    expect(e.school).toBe("UCF");
});

test("getRole() should return \"Intern\"", () => {
    const e = new Intern("Shane", 123456, "test@test.com", "UCF");
    expect(e.getRole()).toBe("Intern");
});

test("Can get school via getSchool()", () => {
    const e = new Intern("Shane", 123456, "test@test.com", "UCF");
    expect(e.getSchool()).toBe("UCF");
});
