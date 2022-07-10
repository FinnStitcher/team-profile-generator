const Intern = require("../lib/Intern");

describe("Intern", () => {
	test("creates Intern object", () => {
		const intern = new Intern();

		expect(intern).toEqual(expect.any(Object));
	});

	test("Intern has expected properties", () => {
		const intern = new Intern("Winnie", "353", "test@test.com", "Rochester");

		expect(intern.name).toEqual("Winnie");
		expect(intern.id).toEqual("353");
		expect(intern.email).toEqual("test@test.com");
		expect(intern.school).toEqual("Rochester");
	});

    test("Intern.getSchool() returns school", () => {
        const intern = new Intern("Winnie", "353", "test@test.com", "Rochester");

        expect(intern.getSchool()).toEqual("Rochester");
    })

	test("Intern.getRole() returns Intern", () => {
		const intern = new Intern();

		expect(intern.getRole()).toEqual("Intern");
	});
});
