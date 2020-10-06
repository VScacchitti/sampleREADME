//require modules
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./util/generateMarkdown");
const gitHubInfo = require("./util/github");

//Prompt function

function promptQuestions() {
  return inquirer.prompt([
    {
      type: "input",
      message: "Pleae enter your GitHub username.",
      name: "username",
    },
    {
      type: "input",
      message: "Please enter your email address.",
      name: "email",
    },
    {
      type: "input",
      message: "What is the GitHub URL for project?",
      name: "url",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Give a brief description of this project.",
      name: "description",
    },
    {
      type: "input",
      message: "What packages need to be installed to run this project?",
      name: "installation",
    },
    {
      type: "input",
      message: "What technologies were used in the creation of this project?",
      name: "technology",
    },
    {
      type: "input",
      message: "Give an example of how this application can be used",
      name: "usage",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license would you like to use?",
      name: "license",
      choices: ["MIT", "APACHE2.0", "GPLv3", "BSD3", "No License"],
    },
    {
      type: "input",
      message: "Please list all contributors (yourself included).",
      name: "contributor",
    },
    {
      type: "input",
      message: "What command is used to perform a test?",
      name: "tests",
    },
  ]);
}

//write README
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("You have successfullt written your README!");
  });
}
//init function

async function init() {
  try {
    const answers = await promptQuestions();
    generateMarkdown(answers);
    writeFile("README.md", generateMarkdown(answers));
  } catch (err) {
    console.log(err);
  }
}

init();
