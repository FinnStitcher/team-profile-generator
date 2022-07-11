const inquirer = require("inquirer");

const employees = {
    manager: {},
    engineers: [],
    interns: [],
};

// i could probably do something to slim this down
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter manager's name",
    },
    {
        type: "input",
        name: "id",
        message: "Enter manager's ID",
    },
    {
        type: "input",
        name: "email",
        message: "Enter manager's email",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter manager's office number",
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
        message: "Select employee role",
        choices: ["Engineer", "Intern"],
    },
    {
        type: "input",
        name: "name",
        message: "Enter employee's name",
    },
    {
        type: "input",
        name: "id",
        message: "Enter employee's ID",
    },
    {
        type: "input",
        name: "email",
        message: "Enter employee's email",
    },
    {
        type: "input",
        name: "github",
        message: "Enter employee's GitHub username",
        when: ({ typeOf }) => typeOf === "Engineer"
    },
    {
        type: "input",
        name: "school",
        message: "Enter employee's school",
        when: ({ typeOf }) => typeOf === "Intern"
    },
    {
        type: "confirm",
        name: "addAnother",
        message: "Add another employee?",
        default: "true",
    },
];

function prompts(questionArray) {
    inquirer.prompt(questionArray).then((answers) => {
        const { typeOf, addAnother } = answers;

        // the first round of prompts includes no question with the id 'typeOf'
        // so this will determine if it was the first round or not
        if (!typeOf) {
            employees.manager = { ...answers };
        } else {
            const formattedType = typeOf.toLowerCase() + "s";

            // push to the appropriate array
            employees[formattedType].push(answers);
        }

        if (addAnother) {
            prompts(otherEmployeeQuestions);
        } else {
            console.log(employees);
        }
    });
}

prompts(otherEmployeeQuestions);