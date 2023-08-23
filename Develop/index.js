// Packages needed for this application
const prompt = require('prompt-sync')();
const inquirer = require("inquirer");
const fs = require('fs');
//Module needed for this application
const markDown = require('./utils/generateMarkdown.js');


// Array of questions for user input
const questions = ["What is the title of the project?","What is the description of this project?","What should be in the table of contents?", "What needs to be installed for this application?","How should this application be used?","What license does this project need?","What is a test for the application?","How can other developers contribute to this application?","What is your GitHub username?","What is your email address?"];

// Function to write README file
function writeToFile(fileName, data) {
    fs.appendFile('README.md', markDown.generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    );
}

//Function to start the command line prompts
function startPrompts(licArray) {
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
            type: 'list',
            message: questions[5],
            name: 'licenses',
            choices: licArray,
        },
        {
            type: 'input',
            message: questions[6],
            name: 'test',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'contribute',
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
            writeToFile(response.title,response);
        });
}

//API function to pull most common Liscense Types
function commonLicenses() {
    fetch('https://api.github.com/licenses')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const licArray = [];
        for (let i=0; i<data.length; i++){
            licArray.push(data[i].spdx_id);
        }
    startPrompts(licArray);
    })
}


// Function to initialize app
function init() {
    commonLicenses();
}

// Function call to initialize app
init();

