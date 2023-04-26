// Class is a blueprint for creating objects, define what propreties and methods they have and use a constructor for unique proprieties

class Player {
    // score is a player propriety
    score = 0;

    // those are methods
    pause() {
        console.log('You paused the game');
    }
    exit() {
        console.log('You exited the game');
    }
}

// creating a player
const player1 = new Player();
const player2 = new Player();

// increasing his score
player1.score += 1;
console.log(player1.score);
console.log(player2.score);
// Using their methods
player1.pause();
player2.exit();


class Student {
    // You can use static to create methods and proprieties wich belong to the class as:
    static numberOfStudents = 0
    // Constructor
    constructor(name, age, gpa) {
        Student.numberOfStudents ++;
        // Use the name, age and gpa that will be given when creating the student.
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study() {
        console.log(`${this.name} is studying`);
    }
}
console.log(`The name is ${this.name}, ${this.age} years old, GPA: ${this.gpa}`);

let students = [
    new Student('Spongebob', 27, 3.2),
    new Student('Patrick', 25, 2.2),
    new Student('Sandy', 23, 4.2)
];

console.log(Student.numberOfStudents);

students.forEach(student => console.log(`The name is ${student.name}, ${student.age} years old, GPA: ${student.gpa}`));
