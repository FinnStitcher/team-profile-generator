const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
	test("creates Engineer object", () => {
		const engineer = new Engineer();

		expect(engineer).toEqual(expect.any(Object));
	});

	test("Engineer has expected properties", () => {
		const engineer = new Engineer("Jens", "252", "test@test.com", "TestEngineer");

		expect(engineer.name).toEqual("Jens");
		expect(engineer.id).toEqual("252");
		expect(engineer.email).toEqual("test@test.com");
		expect(engineer.github).toEqual("TestEngineer");
	});

    test("Engineer.getGithub() returns github", () => {
        const engineer = new Engineer("Jens", "252", "test@test.com", "TestEngineer");

        expect(engineer.getGithub()).toEqual("TestEngineer");
    })

	test("Engineer.getRole() returns Engineer", () => {
		const engineer = new Engineer();

		expect(engineer.getRole()).toEqual("Engineer");
	});
});
