var Animal = /** @class */ (function () {
    function Animal(config) {
        console.log({ config: config });
        this.length = config.length;
        this.height = config.height;
        this.hasFur = config.hasFur;
        this.hasTail = config.hasTail;
    }
    Animal.prototype.getAnimalCharacteristics = function () {
        console.log("Length: " + this.length);
        console.log("Height: " + this.height);
        console.log("Has Fur: " + this.hasFur);
        console.log("Has Tail: " + this.hasTail);
    };
    return Animal;
}());
var cat = {
    length: 100,
    height: 70,
    hasFur: true,
    hasTail: true
};
new Animal(cat).getAnimalCharacteristics();
var dog = {
    length: 100,
    height: 70,
    hasFur: true,
    hasTail: true
};
new Animal(dog).getAnimalCharacteristics();
var parrot = {
    length: 100,
    height: 70,
    hasFur: true,
    hasTail: true
};
new Animal(parrot).getAnimalCharacteristics();
