//Movie.md
class Movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
    
    getRating() {
        console.log(this.rating)
        return "the rating is  " + this.rating;
    }
}
let CasinoRoyale = new Movie( "Casino Royal", "Eon Productions", "PG13");

console.log(CasinoRoyale.studio)

//class-circle.md

class Circle {
    constructor(){
        this.radius = 1.0;
        this.color = "red"
    }

    constructor(radius){
        this.radius = radius;
        this.color = "red"
    }

    constructor(radius , color){
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return `The radius = ${this.radius}`
    }

    setradius(radius) {
        this.radius = radius;
    }

    getColor() {
        return `${color}`
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle[radius = ${this.radius} ,color = ${this.color}]`;
    }

    getArea() {
        return 3.14*this.radius*this.radius
    }

    getCircumference() {
        return 2*3.14*this.radius
    }

}

class Uber {
    constructor(distance) {
        this.rate = 25 ;
        this.distance = distance
    }

    getPrice(distance) {
        return this.rate * distance; 
    }
}

