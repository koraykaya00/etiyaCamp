// Inheritance

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

}

function Student(favoriteCourse){
    this.favoriteCourse = favoriteCourse;
}

Student.prototype = new Person ("Koray","Kaya");

var koray = new Student("Programing");

alert(koray.firstName + " " + koray.lastName + "javascript " + koray.favoriteCourse);