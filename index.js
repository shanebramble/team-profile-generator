const inquirer = require('inquirer');
const fs = require('fs');

var addTeamMembers = function () {
    console.log('Please Enter your Team Members:');

    inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: "Please enter team manager's name:"
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter team manager's id:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter team manager's email address:"
        },
        {
            type: 'number',
            name: 'number',
            message: "Please enter office number:"
        }
    ])
    .then (ans => {
        console.log(ans);
    });
};

addTeamMembers();