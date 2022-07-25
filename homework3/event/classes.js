// Classes

// siniflar nesnel programinin en temel yapi tasidir.

function Customer(firstName,lastName) { // constructor
    this.firstName = firstName;         // public
    this.lastName = lastName;


    var someField = "some value";       //private


    this.sendProduct() = function () {  //operation
        alert("Product send!")
    }
}

var koray = new Customer("Koray","Kaya");

koray.sendProduct()