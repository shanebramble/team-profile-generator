import inquirer from "inquirer";

class Team {
  constructor() {}
  menu() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "menu",
          message: "Who would you like to add?",
          choices: [
            "add an engineer",
            "add an intern",
            "finish building my team",
          ],
        },
      ])
      .then((answer) => {
        console.log(answer);
      });
  }

  init() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Please enter the team manager's name:",
        },
        {
          type: "number",
          name: "managerID",
          message: "Please enter the team manager's ID:",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Please enter the team manager's email address:",
        },
        {
          type: "number",
          name: "officeNumber",
          message: "Please enter the team manager's office number:",
        },
      ])
      .then((answer) => {
        console.log(answer);

        this.menu();
      });
  }
}

export { Team };
