// create a constant to access the inquirer package
const inquirer = require('inquirer');
// create a constant that access the fileSystem (fs)
const fs = require('fs');
// const {generateMarkdown } =  require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [];

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
    ])
    .then((userInput) => {
        generateMarkdown(userInput)
        const readmeInfo = generateMarkdown(userInput);
        console.log(readmeInfo);
        writeToFile('./dist/README.md', readmeInfo);
    })
}

// Function call to initialize app
init();
