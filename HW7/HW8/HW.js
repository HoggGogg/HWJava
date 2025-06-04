class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince{
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const Cindererllas = [
    new Cinderella('qwe', 55, 45),
    new Cinderella('asd', 12, 33),
    new Cinderella('zxc', 34, 41),
    new Cinderella('ert', 22, 36),
    new Cinderella('dfg', 18, 35),
    new Cinderella('cvb', 16, 37),
];

const prince = new Prince('Ignat', 71, 36);

for (const cindererlla of Cindererllas) {
    if (cindererlla.footSize === prince.slipper){
        prince.wife = cindererlla;
    }
}