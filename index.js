const inquirer = require('inquirer');
const fs = require('fs');

const readMeData = (input) => `
# Title
${input.Title}
## Description
${input.Description}
## Installation
${input.Installation}    
## Usage
${input.Usage}
## Contributing
${input.Contributing}
## Test
${input.Test}
## Email
${input.Email}
## Github
${input.Github}
## License
${input.License}
`

 inquirer
 .prompt([
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
.then((input) => {
    const readMe = readMeData(input)
    const filename = 'README.md';

    fs.writeFile(filename, readMe, (err) =>
    err ? console.log(err) : console.log('sucess'));
});