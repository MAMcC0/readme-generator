
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
inquirer
.prompt ([
    {
        type: 'input',
        message: "What is the name of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Give a description of your project:",
        name: 'description',
    },
    {
        type: 'checkbox',
        message: "Do you have installation instructions?",
        choices: ["Yes", "No"],
        name: 'installion-confirm',
    },
    /// how to add a conditional in an array for installation confirm, usage instruction, and tests?
    {
        type: "input",
        message: "Please put any relavent usage instructions for your product:",
        name: 'usage',
    },
    {
        type:'input',
        message: 'How can people contribute to this product?',
        name: 'contributions',
    },
    {
        type:'input',
        message:'What tests are included in this project?',
        name: 'tests',
    },
    {
        type:'input',
        message:'What is your email?',
        name: 'email',
    },
    {
        type:"input",
        message: "What is the link to your Github profile?",
        name:'github',
    },
    {
        type:"checkbox",
        message: "Check which licenses you'd like to attribute to your project.",
        choices: [],//add licenses choices
        name:'license',
    }
]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}


init();
