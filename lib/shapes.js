class ShapesConstructor {
    constructor(color, text, textColor) {
        this.color = color,
        this.text = text,
        this.textColor = textColor
    }
 }

//Triangle
class Triangle extends ShapesConstructor {
    render() {
        return `<svg version="1.1" width="500" height="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50 15, 100 100, 0 100" fill="${color}"/>
        <text x="200" y="150" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    }
};

//Circle
class Circle extends ShapesConstructor {
    render() {
        return `<svg version="1.1" width="500" height="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="75" r="75" fill="${color}/>
        <text x="200" y="150" font-size="75" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    }
};

//Square
class Square extends ShapesConstructor{
    render() {
        return `<svg version="1.1" width="500" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="75" height="75" fill="${color}"/>
        <text x="200" y="150" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    }
};

module.exports = { Triangle, Circle, Square};