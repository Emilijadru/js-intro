console.clear();

class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'Miau Au Cypt Cham';
    }
    sayHi() {
        return `${this.name}: ${this.sound} as esu ${this.color} spalvos!`;
    }
    setColor(newColor) {
        this.color = newColor;
    }
}

class Dog extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Au au';
    }
    repeatTwice() {
        return 'repeat in progress..';
    }
}

class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Miau miau';
    }
}

class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Cham cham';
    }
}



const rex = new Dog('Rex', 'juodos');
console.log(rex.sayHi());
console.log(rex.repeatTwice());

const garfildas = new Cat('Garfildas', 'oranzines');
console.log(garfildas.sayHi());

const tom = new Hamster('Tom', 'juodos');
console.log(tom.sayHi());