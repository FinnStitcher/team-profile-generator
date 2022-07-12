const inquirer = require("inquirer");

const { managerQuestions, otherEmployeeQuestions } = require('./src/questions.js');
const { writeFile, copyFile } = require('./src/generate-site.js');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

// wrapping the inquirer.prompt() calls in functions to allow recursion
function managerPrompts(questionArray) {
    console.log("Enter the manager's information.\n----------");

    return inquirer.prompt(questionArray);
}

// needs to be wrapped in this function to allow recursion
function prompts(questionArray) {
	return inquirer.prompt(questionArray)
    .then((answers) => {
		const { typeOf, addAnother } = answers;
        
        if (!typeOf) {
            employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
        } else if (typeOf === "Engineer") {
            employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
        } else if (typeOf === "Intern") {
            employees.push(new Intern(answers.name, answers.id, answers.email, answers.school))
        } else {
            employees.push(new Employee(answers.name, answers.id, answers.email))
        };

		if (addAnother) {
			prompts(otherEmployeeQuestions);
		} else {
            console.log(employees);
		}
	});
}

prompts(managerQuestions)
;
