abstract class Animal {
  abstract makeSound(): void;

  move() {
    console.log("Animal moves");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof");
  }
}

const dog = new Dog();
dog.makeSound();
dog.move();
