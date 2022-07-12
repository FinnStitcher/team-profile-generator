const inquirer = require("inquirer");

const { managerQuestions, otherEmployeeQuestions } = require('./src/questions.js');
const { writeFile, copyFile } = require('./src/generate-site.js');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

// wrapping the inquirer.prompt() calls in functions to allow recursion
// breaking them out into two because only one set of prompts should be recursive
// there should only be one manager

// this runs once, first
function managerPrompts () {
    console.log("Enter the manager's information.\n----------");

    return inquirer.prompt(managerQuestions)
    .then(answers => employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber)));
};

// this has a .then() with a conditional in it, so it can recurse
function otherPrompts () {
    return inquirer.prompt(otherEmployeeQuestions)
    .then(answers => {
		const { typeOf, addAnother } = answers;
        
        if (typeOf === "Engineer") {
            employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
        } else if (typeOf === "Intern") {
            employees.push(new Intern(answers.name, answers.id, answers.email, answers.school))
        };

		if (addAnother) {
            otherPrompts();
		} else {
            console.log(employees);
		}        
    })
};

managerPrompts()
.then(otherPrompts);