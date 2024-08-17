class Shape {
    // properties
    constructor(color) {
        this.color = color;
    }


}

class Circle extends Shape {
    // methods
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square extends Shape {
    // methods
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    // methods
    render() {
        return `<polygon points="150, 20, 250,200, 50,200" fill="${this.color}" />`
    }
}
module.exports = {
    Circle,
    Square,
    Triangle
};