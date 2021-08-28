const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeList = [];
const idList = [];

// A command line prompt asking information about Manager.
var addManager = function () {
    console.log('---------- Please Build you Team -------------');

    inquirer.prompt([{
                type: 'input',
                name: 'managerName',
                message: "Please enter team manager's name:",
                validate: input => {
                    if (input == "") {
                        console.log("Please enter a correct name.");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'number',
                name: 'managerId',
                message: "Please enter team manager's id:"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Please enter team manager's email address:",
                validate: input => {
                    if (input == "") {
                        console.log("Please enter a correct email address.");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'number',
                name: 'managerNumber',
                message: "Please enter office number:",
            }
        ])
        .then(ans => {
            const managerEmployee = new Manager(ans.managerName, ans.managerId, ans.managerEmail, ans.managerNumber);
            employeeList.push(ans);
            idList.push(ans.managerId);
            createTeam();
        });


};

function createTeam() {
    inquirer.prompt([{
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "Finish building my team"
        ]
    }]).then(ans => {
        switch (ans.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
}

function addEngineer() {
    inquirer.prompt([{
            type: "input",
            name: "engineerName",
            message: "What is your engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your engineer's id?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is your engineer's GitHub username?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        employeeList.push(engineer);
        idList.push(answers.engineerId);
        createTeam();
    });
}

function addIntern() {
    inquirer.prompt([{
            type: "input",
            name: "internName",
            message: "What is your intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?",
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is your intern's school?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        employeeList.push(intern);
        idList.push(answers.internId);
        createTeam();
    });
}

function buildTeam() {

}

// Start the Command Line Prompts
var initApp = function () {
    addManager();
    // createTeam();
    // addEngineer();
    // addIntern();
    // buildTeam();
    // addManager();
};

initApp();