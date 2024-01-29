//Imports
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

function logoMaker() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What 3 characters should display on your logo?',
        },

        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like your text? Enter a color keyword (OR a hexadecimal number)',
        },

        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape forf your logo',
            choices: ['Triangle', 'Circle', 'Square'],
        },

        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape? Enter a color keyword (OR a hexadecimal number)',
        },
    ])
    .then((options) => {
        if (options.text.length > 3) {
            console.log('You entered more than three characters!');
            logoMaker();
        }

        if (options.shape === 'Triangle') {
            Triangle = new Triangle(options.text, options.textColor, options.shapeColor)
            fs.writeFile('./examples/newTriangleLogo.svg', Triangle.render(), (err) => {
                if (err) {
                    console.error(err);
                }
            })
        } else if (options.shape === 'Circle') {
            Circle = new Circle(options.text, options.textColor, options.shapeColor)
            fs.writeFile('./examples/newCircleLogo.svg', Circle.render(), (err) => {
                if (err) {
                    console.error(err);
                }
            })
        } else {
            Square = new Square(options.text, options.textColor, options.shapeColor)
            fs.writeFile('./examples/newSquareLogo.svg', Square.render(), (err) => {
                if (err) {
                    console.error(err);
                }
            })
        }
    });
}

logoMaker();