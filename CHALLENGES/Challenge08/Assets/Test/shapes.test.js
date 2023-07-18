const {Square, Triangle, Circle} = require("../shapeClass");
const circle = new Circle();
const square = new Square();
const triangle = new Triangle();


describe("Square", () => {
    test("Render svg for a blue square", () => {
      const expectedSquare =
        '<rect x="90" y="40" width="120" height="120" fill="blue" />';
      square.setColor("blue");
      const renderSquare = square.render();
      expect(renderSquare).toEqual(expectedSquare);
    });
})
describe("Circle", () => {
    test("Render svg of purple circle", () => {
        const expectedCircle = '<circle cx="150" cy="100" r="80" fill="purple" />';
        circle.setColor("purple");
        const renderCircle = circle.render();
        expect(renderCircle).toEqual(expectedCircle);
    })
})
describe("Triangle", () => {
    test("Render svg of red Triangle", () => {
        triangle.setColor('red')
        const expectedTriangle = '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
        const triangleRender = triangle.render()
        expect(triangleRender).toEqual(expectedTriangle)
    })
})