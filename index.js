const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license for your project:',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
    // Prompt the user for input
    inquirer.prompt(questions).then((answers) => {
        // Generate README content based on user input
        const readmeContent = generateMarkdown(answers);

        // Write README content to a file
        writeToFile('README.md', readmeContent);
    });
}

// function call to initialize program
init();
