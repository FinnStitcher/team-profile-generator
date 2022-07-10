const Employee = require("../lib/Employee");

describe("Employee", () => {
	test("creates an Employee object", () => {
		const employee = new Employee();

		expect(employee).toEqual(expect.any(Object));
	});

	test("Employee has expected properties", () => {
		const employee = new Employee("Dave", "123", "test@test.com");

		expect(employee.name).toEqual("Dave");
		expect(employee.id).toEqual("123");
		expect(employee.email).toEqual("test@test.com");
	});

	test("Employee methods work", () => {
		const employee = new Employee("Dave", "123", "test@test.com");

		expect(employee.getName()).toEqual("Dave");
		expect(employee.getId()).toEqual("123");
		expect(employee.getEmail()).toEqual("test@test.com");
		expect(employee.getRole()).toEqual("Employee");
	});
});
