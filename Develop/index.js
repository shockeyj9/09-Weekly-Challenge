// TODO: Include packages needed for this application
const prompt = require('prompt-sync')();

// TODO: Create an array of questions for user input
const questions = ["What is the title of the project?","What is the description of this project?","What should be in the table of contents?", "What needs to be installed for this application?","How should this application be used?","What license does this project need?","What is a test for the application?","Are contributors welcome on this project?","What is your GitHub username?","What is your email address?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    const data = {};
    data.title = prompt(questions[0]);
    data.desc = prompt(questions[1]);
    data.contents = prompt(questions[2]);
    data.installs = prompt(questions[3]);
    data.usage = prompt(questions[4]);
    // data.license = prompt(questions[5]);--->LICENSE???
    data.test = prompt(questions[6]);
    data.contributors = prompt(questions[7]);
    data.userName = prompt(questions[8]);
    data.email = prompt(questions[9]);
    writeToFile('README.md',data);
}

// Function call to initialize app
init();

