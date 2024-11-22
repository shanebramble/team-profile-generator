import inquirer from "inquirer";
import { Manager } from "./Manager.js";
import { Engineer } from "./Engineer.js";
import { Intern } from "./Intern.js";
// import { createTemplate } from "../src/page-template.js";

class Team {
  constructor() {
    this.manager;
    this.engineers = [];
    this.interns = [];
  }

  addEngineer() {
    // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Please enter the engineer's name:",
        },
        {
          type: "number",
          name: "engineerID",
          message: "Please enter the engineer's ID:",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Please enter the engineer's email address:",
        },
        {
          type: "input",
          name: "engineerGitHub",
          message: "Please enter the engineer's GitHub:",
        },
      ])
      .then((answer) => {
        this.engineers.push(
          new Engineer(
            answer.engineerName,
            answer.engineerID,
            answer.engineerEmail,
            answer.engineerGitHub
          )
        );
        // console.log(this.engineers);
        this.menu();
      });
  }

  addIntern() {
    // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Please enter the intern's name:",
        },
        {
          type: "number",
          name: "internID",
          message: "Please enter the intern's ID:",
        },
        {
          type: "input",
          name: "internEmail",
          message: "Please enter the intern's email address:",
        },
        {
          type: "input",
          name: "internSchool",
          message: "Please enter the intern's school:",
        },
      ])
      .then((answer) => {
        this.interns.push(
          new Intern(
            answer.internName,
            answer.internID,
            answer.internEmail,
            answer.internSchool
          )
        );
        this.menu();
      });
  }

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
        switch (answer.menu) {
          case "add an engineer":
            this.addEngineer();

            break;
          case "add an intern":
            this.addIntern();

            break;
          case "finish building my team":
            console.log("You want to finish building your team");
            console.log(this.manager);
            console.log(this.engineers);
            console.log(this.interns);
            break;
        }
        // console.log(answer);
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
        this.manager = new Manager(
          answer.managerName,
          answer.managerID,
          answer.managerEmail,
          answer.officeNumber
        );

        // createTemplate(this.manager);
        this.menu();
        
      });
  }
}

export { Team };
