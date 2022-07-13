const inquirer = require("inquirer");

const { writeFile, copyFile } = require("./src/generate-site.js");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

// wrapping the inquirer.prompt() calls in functions to allow recursion
// breaking them out into three because each role has a different set of prompts

// at the end of each of these, it checks what type of employee was selected for the next one, and runs engineerPrompts, runs internPrompts, or stops
// i could stand to remove that repetition, but oh well

function managerPrompts() {
	console.log("Enter the manager's information.\n----------");

	return inquirer
		.prompt([
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
			{
				type: "input",
				name: "officeNumber",
				message: "Enter office number:",
			},
			{
				type: "list",
				name: "typeOfNext",
				message: "Select employee role:",
				choices: [
					"Engineer",
					"Intern",
					"I don't want to add another employee",
				],
			},
		])
		.then((answers) => {
			employees.push(
				new Manager(
					answers.name,
					answers.id,
					answers.email,
					answers.officeNumber
				)
			);

			if (answers.typeOfNext === "Engineer") {
				engineerPrompts();
			} else if (answers.typeOfNext === "Intern") {
				internPrompts();
			}
		});
}

function engineerPrompts() {
	console.log("Enter the engineer's information.\n----------");

	return inquirer
		.prompt([
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
			{
				type: "input",
				name: "github",
				message: "Enter GitHub username:",
			},
			{
				type: "list",
				name: "typeOfNext",
				message: "Select employee role:",
				choices: [
					"Engineer",
					"Intern",
					"I don't want to add another employee",
				],
			},
		])
		.then((answers) => {
			employees.push(
				new Engineer(
					answers.name,
					answers.id,
					answers.email,
					answers.github
				)
			);

			if (answers.typeOfNext === "Engineer") {
				engineerPrompts();
			} else if (answers.typeOfNext === "Intern") {
				internPrompts();
			}
		});
}

function internPrompts() {
	console.log("Enter the intern's information.\n----------");

	return inquirer
		.prompt([
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
			{
				type: "input",
				name: "school",
				message: "Enter name of school:",
			},
			{
				type: "list",
				name: "typeOfNext",
				message: "Select employee role:",
				choices: [
					"Engineer",
					"Intern",
					"I don't want to add another employee",
				],
			},
		])
		.then((answers) => {
			employees.push(
				new Intern(
					answers.name,
					answers.id,
					answers.email,
					answers.school
				)
			);

			if (answers.typeOfNext === "Engineer") {
				engineerPrompts();
			} else if (answers.typeOfNext === "Intern") {
				internPrompts();
			}
		});
}

managerPrompts()
	.then(() => {
		console.log("Data received. Beginning file creation...");
		return writeFile("testing");
	})
	.then((writeFileResponse) => {
		console.log(writeFileResponse.message);
		return copyFile();
	})
	.then((copyFileResponse) => {
		console.log(copyFileResponse.message);
		console.log("Complete! Go to the /dist folder to see the results.");
	});