const inquirer = require("inquirer");

const employees = {
	manager: {},
	engineers: [],
	interns: [],
};

const genericQuestions = [
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

const managerQuestions = [
	...genericQuestions,
	{
		type: "input",
		name: "officeNumber",
		message: "Enter office number:",
	},
	{
		type: "confirm",
		name: "addAnother",
		message: "Add another employee?",
		default: "true",
	},
];

const otherEmployeeQuestions = [
	{
		type: "list",
		name: "typeOf",
		message: "Select employee role:",
		choices: ["Engineer", "Intern"],
	},
	...genericQuestions,
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

function prompts(questionArray) {
	inquirer.prompt(questionArray)
    .then((answers) => {
		const { typeOf, addAnother } = answers;

		// the first round of prompts includes no question with the id 'typeOf'
		// so this will determine if it was the first round or not
		if (!typeOf) {
			employees.manager = { ...answers };
		} else {
			// push to the appropriate array
			const formattedType = typeOf.toLowerCase() + "s";
			employees[formattedType].push(answers);
		}

		if (addAnother) {
			prompts(otherEmployeeQuestions);
		} else {
			console.log(employees);
		}
	});
}

console.log("First, enter the manager's information.\n----------");

prompts(managerQuestions);
