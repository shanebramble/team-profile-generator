import { Engineer } from "../lib/Engineer.js";
import { Intern } from "../lib/Intern.js";
import inquirer from "inquirer";

function addEngineer() {
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

function addIntern() {
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

export { addEngineer, addIntern };
