class Animal {
    noOflegs;
    color;
    family;
    sound;

    constructor(noOflegs,color,family,sound){
        this.noOflegs = noOflegs;
        this.color = color;;
        this.family = family;
        this.sound = sound;
    }
    showAnimal(){
        console.log(`the animal is ${this.family }`);
    }
}

let animal = new Animal(4,"brown","rodent", "something");
// console.log(animal);
animal.showAnimal();