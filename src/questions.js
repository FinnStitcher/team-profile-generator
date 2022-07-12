const generic = [
	{
		type: "input",
		name: "name",
		message: "Enter name:",
	},
	{
		type: "input",
		name: "id",
		message: "Enter ID:",
	},
	{
		type: "input",
		name: "email",
		message: "Enter email:",
	},
];

const manager = [
	...generic,
	{
		type: "input",
		name: "officeNumber",
		message: "Enter office number:",
	}
];

const other = [
	{
		type: "list",
		name: "typeOf",
		message: "Select employee role:",
		choices: ["Engineer", "Intern"],
	},
	...generic,
	{
		type: "input",
		name: "github",
		message: "Enter GitHub username:",
		when: ({ typeOf }) => typeOf === "Engineer",
	},
	{
		type: "input",
		name: "school",
		message: "Enter school:",
		when: ({ typeOf }) => typeOf === "Intern",
	},
	{
		type: "confirm",
		name: "addAnother",
		message: "Add another employee?",
		default: "true",
	},
];

module.exports = {
    managerQuestions: manager,
    otherEmployeeQuestions: other
}