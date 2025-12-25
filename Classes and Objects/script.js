// const student = {
//     Name: "Shaad",
//     Age: 22,
//     CGPA: "90%",
//     printMarks: function () {
//         console.log(`Marks Obtained : ${this.CGPA}`);
//     }
// };

// student.printMarks();


// Prototype is a property by which method of one Object can be accessed  
// to another Object

const gene = {
    GeneType: "Homo Sapiens",
};

const person1 = {
    Name: "Shaad",
};
const person2 = {
    Name: "Ali",
};
const person3 = {
    Name: "karan",
};

person1.__proto__ = gene;
person2.__proto__ = gene;
person3.__proto__ = gene;

// console.log(`Name:${person1.Name}\tGene:${person1.GeneType}`);



// Classes

class Car {
    constructor(brand, milage) {
        this.brand = brand;
        this.milage = milage;
        // console.log('Brand' + " " + brand);
        // console.log('Milage' + " " + milage + "km/hr");
    }
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
};

class Vehicle extends Car {
    Engine() {
        console.log("Petrol Engine");
    }
}

let Toyata = new Car("Innova", '50 km/hr');
// console.log(Toyata);

let Maruti = new Car("Alto 800", '38 km/hr');
// console.log(Maruti);

let vehicle = new Vehicle();
// console.log(vehicle);

class Person {
    constructor() {
        this.species = "Homo Sapiens"
    }
    Eat() {
        console.log("Eat");
    }
    Sleep() {
        console.log("Sleep");
    }
};

class Engineer extends Person {
    constructor(branch) {
        this.Branch = branch;
    }
    work() {
        console.log("Problem Solving");
    }
    Details(name, age) {
        this.Name = name;
        this.Age = age;
        console.log(this.Name, this.Age);
    }
}


let engineer = new Engineer("Mechanical Engineer");
engineer.Details("Shaad", 22);

console.log(engineer.Name);



