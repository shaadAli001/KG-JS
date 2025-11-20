// Object
// let student = {
//   Name: "Shaad Ali",
//   Age: 18,
//   Qualification: "B.Tech",
//   subjects: {
//     Theory: `Maths,phhysics`,
//     practical: "HMT,MOM",
//   },
//   //Anonymous Function
//   display_specialization: function () {
//     console.log(`${this.Qualification} branch is Mechanical`);
//   },
// };
// console.log(student);
// console.log(student.subjects.Theory);

// student.Age = "20";
// console.log(student["Age"]);

// let degree = "Qualification";
// console.log(student[degree]);

// delete student.Age;
// console.log(student);

// student.display_specialization();

// Auto Boxing => convert Primitive to objects
// console.log("Hello world".replace("Hello world", "I am Fine!!"));

// Object Refrences
// let a = 5;
// let b = a;
// console.log(`a=${a},b=${b}`);
// a = 10;
// console.log(`a=${a},b=${b}`);

// let x = { num: 5 };
// let y = x;
// console.log(`x=${x.num},y=${y.num}`);
// x.num = 10;
// console.log(`x=${x.num},y=${y.num}`);

// // Here it wil return false because both objects has diffrent refrences even after their values are same!
// let p = { para: "abc" };
// let q = { para: "abc" };
// console.log(p === q);

// Object Shortcut

let student = {
  Name: "Shaad Ali",
  Age: 18,
  Qualification: "B.Tech",
  subjects: {
    Theory: `Maths,phhysics`,
    practical: "HMT,MOM",
  },
  display_abilities() {
     console.log(`knowledge in ${this.subjects.Theory}`);
  },
};

let { Name, subjects } = student;
console.log(Name);
student.display_abilities();
