import inquirer from "inquirer";

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
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
}

export { Employee };
