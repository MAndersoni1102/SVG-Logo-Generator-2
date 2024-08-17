const Shape = class{
    constructor(color){
        this.color = color;
    }
}

const Circle = class extends Shape{
    constructor(color){
        super(color)
    }
    render(){
        return `<circle cx="155" cy="100" r="97" stroke="black" stroke-width="3" fill="${this.color}" />`;
    }
}

const Square = class extends Shape{
    constructor(color){
        super(color)
    }
    render(){
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
    }
}

const Triangle = class extends Shape{
    constructor(color){
        super(color)
    }
    render(){
        return `<polygon points="25 175, 150 0, 275 175" fill="${this.color}" />`;
    }
}

module.exports = {Circle, Square, Triangle};