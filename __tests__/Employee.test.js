const Employee = require('../lib/Employee');

// A test to check the creation of the Employee object and it's properties.
test('create Employee object with properties', () => {
    const joe = new Employee("Shane", 330303, "sbramwade@msn.com");
    expect(joe.name).toBe("Shane");
    expect(joe.id).toEqual(expect.any(Number));
    expect(joe.email).toBe("sbramwade@msn.com");
});

// A test to get the Employee name.
test('Get Employee name from getName()', () => {
    const joe = new Employee("Shane", 330303, "sbramwade@msn.com");
    expect(joe.getName()).toBe("Shane");
});

// A test to get the Employee id.
test("Get employee id from Id()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

// A test to get Employee email.
test('Get employee email from getEmail()', () => {
    const joe = new Employee("Shane", 330303, "sbramwade@msn.com");
    expect(joe.getEmail()).toBe("sbramwade@msn.com");
});

// A test to get Employee Role.
test('Get Employee role from getRole()', () => {
    const joe = new Employee("Shane", 330303, "sbramwade@msn.com");
    expect(joe.getRole()).toBe("Employee");
});