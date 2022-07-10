const Manager = require("../lib/Manager");

describe("Manager", () => {
	test("creates Manager object", () => {
		const manager = new Manager();

		expect(manager).toEqual(expect.any(Object));
	});

	test("Manager has expected properties", () => {
		const manager = new Manager("Bill", "555", "test@test.com", "35B");

		expect(manager.name).toEqual("Bill");
		expect(manager.id).toEqual("555");
		expect(manager.email).toEqual("test@test.com");
		expect(manager.officeNumber).toEqual("35B");
	});

	test("Manager.getRole() returns Manager", () => {
		const manager = new Manager();

		expect(manager.getRole()).toEqual("Manager");
	});
});
