const inquirer = require("inquirer");

const {
	managerQs,
	engineerQs,
    internQs,
} = require("./src/questions.js");
const { writeFile, copyFile } = require("./src/generate-site.js");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

// wrapping the inquirer.prompt() calls in functions to allow recursion
// breaking them out into two because only one set of prompts should be recursive
// there should only be one manager

// this runs once, first
function managerPrompts() {
	console.log("Enter the manager's information.\n----------");

	return inquirer
		.prompt(managerQs)
		// .then((answers) =>
		// 	employees.push(
		// 		new Manager(
		// 			answers.name,
		// 			answers.id,
		// 			answers.email,
		// 			answers.officeNumber
		// 		)
		// 	)
		// );
};

function engineerPrompts() {
    return inquirer.prompt(engineerQs);
};

function internPrompts() {
    return inquirer.prompt(internQs);
}

// this has a .then() with a conditional in it, so it can recurse
function otherPrompts(selectedType) {
	return inquirer.prompt(otherEmployeeQuestions);
    // .then((answers) => {
	// 	const { typeOf } = answers;

	// 	if (typeOf === "I don't want to add another employee") {
	// 		console.log(employees);
    //         return '';
	// 	} else {
	// 		if (typeOf === "Engineer") {
	// 			employees.push(
	// 				new Engineer(
	// 					answers.name,
	// 					answers.id,
	// 					answers.email,
	// 					answers.github
	// 				)
	// 			);
	// 		} else if (typeOf === "Intern") {
	// 			employees.push(
	// 				new Intern(
	// 					answers.name,
	// 					answers.id,
	// 					answers.email,
	// 					answers.school
	// 				)
	// 			);
	// 		}

	// 		otherPrompts();
	// 	}
	// });
}

// managerPrompts()
// .then(answers => {
//     console.log(answers);
//     if (answers.typeOfNext === "Engineer") {
//         const newEngineer = otherPrompts();
//         console.log(newEngineer);
//         employees.push(
//             new Engineer(
//                 newEngineer.name,
//                 newEngineer.id,
//                 newEngineer.email,
//                 newEngineer.github
//             )
//         );
//     }
// }
// );

managerPrompts()
.then(answers => {
    employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));

    if (answers.typeOfNext === "Engineer") {
        engineerPrompts("Engineer");
    } else if (answers.typeOfNext === "Intern") {
        internPrompts("Intern");
    }
});