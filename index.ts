type LengthOfAnimal = number
type HeightOfAnimal = number
type AnimalHasFur = boolean
type AnimalHasTail = boolean

class Animal {
    private length: LengthOfAnimal;
    private height: HeightOfAnimal;
    private hasFur: AnimalHasFur;
    private hasTail: AnimalHasTail;

    constructor(
        config: {
            length: LengthOfAnimal;
            height: HeightOfAnimal;
            hasFur: AnimalHasFur;
            hasTail: AnimalHasTail;
        }
    ) {
        this.length = config.length;
        this.height = config.height;
        this.hasFur = config.hasFur;
        this.hasTail = config.hasTail;
    }

    public getAnimalCharacteristics() {
        console.log("Length: " + this.length);
        console.log("Height: " + this.height);
        console.log("Has Fur: " + this.hasFur);
        console.log("Has Tail: " + this.hasTail);
    }
}

const cat = {
    length: 100,
    height: 70,
    hasFur: true,
    hasTail: true
};
new Animal(cat).getAnimalCharacteristics();
const dog = {
    length: 100,
    height: 70,
    hasFur: true,
    hasTail: true
};
new Animal(dog).getAnimalCharacteristics();
const parrot = {
    length: 100,
    height: 70,
    hasFur: true,
    hasTail: true
};
new Animal(parrot).getAnimalCharacteristics();