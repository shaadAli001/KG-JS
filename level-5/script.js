// Object
let student = {
  Name: "Shaad Ali",
  Age: 18,
  Qualification: "B.Tech",
  subjects: {
    Theory: `Maths,phhysics`,
    practical: "HMT,MOM",
  },
  //Anonymous Function
  display_specialization: function () {
    console.log(`${this.Qualification} branch is Mechanical`);
  },
};
// console.log(student);
// console.log(student.subjects.Theory);

// student.Age = "20";
// console.log(student["Age"]);

// let degree = "Qualification";
// console.log(student[degree]);

// delete student.Age;
// console.log(student);

student.display_specialization();

// console.log("Hello world".replace("Hello world", "I am Fine!!"));

