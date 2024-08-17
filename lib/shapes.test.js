const {Circle, Square, Triangle} = require('./shapes');
describe("Circle",()=>{
    test("should return a circle svg",()=>{
        const circle = new Circle("red");
        expect(circle.render()).toBe('<circle cx="155" cy="100" r="97" stroke="black" stroke-width="3" fill="red" />')
    })
})
describe("Square",()=>{
    test("should return a square svg",()=>{
        const square = new Square("blue");
        expect(square.render()).toBe('<rect x="75" y="25" width="150" height="150" fill="blue" />')
    })
})
describe("Triangle",()=>{
    test("should return a triangle svg",()=>{
        const triangle = new Triangle("green");
        expect(triangle.render()).toBe('<polygon points="25 175, 150 0, 275 175" fill="green" />')
    })
})