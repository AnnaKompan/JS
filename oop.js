const employee = {
  baseSalary: 100,
  rate: 10,
  overtime: 2,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

const firstEmployee = Object.create(employee);
firstEmployee.name = "Sean";

console.log(firstEmployee);
console.log(employee.isPrototypeOf(firstEmployee)); //true
console.log(firstEmployee.hasOwnProperty("rate")); //false
console.log(firstEmployee.baseSalary); //100

const firstEmployeeKeys = Object.keys(firstEmployee);
console.log(firstEmployeeKeys); // [ 'name' ]

// Class + конструктор класу
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const hanna = new User("Hanna", "mail@mail.com");
console.log(hanna);

// або деструктуризація для більшої кількості вхідних даних

class Animal {
  constructor({ name, skills }) {
    this.name = name;
    this.skills = skills;
  }
  addSkill(newSkill) {
    this.skills.push(newSkill);
  }
  setName(newName) {
    this.name = newName;
  }
  getName() {
    return this.name;
  }
}
const tiger = new Animal({
  name: "Mimi",
  skills: ["running", "jumping", "roaring"],
});
tiger.addSkill("biting");
console.log(tiger); //Animal { name: 'Mimi', skills: [ 'running', 'jumping', 'roaring', 'biting' ]}

tiger.setName("Miami");
console.log(tiger.getName()); // Miami

// 1. Encapsulation(class); 2. Abstraction(#email) 3. Polymorhism(new Animal()) 4. Inheritence(class User extends Human{})
