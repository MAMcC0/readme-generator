
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

function init (){
// questions for prompt
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
        type: 'input',
        message: "What are your installation instructions?",
        name: 'installation',
    },
    {
        type: "input",
        message: "Please put any relavent usage instructions for your product:",
        name: 'usage',
    },
    {
        type:'input',
        message: 'How can people contribute to this project?',
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
        type:"list",
        message: "Check which licenses you'd like to attribute to your project.",
        choices: ["Attribution 4.0 International", "Eclipse Public", "MIT", "Open Database"],
        name:'license',
    }
])


// promise to write readme file with a console to show if markdown is working
.then(data => {
    fs.writeFile("READMESample.md", generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Generating Markdown...'))
})
}

init()

