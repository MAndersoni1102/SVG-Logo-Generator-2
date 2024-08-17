const { Circle, Square, Triangle } = require("./shapes")

class Logo {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    getShape() {
        if(this.shape === "circle"){
            let shape = new Circle(this.shapeColor)
            return shape.render();
        } else if (this.shape === "square"){
            let shape = new Square(this.shapeColor)
            return shape.render();
        } else if (this.shape === "triangle"){
            let shape = new Triangle(this.shapeColor)
            return shape.render();
        } else {
            return "error"
        }
            
        
    }

    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            ${this.getShape()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }    
}

module.exports = Logo;