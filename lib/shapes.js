class ShapesConstructor {
    constructor(text, textColor, color) {
        this.text = text,
        this.textColor = textColor,
        this.color = color
    }
 }

//Triangle
class Triangle extends ShapesConstructor {
    render() {
        return `<svg version="2.1" width="300" height="200" viewBox="0, 0, 100,100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>
        <text x="49" y="80" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

//Circle
class Circle extends ShapesConstructor {
    render() {
        return `<svg version="2.1" width="300" height="200" viewBox="0, 0, 100,100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="25" fill="${this.color}/>
        <text x="50" y="60" font-size="25" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

//Square
class Square extends ShapesConstructor {
    render() {
        return `<svg version="2.1" width="500" height="500" viewBox="0, 0, 100,100" xmlns="http://www.w3.org/2000/svg">
        <rect width="450" height="450" fill="${this.color}"/>
        <text x="50" y="65" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

module.exports = { Triangle, Circle, Square};