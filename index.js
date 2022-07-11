const inquirer = require("inquirer");

const { managerQuestions, otherEmployeeQuestions } = require('./src/questions.js');

const employees = {
	manager: {},
	engineers: [],
	interns: [],
};

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
