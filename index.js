const inquirer = require('inquirer');
const fs = require('fs');
const Logo = require('./lib/logo');

 inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter Logo Text',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter color for logo text',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Pick a logo shape',
        choices: ['circle','square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?',
    }
]).then(answers => {
    console.log(answers);
    const logo = new Logo(answers.text, answers.textColor, answers.shape, answers.shapeColor);

    const logoSVG = logo.render();

    console.log(logoSVG)

    fs.writeFile('./examples/logo.svg', logoSVG, err => {
        if (err) throw err;
        console.log('file created');
    });
});