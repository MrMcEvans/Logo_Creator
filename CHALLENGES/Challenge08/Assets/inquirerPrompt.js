const inquirer = require("inquirer");
const { Circle, Triangle, Square} = require("./shapeClass");
const { writeFile } = require("fs/promises");

class SVG {
    constructor(){
        this.textElement,
        this.shapeElement
    }
    render (){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }

    makeText(message, color){
        if (message.length > 3 && 0){
            throw new Error("Incorrect input. Please enter a logo from 1-3 characters");
        }
        this.textElement = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}">${message}</text>`
    }
    makeShape(shape) {
        this.shapeElement = shape.render();
    }
}

class Inquirer {
run() {
    return inquirer
        .prompt([
            {
                name: "text",
                type: "input",
                message: "Enter the text you would like to put in the LOGO! (cannot do more than 3 characters)",
                validate: (text) => text.length <= 3 || "Incorrect input, logo must not be more than 3 characters",
            },
            {
                name: "textColor",
                type: "input",
                message: "Please enter a color",
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Please enter the color you want the shape to be",
            },
            {
                name: "shapeType",
                type: "list",
                message: "Please choose the shape you want the shape to be",
                choices: ["circle, square, triangle"]
            },
        ])
    