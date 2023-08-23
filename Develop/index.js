// TODO: Include packages needed for this application
const prompt = require('prompt-sync')();
const inquirer = require("inquirer");
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = ["What is the title of the project?","What is the description of this project?","What should be in the table of contents?", "What needs to be installed for this application?","How should this application be used?","What license does this project need?","What is a test for the application?","Are contributors welcome on this project?","What is your GitHub username?","What is your email address?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile('README.md', markDown(data), (err) =>
  err ? console.error(err) : console.log('Commit logged!')
);
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt([
{
    type: 'input',
    message: questions[0],
    name: 'title',
},
{
    type: 'input',
    message: questions[1],
    name: 'desc',
},
{
    type: 'input',
    message: questions[2],
    name: 'contents',
},
{
    type: 'input',
    message: questions[3],
    name: 'installs',
},
{
    type: 'input',
    message: questions[4],
    name: 'usage',
},
{ //LICENSE INFO WILL NEED TO BE CHANGED HERE
    type: 'input',
    message: questions[5],
    name: 'license',
},
{
    type: 'input',
    message: questions[6],
    name: 'test',
},
{
    type: 'input',
    message: questions[7],
    name: 'contributors',
},
{
    type: 'input',
    message: questions[8],
    name: 'username',
},
{
    type: 'input',
    message: questions[9],
    name: 'email',
},

])
.then((response)=>{
    writeToFile(response.title,response)
});
}

// Function call to initialize app
init();

