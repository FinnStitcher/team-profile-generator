const inquirer = require("inquirer");

const { writeFile, copyFile } = require("./src/generate-site.js");
const createHTML = require("./src/site-template.js");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

// wrapping the inquirer.prompt() calls in functions to allow recursion
// breaking them out into three because each role has a different set of prompts

// the following 3 functions all have a question asking what type of employee should be added next
// they also each return the value selected for that question
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
				message: "What type of employee do you want to add next?",
				choices: [
					"Engineer",
					"Intern",
					"I don't want to add another employee",
				],
			},
		])
		.then((answers) => {
            employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));

            return answers.typeOfNext;
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
				message: "What type of employee do you want to add next?",
				choices: [
					"Engineer",
					"Intern",
					"I don't want to add another employee",
				],
			},
		])
		.then((answers) => {
            employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github));

            return answers.typeOfNext;
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
				message: "What type of employee do you want to add next?",
				choices: [
					"Engineer",
					"Intern",
					"I don't want to add another employee",
				],
			},
		])
		.then((answers) => {
            employees.push(new Intern(answers.name, answers.id, answers.email, answers.school));

            return answers.typeOfNext;
        });
}

// select between and loop engineerPrompts() and internPromps()
// not really sure why this needs to be formatted the way it does, with the return statements, but if it works it works
function otherPrompts(typeOfNext) {
	// remember: engineerPrompts() returns the type selected for the next employee
	// that return value is fed back into otherPrompts()
	if (typeOfNext === "Engineer") {
		return engineerPrompts()
        .then((typeOfNext) => otherPrompts(typeOfNext));
	} else if (typeOfNext === "Intern") {
		return internPrompts()
        .then((typeOfNext) => otherPrompts(typeOfNext));
	} else {
		return;
	}
}

managerPrompts()
	.then(otherPrompts)
	.then(() => {
		console.log("Data received. Beginning file creation...");
		return createHTML(employees);
	})
	.then((html) => {
		return writeFile(html);
	})
	.then((writeFileResponse) => {
		console.log(writeFileResponse.message);
		return copyFile();
	})
	.then((copyFileResponse) => {
		console.log(copyFileResponse.message);
		console.log("Complete! Go to the /dist folder to see the results.");
	});
