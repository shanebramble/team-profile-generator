const Engineer = require('../lib/Engineer');

test(`Get GitHub Name from object property`, () => {
    const e = new Engineer("Shane", 190330,"sbramwade@msn.com","randomGitUser");
    expect(e.github).toBe("randomGitUser");
});

test("Get Engineer role from getRole()", () => {
    
    const e = new Engineer("Shane", 190330, "sbramwade@msn.com", "randomGitUser");
    expect(e.getRole()).toBe("Engineer");
});

test("Get GitHub username via getGithub()", () => {
    const e = new Engineer("Shane", 190330, "sbramwade@msn.com", "randomGitUser");
    expect(e.getGithub()).toBe("randomGitUser");
});
