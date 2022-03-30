// create a constant to access the inquirer package
const inquirer = require('inquirer');
// create a constant that access the fileSystem (fs)
const fs = require('fs');
// const {generateMarkdown, renderLicenseBadge } =  require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [];

const licenseChoices = ['MIT','Apache','Mozilla','Perl','Eclipse'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            console.error(err)
            return
        }
        console.log('Document created in dist folder')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please add a description to your project. (Required)',
            validate: descInput => {
                if(descInput) {
                    return true;
                } else {
                    console.log('Please provide a description');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide a description of how to get the development environment running. (Required)',
            validate: installInput => {
                if(installInput) {
                    return true;
                } else {
                    console.log('Please provide steps to install the development environment');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed. (Reguired)',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please provide usage instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Provide a list of contributors, github names only (Reguired)',
            validate: contributorInput => {
                if(contributorInput) {
                    return true;
                } else {
                    console.log('Please provide usage instructions');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Chose the necessary license for this project (Reguired)',
            choices: licenseChoices,
            validate: contributorInput => {
                if(contributorInput) {
                    return true;
                } else {
                    console.log('Please provide usage instructions');
                    return false;
                }
            }
        }
    ])
    .then((userInput) => {
        generateMarkdown(userInput);
        // renderLicenseBadge(userInput.license);
        const readmeInfo = generateMarkdown(userInput);
        // console.log(userInput.license);
        writeToFile('./dist/README.md', readmeInfo);
    })
}

// Function call to initialize app
init();
