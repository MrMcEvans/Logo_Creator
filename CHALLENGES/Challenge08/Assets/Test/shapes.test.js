const {Square, Triangle, Circle} = require("../shapeClass");
const circle = new Circle();
const square = new Square();
const triangle = new Triangle();


describe("Square", () => {
    test("Render svg of blue square"), () => {
        square.setColor('blue')
        const expectedSquare = '<rect x="90" y="40" width="120" height="120" fill="blue"/>'
        const squareRender = square.render()
        expect(squareRender).toEqual(expectedSquare)
    }
})
describe("Circle", () => {
    test("Render svg of purple circle"), () => {
        circle.setColor('purple')
        const expectedcircle = '<circle cx="150" cy="100" r="80" fill="purple"/>'
        const circleRender = circle.render()
        expect(circleRender).toEqual(expectedcircle)
    }
})
describe("Triangle", () => {
    test("Render svg of red Triangle"), () => {
        triangle.setColor('red')
        const expectedTriangle = '<polygon points="150, 18 244, 182 56, 182" fill="red"/>'
        const triangleRender = triangle.render()
        expect(triangleRender).toEqual(expectedTriangle)
    }
})