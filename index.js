import("inquirer").then((inquirer) => {
    const fs = require("fs");
  const shapes = require("./lib/shapes");
  
    const questions = [
      {
        type: "input",
        name: "text",
        message: "Enter Logo Text",
        validate: function (value) {
          if (value.length <= 3) {
            return true;
          }
          return "Please enter up to three characters.";
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter color for logo text:",
        validate: function (value) {
          const isValidColor =
            /^#([0-9A-F]{3}){1,2}$/i.test(value) || /^([a-z]+)$/i.test(value);
          if (isValidColor) {
            return true;
          }
          return "Please enter a valid color.";
        },
      },
      {
        type: "list",
        name: "shape",
        message: "Pick a logo shape",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your shape to be?",
        validate: function (value) {
          const isValidColor =
            /^#([0-9A-F]{3}){1,2}$/i.test(value) || /^([a-z]+)$/i.test(value);
          if (isValidColor) {
            return true;
          }
          return "Please enter a valid color.";
        },
      },
    ];
  
    inquirer.default.prompt(questions).then((answers) => {
      const shape = new shapes[answers.shape](answers.shapeColor);
      const svg = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x='90' y='125' font-family='cursive' font-size='60' fill="${answers.textColor}">${answers.text}</text>
    </svg>`
     
  
      fs.writeFileSync("logo.svg", svg);
      console.log("Generated logo.svg");
    });
  });