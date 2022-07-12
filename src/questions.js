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
	},
	{
		type: "list",
		name: "typeOfNext",
		message: "Select employee role:",
		choices: ["Engineer", "Intern"],
	},
];

const engineer = [
	...generic,
	{
		type: "input",
		name: "github",
		message: "Enter GitHub username:",
	},
	{
		type: "list",
		name: "typeOfNext",
		message: "Select employee role:",
		choices: ["Engineer", "Intern", "I don't want to add another employee"],
	},
];

const intern = [
	...generic,
	{
		type: "input",
		name: "school",
		message: "Enter school:",
	},
	{
		type: "list",
		name: "typeOfNext",
		message: "Select employee role:",
		choices: ["Engineer", "Intern", "I don't want to add another employee"],
	},
];

module.exports = {
	managerQs: manager,
	engineerQs: engineer,
	internQs: intern,
};
