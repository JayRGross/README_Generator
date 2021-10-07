const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown');

const promptUser = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'Title',
        message: 'Whats the project title?'
        },
        {
        type: 'input',
        name: 'Description',
        message: 'Describe your project?'
        },
        {
        type: 'input',
        name: 'Installation',
        message: 'What packages did you install?'    
        },
        {
        type: 'input',
        name: 'Usage',
        message: 'What are some usage examples?'
        },
        {
        type: 'input',
        name: 'Contributing',
        message: 'How did you contribute to your project?'    
        },
        {
        type: 'input',
        name: 'Test',
        message: 'How do you test?'    
        },
        {
        type: 'input',
        name: 'Email',
        message: 'Enter your email address'    
        },
        {
        type: 'input',
        name: 'Github',
        message: 'What is your github username?'    
        },
        {
        type: 'list',
        name: 'License',
        message: 'choose a license for your README.',
        choices: [
            'Apache2', 
            'GNUGPv3',
            'IBM',
            'BSD',
            'MIT',
            'Mozilla',
        ]
    }    
    ])
};
const generateReadMe = () => {
    promptUser()
    .then((answers) => fs.writeFile('READ.md', generateMarkdown(answers), () => console.error('your file has been generated')))
    .catch((err) => {console.log(err)})
};