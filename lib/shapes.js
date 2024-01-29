class ShapesConstructor {
    constructor() {
        this.color = " ";
    }

    color(colorChoice) {
        this.color = colorChoice;
    }
};

//Triangle
class Triangle extends ShapesConstructor {
    render() {
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>`;
    }
};

//Circle
class Circle extends ShapesConstructor {
    render() {
        return `<circle cx="25" cy="75" r="75"/>`
    }
};

//Square
class Square extends ShapesConstructor{
    render() {
        return `<rect x="10" y="10" width="75" height="75" fill="${this.color}"/>`
    }
};

module.exports = { Triangle, Circle, Square};