import inquirer from "inquirer";
import { Manager } from "./Manager.js";
import { Engineer } from "./Engineer.js";
import { Intern } from "./Intern.js";
import { pageTemplate } from "../src/page-template.js";
import fs from "fs";

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
          validate: (engineerName) => {
            if (engineerName) {
              return true;
            } else {
              console.log("Please enter the engineer's name!");
              return false;
            }
          },
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
          validate: (engineersEmail) => {
            if (engineersEmail) {
              return true;
            } else {
              console.log("Please enter the engineer's email address!");
              return false;
            }
          },
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
    // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu.
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Please enter the intern's name:",
          validate: (internsName) => {
            if (internsName) {
              return true;
            } else {
              console.log("Please enter the intern's name!");
              return false;
            }
          },
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
          validate: (internEmail) => {
            if (internEmail) {
              return true;
            } else {
              console.log("Please enter the intern's email address!");
              return false;
            }
          },
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

  createWebpage(manager, engineers, interns) {
    const fileContent = pageTemplate(manager, engineers, interns);

    fs.writeFile("./dist/index.html", fileContent, (err) => {
      if (err) throw err;
      console.log("The team website has been created!");
    });
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) throw err;
      console.log("The team website's css has been copied!");
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
            console.log("You have finished building your team");
            this.createWebpage(this.manager, this.engineers, this.interns);
            break;
        }
      });
  }

  init() {
    // A prompt asking a user for the team managers details.
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Please enter the team manager's name:",
          validate: (managerName) => {
            if (managerName) {
              return true;
            } else {
              console.log("Please enter the team manager's name!");
              return false;
            }
          },
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
          validate: (managerEmail) => {
            if (managerEmail) {
              return true;
            } else {
              console.log("Please enter the team manager's email address!");
              return false;
            }
          },
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
        // A menu showing a list of options to add an employee.
        this.menu();
      });
  }
}

export { Team };
